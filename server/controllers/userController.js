const { Users } = require("../models/index")
const { addUserValidation } = require("../helper/validation")

module.exports = {
    AddUser: async (req, res) => {
        try {
            const { error } = addUserValidation(req.body)
            if (error) return res.status(400).send(error.details[0].message)

            // check if username already exist
            const usernameExist = await Users.findOne({ where: { username: req.body.username } })
            if (usernameExist) return res.status(200).send({ message: "Username already exist", success: false })

            const addUser = await Users.create({
                ...req.body
            })

            return res.status(200).send(addUser)

        } catch (error) {
            return res.status(500).send(error)
        }
    },
    GetUsers: async (req, res) => {
        try {
            const getUsers = await Users.findAll()
            return res.status(200).send(getUsers)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}