const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("/", (req, res) => {
	res.send("hey let's do it")
})
app.get("/form", (req, res) => {
	res.sendFile(__dirname + "/form.html")
})


app.post("/add", (req, res) => {
	let num1 = req.body.num1
	let num2 = req.body.num2
	if (num1 < -1000000 && num2 < -1000000) {
		res.status(404).send({
			status: "failure",
			message: "Underflow",
		})
	}
	else if (num1 > 1000000 && num2 > 1000000) {
		res.status(404).send({
			status: "failure",
			message: "Overflow",
		})
	}
	else if (isNaN(num1) && isNaN(num2)) {
		res.status(404).send({
			status: "error",
			message: "Invalid data types",
		})
	}
	else {
		res.status(200).send({
			status: "sucess",
			message: "sum of two numbers",
			res: Number(req.body.num1) + Number(req.body.num2)
		})
	}

})

app.post("/sub", (req, res) => {
	let num1 = req.body.num1
	let num2 = req.body.num2
	if (num1 < -1000000 && num2 < -1000000) {
		res.status(404).send({
			status: "failure",
			message: "Underflow",
		})
	}
	else if (num1 > 1000000 && num2 > 1000000) {
		res.status(404).send({
			status: "failure",
			message: "Overflow",
		})
	}
	else if (isNaN(num1) && isNaN(num2)) {
		res.status(404).send({
			status: "error",
			message: "Invalid data types",
		})
	}
	else {
		res.status(200).send({
			status: "sucess",
			message: "sum of two numbers",
			res: Number(req.body.num1) - Number(req.body.num2)
		})
	}

})


app.post("/multiply", (req, res) => {

	let num1 = req.body.num1
	let num2 = req.body.num2
	if (num1 < -1000000 && num2 < -1000000) {
		res.status(404).send({
			status: "failure",
			message: "Underflow",
		})
	}
	else if (num1 > 1000000 && num2 > 1000000) {
		res.status(404).send({
			status: "failure",
			message: "Overflow",
		})
	}
	else if (isNaN(num1) && isNaN(num2)) {
		res.status(404).send({
			status: "error",
			message: "Invalid data types",
		})
	}
	else {
		res.status(200).send({
			status: "sucess",
			message: "sum of two numbers",
			res: Number(req.body.num1) * Number(req.body.num2)
		})
	}
})

app.post("/divide", (req, res) => {
	let num1 = req.body.num1
	let num2 = req.body.num2
	if (num1 < -1000000 && num2 < -1000000) {
		res.status(404).send({
			status: "failure",
			message: "Underflow",
		})
	}
	else if (num1 > 1000000 && num2 > 1000000) {
		res.status(404).send({
			status: "failure",
			message: "Overflow",
		})
	}
	else if (isNaN(num1) && isNaN(num2)) {
		res.status(404).send({
			status: "error",
			message: "Invalid data types",
		})
	}
	else if (num2 == 0) {
		res.status(404).send({
			status: "failure",
			message: "Cannot divide by zero",
		})
	}
	else {
		res.status(200).send({
			status: "sucess",
			message: "sum of two numbers",
			res: Number(req.body.num1) / Number(req.body.num2)
		})
	}
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;