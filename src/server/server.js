import express from "express";
import { authenticateFirebaseToken } from "./middlewares/middware.js";
const app = express()
const port = 3000
const host = 'localhost'

app.get('/', authenticateFirebaseToken, (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`)
})