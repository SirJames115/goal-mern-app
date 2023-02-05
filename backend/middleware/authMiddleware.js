// const asyncHandler = require("express-async-handler");
// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// const protect = asyncHandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       //Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       //Verify token
//       const decode = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decode.id).select("-password");

//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401);
//       throw new Error("Not authorized");
//     }
//   }

//   if (!token) {
//     res.status(401);
//     throw new Error("No token");
//   }
// });

// module.exports = { protect };

// const jwt = require("jsonwebtoken");
// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");

// const protect = asyncHandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       //get token
//       token = req.headers.authorization.split(" ")[1];

//       const decode = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decode.id).select("-password");

//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401);
//       throw new Error("Not Authorized");
//     }
//   }

//   if (!token) {
//     res.status(401);
//     throw new Error("No token, not authorized");
//   }
// });

// module.exports = {
//   protect,
// };
//
//
//
//
//
//

// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler");
// const req = require("express/lib/request");

// const protect = asyncHandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       //Get token
//       token = req.headers.authorization.split(" ")[1];

//       //decode the token
//       decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error) {
//       res.status(401);
//       throw new Error("Not authorized");
//     }
//   }

//   if (!token) {
//     res.status(401);
//     throw new Error("No token");
//   }
// });

// module.exports = {
//   protect,
// };

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new error();
  }
});

module.exports = {
  protect,
};
