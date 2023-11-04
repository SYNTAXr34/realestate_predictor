const User = require("../Models/User");
const bcrypt = require("bcrypt");

exports.createAccount = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const usernameExists = await User.findOne({ username });
    if (usernameExists)
      return res.render("users/login", {
        error: "Username is already exists.",
      });
    const emailExists = await User.findOne({ email });
    if (emailExists)
      return res.render("users/login", { error: "Email is already exists." });

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hash,
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
