const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Argo CD! I can do that, thanks bro!'))
app.listen(3000, () => console.log('Server ready'))
