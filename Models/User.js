const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true, index: true, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    avatarURL: { type: String, default: "/default_avatar.png" },
    role: { type: String, enum: ["Admin", "Broker", "User"], default: "User" },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
