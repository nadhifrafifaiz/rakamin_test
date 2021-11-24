const { Users } = require("../models/index")

module.exports = {
    AddUser: async (req, res) => {
        console.log(req.body.username);

    }
}