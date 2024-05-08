import JWT from "jsonwebtoken";
import userModel from "../models/User.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    //console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "You are not logged in!",
    });
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.isAdmin !== true) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};

//Applicant access
export const isApplicant = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== "Applicant") {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in Applicant middelware",
    });
  }
};

//Recruiter access
export const isRecruiter = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== "Recruiter") {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in Recruiter middelware",
    });
  }
};

//Recruiter and Admin access
export const isRecruiterorAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role == "Applicant") {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in Recruiter and Admin middelware",
    });
  }
};

//Applicant and Admin access
export const isApplicantorAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role == "Recruiter") {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in Applicant and Admin middelware",
    });
  }
};