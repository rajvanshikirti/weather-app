import nodemailer from "nodemailer";
const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can use any SMTP provider
      auth: {
        user: "yourEmail@gmail.com",
        pass: "yourAppPassword", // Use App Password, not normal password
      },
    });

    const mailOptions = {
      from: "yourEmail@gmail.com",
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email not sent", error);
  }
};

export default sendEmail;
