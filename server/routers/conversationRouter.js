const express = require("express")
const { conversationController } = require("../controllers")
const router = express.Router()

router.post("/conversation/create", conversationController.NewConversation)

module.exports = router