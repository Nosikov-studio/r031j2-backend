
module.exports = async (req, res) => {
    try {
        // просто удаляем куку
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