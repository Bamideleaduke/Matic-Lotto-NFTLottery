import express from "express";
import { join } from "path";

const app = express();

app.get("/",(req, res) => {
    res.sendFile(join(_dirname + "/index.html"));     
})

const server = app.listen(5500);
const portNumber = server.address().port;
console.log("port: "+ portNumber);