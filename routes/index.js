const express = require("express")
const route = express.Router()
const userRoutes = require('./user-route')

route.get("/", (req, res) => {
    res.json({
        message: "Selamat datang di express"
    })
})

route.use("/user", userRoutes)

module.exports = route