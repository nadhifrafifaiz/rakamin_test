const express = require('express')
const cors = require('cors')

const PORT = "3001"
const app = express()
const db = require('./models')
const { userRouter, conversationRouter, messageRouter } = require("./routers")

app.use(express.json())
app.use(cors())


app.use("/api", userRouter)
app.use("/api", conversationRouter)
app.use("/api", messageRouter)


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Server is Running");
    })
})