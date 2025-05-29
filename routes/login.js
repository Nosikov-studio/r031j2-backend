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

     if (user.password !== password) {
        return res.status(403).json({message: "authentication failed"});
     }

     delete user.password;

     const token =jwt.sign(user, privateKey, {expiresIn: "15m"});

        res.cookie("token", token, {
        httpOnly: true,
        secure: true,        // требует HTTPS
        sameSite: 'none',
    })
    return res.status(200).json({message: "***!!!!!!!Success!!!!!!!***"});
}

// const {v4: uuid} = require("uuid");
// const sessions = require('../sessions');

// module.exports = async (req, res) => {
//     const {username, password} = req.body;

//     if (username !== "admin" || password !== "admin") {
//         return res.status(403).json({message: "authentication failed"})
//     }

//     const sessionId = uuid();
//     sessions[sessionId]= { username, userID: 1};

//     console.log(sessions);

//     res.cookie("session", sessionId, {
//         httpOnly: true,
//         secure: true,        // требует HTTPS
//         sameSite: 'none',
//     })
//     res.json({message: "!!!!!!!Success!!!!!!!+++"});
// }