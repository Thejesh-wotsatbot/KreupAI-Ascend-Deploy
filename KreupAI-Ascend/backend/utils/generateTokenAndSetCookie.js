import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId, roles) => {
  const token = jwt.sign({ userId, roles }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  
  res.cookie("token", token, {
    path: "/",
    httpOnly: true, //XSS
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", //CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
