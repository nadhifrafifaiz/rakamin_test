const express = require("express")
const { messageController } = require("../controllers")
const router = express.Router()

router.post("/message/create", messageController.AddMessage)
// router.get("/user/show", userController.GetUsers)

module.exports = router