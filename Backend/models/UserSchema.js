import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:[true,"Email is required"],
    unique: true,
    lowercase: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
},
password:{
    type:String,
    required:true
}
},
)

module.exports=mongoose.model("User",UserSchema);