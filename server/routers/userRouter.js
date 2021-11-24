const express = require("express")
const { userController } = require("../controllers")
const router = express.Router()

router.post("/user/create", userController.AddUser)
router.get("/user/show", userController.GetUsers)

module.exports = router