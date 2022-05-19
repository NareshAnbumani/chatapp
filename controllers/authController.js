const User = require("../models").user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find the user
    const cuser = await User.findOne({
      where: {
        email: email,
      },
    });
    console.log(cuser);
    if (!cuser) return res.status(404).json({ message: "user not found" });
    console.log(password);

    // check if the password matches

    if (!bcrypt.compareSync(password, cuser.password))
      return res.status(401).json({ message: "Incorrect password!" });
    const userWithToken = generateToken(cuser.get({ raw: true }));
    return res.send(userWithToken);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const userWithToken = generateToken(user.get({ raw: true }));
    return res.send(userWithToken);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const generateToken = (user) => {
  delete user.password;

  const token = jwt.sign(user, "secret", { expiresIn: 86400 });

  return { ...{ user }, ...{ token } };
};
