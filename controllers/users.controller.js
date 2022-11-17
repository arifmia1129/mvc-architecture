const path = require("path");
const users = require("../models/users.model.js");


exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}


exports.saveUser = (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.status(200).json({
        success: true,
        message: "Successfully create user",
        users
    })
}