import User from "../models/UserSchema.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";
const hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(11); 
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
};



const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already registered" });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create new user
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        // Generate token
        const token = generateToken(email);

        // Set cookie
        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 60 * 60 * 1000,
        });

        // Respond with success
        return res.status(201).json({
            message: "Registration successful",
            user: { username: newUser.username, email: newUser.email },
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Server error" });
    }
};
 const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};