const { addListener } = require('./hello.js')
const express = require('express')
const app = express()

addListener(app, 'Hello world!')

app.listen(3000, () => console.log('Example app listening on port 3000!'))
