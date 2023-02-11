const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes")
const cors = require('cors');



mongoose
	.connect("mongodb+srv://root:root@cluster0.6rpbzru.mongodb.net/lista?retryWrites=true&w=majority", { useNewUrlParser: true},{useUnifiedTopology: true})
	.then(() => {
		
		const app = express()

		app.use(cors());
		app.use("/api", routes)

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})