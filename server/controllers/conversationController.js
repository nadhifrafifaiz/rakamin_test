const { Conversations, Users } = require("../models/index")
const { Op } = require("sequelize");

module.exports = {
    NewConversation: async (req, res) => {
        try {
            if (req.body.idReciever < req.body.idSender) {
                req.body = { ...req.body, idSender: req.body.idReciever, idReciever: req.body.idSender }
            }

            // check if user exist
            const userCheck = await Users.findAll({
                where: {
                    id: [req.body.idSender, req.body.idReciever]
                }
            })

            if (userCheck.length !== 2) return res.status(200).send({ message: "User not found" })

            const conversationExist = await Conversations.findAll({
                where: {
                    [Op.and]: [{
                        idSender: [req.body.idSender],
                        idReciever: [req.body.idReciever]
                    }]
                }
            })


            if (conversationExist.length !== 0) {
                return res.status(200).send({ message: "Conversation already exist", success: false })
            }

            const addConversation = await Conversations.create({
                ...req.body
            })

            return res.status(200).json(addConversation)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    GetConversation: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id)
            console.log(idUser);

            const conversationExist = await Conversations.findAll({
                where: {
                    [Op.or]: [
                        { idSender: idUser },
                        { idReciever: idUser }]
                }
            })

            if (conversationExist.length === 0) return res.status(200).send({ message: "User Not Found" })

            return res.status(200).send(conversationExist)

        } catch (error) {
            return res.status(200).send(error)
        }

    },
    GetConversationById: async (req, res) => {

    }
}