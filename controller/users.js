const { Users } = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRETKEY = "JWTSECRET";

module.exports.signUp = async (req, res) => {
  const user = req.body;
  try {
    const password = await bcrypt.hash(user.password, 12);
    const newUser = new Users({ ...user, password });
    await newUser.save();
    res.json({ message: "created new user" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ username: username });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign({username:user.username,role:user.role,id:user._id}, SECRETKEY);
        res.cookie("jwt", token, { httpOnly: true });
        res.send("logged in");
        res.end();
      }else{
        res.send("password or username is invalid");
      }
    }else{
        res.send("password or username is invalid");
    }
  } catch (error) {
    res.json({ message: error.message });
    console.log(error);
  }
};

module.exports.logout = (req, res) => {
    res.clearCookie("jwt");
    res.send("Logged out");
  };