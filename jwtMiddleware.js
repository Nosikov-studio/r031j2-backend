const jwt = require("jsonwebtoken");
const {privateKey} = require('./secret.js');

exports.jwtMiddleware = (req, res, next) => {
    const token =req.cookie.token;
    try {
        req.user = jwt.verify(token, privateKey);
        next();
    } catch (err) {
        res.clearCookie("token");
        res.status(401).json({message: "unauthorized"})
    }
}