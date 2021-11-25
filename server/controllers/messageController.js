const { Conversations, Users, Messages } = require("../models/index")

module.exports = {
    AddMessage: async (req, res) => {
        try {
            console.log(req.body);

            // Add to database
            await Messages.create({
                ...req.body
            })

            // Send back all conversation
            const getMessages = await Messages.findAll({
                where: {
                    idConversation: req.body.idConversation
                }
            })

            return res.status(200).json(getMessages)




        } catch (error) {
            return res.status(500).send(error)
        }
    }
}