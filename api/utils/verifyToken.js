import jwt from 'jsonwebtoken';
import {createError} from './errorHandler.js'

export const verifyToken = (req, res, next) => {
    // const token = req.cookies.token;
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });
  };


  export const verifyAdmin = (req, res, next) => {
    // const token = req.cookies.token;
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
      });

      if (req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
  };