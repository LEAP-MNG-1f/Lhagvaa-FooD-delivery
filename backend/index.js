import express from "express";

const server = express();
const PORT = 8000;

server.get("/", (req, response) => {
  response.send("hello WOrld");
});

server.listen(PORT, () => {
  console.log(`http:localhost:${PORT} ajillaj ehelle`);
});
