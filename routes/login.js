const jwt = require("jsonwebtoken");
const { privateKey } = require('../secret');

const getUser = async (username) => ({
    userId: 1,
    password: "admin",
    username,
})

module.exports = async (req, res) => {
     const {username, password} = req.body;

     const user = await getUser(username);
// валидация полученных от клиента данных
     if (user.password !== password) {
        return res.status(403).json({message: "authentication failed"});
     }

     delete user.password;
// создаем токен
     const token =jwt.sign(user, privateKey, {expiresIn: "15m"});

// отправляем токен в куки
        res.cookie("token", token, {
        httpOnly: true,
        secure: true,        // требует HTTPS
        sameSite: 'none',
    })
    return res.status(200).json({message: "***!!!!!!!Success!!!!!!!***"});
}
