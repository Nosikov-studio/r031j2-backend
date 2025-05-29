//const sessions = require('../sessions');
module.exports = async (req, res) => {
    try {
        // const sessionId = req.headers.cookie?.split('=')[1];
        // delete sessions[sessionId];
        res.clearCookie("token", {
            path: "/",
            httpOnly: true,
        });
        res.status(200).json({message:'logout completed'})
    } catch (err) {
        console.log(err);
        res.status(400).json({message:'error'})
    }
}