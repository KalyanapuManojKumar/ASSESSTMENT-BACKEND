import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  try {
    // Expecting token in Authorization: Bearer <token>
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No access token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.USER_ACCESS_TOKEN_SECRET);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          message: "Unauthorized - Access token expired",
        });
      }
      throw error;
    }
  } catch (error) {
    console.log("Error in authenticate middleware", error.message);
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - Invalid access token" });
  }
};

export default authenticate;
