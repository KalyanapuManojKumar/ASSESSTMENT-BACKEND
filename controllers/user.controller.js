import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const USER_ACCESS_TOKEN_SECRET = process.env.USER_ACCESS_TOKEN_SECRET;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    const userAccessToken = jwt.sign(
      { id: user._id },
      USER_ACCESS_TOKEN_SECRET,
      { expiresIn: "3h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token: userAccessToken,
      username: user.name,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res
        .status(409)
        .json({ success: false, message: "User Already Exists" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please Enter a Valid Email" });
    }

    // Validate password
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await new User({
      name,
      email,
      password: hashedPassword,
    }).save();

    const userAccessToken = jwt.sign(
      { id: user._id },
      USER_ACCESS_TOKEN_SECRET,
      { expiresIn: "3h" }
    );

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      token: userAccessToken,
      username: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser };
