module.exports = (req, res) => {
    res.status(200).json({message: "Authorized"});
}



// const sessions = require('../sessions');

// module.exports = async (req, res) => {

// //улучшенная обработка кук
// // const cookies = req.headers.cookie?.split(';').reduce((acc, cookie) => {
// // const [name, value] = cookie.trim().split('=');
// // acc[name] = value;
// // return acc;
// // }, {});
// // const sessionId = cookies?.sessionId;   
    
    
//    const sessionId = req.headers.cookie?.split("=")[1];
//     const userSession = sessions[sessionId];

//     if (!userSession) {
//         return res.status(401).json({message: "Invalid session"});
//     }

//     const userId = userSession.userId;
//     res.json(
//     {message: "hello from test"}

// )
// }