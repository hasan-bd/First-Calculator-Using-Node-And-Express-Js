const express = require('express')
const bodyParser = require('body-Parser')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/',function(req, res){
  var number1 = Number(req.body.num1)
  var number2 = Number(req.body.num2)
  var result = number1 + number2
  res.send("The result is " + result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
