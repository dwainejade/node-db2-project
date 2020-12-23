const express = require("express")
const welcomeRouter = require("./welcome/welcome-router")


const server = express()
const port = 5000

server.use(express.json())

server.use(welcomeRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Oops, I did it again. Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
