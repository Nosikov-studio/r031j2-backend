const {v4: uuid} = require("uuid");
const sessions = require('../sessions');

module.exports = async (req, res) => {
    const {username, password} = req.body;

    if (username !== "admin" || password !== "admin") {
        return res.status(403).json({message: "authentication failed"})
    }

    const sessionId = uuid();
    sessions[sessionId]= { username, userID: 1};

    console.log(sessions);

    res.cookie("session", sessionId, {
        httpOnly: true,
        secure: true,        // требует HTTPS
        sameSite: 'none',
    })
    res.json({message: "!!!!!!!Success!!!!!!!+++"});
}