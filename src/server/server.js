import express from "express";
import routes from './routes.js';
import bodyParser from "body-parser";
const app = express()
const port = 3000
const host = 'localhost'

app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port http://${host}:${port}`)
})