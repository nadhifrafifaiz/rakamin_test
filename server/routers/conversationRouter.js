const express = require("express")
const { conversationController } = require("../controllers")
const router = express.Router()

router.post("/conversation/create", conversationController.NewConversation)
router.get("/conversation/get/:id", conversationController.GetConversation)

module.exports = router