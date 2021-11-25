const { Conversations, Users, Messages } = require("../models/index")
const { Op } = require("sequelize");


module.exports = {
    AddMessage: async (req, res) => {
        try {
            console.log(req.body.sender);

            // Add to database
            await Messages.create({
                ...req.body, readStatus: false
            })

            //Update Read Status
            await Messages.update(
                {
                    readStatus: true
                },
                {
                    where: {
                        sender: { [Op.not]: req.body.sender }
                    }
                }

            )

            // Send back all conversation
            const getMessages = await Messages.findAll({
                where: {
                    ConversationId: req.body.ConversationId
                }
            })
            return res.status(200).json(getMessages)


        } catch (error) {
            return res.status(500).send(error)
        }
    }
}