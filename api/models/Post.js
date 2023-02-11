const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id: String,
	nome: String,
	desc: String,
    img: String
})

module.exports = mongoose.model("Post", schema)