const { Conversations, Users } = require("../models/index")
const { Op } = require("sequelize");

module.exports = {
    NewConversation: async (req, res) => {
        console.log(req.body);
        try {

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

            console.log(conversationExist.length);

            if (conversationExist.length !== 0) {
                return res.status(200).send({ message: "Conversation already exist", success: false })
            }

            const addConversation = await Conversations.create({
                ...req.body
            })

            return res.status(200).send(addConversation)
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}