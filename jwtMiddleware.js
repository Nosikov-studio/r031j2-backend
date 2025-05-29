// авторизация вынесена в этот отдельный мидлвеер
const jwt = require("jsonwebtoken");
const {privateKey} = require('./secret.js');

exports.jwtMiddleware = (req, res, next) => {
    const token =req.cookies.token;
    try {
        // простейшая логика верификации токена с помощью privateKey
        req.user = jwt.verify(token, privateKey);
        next();
    } catch (err) {
        res.clearCookie("token");
        res.status(401).json({message: "unauthorized"})
    }
}