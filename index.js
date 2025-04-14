const express = require("express");
const urlRoute = require("./routes/url");
const {connectMongoDB} = require("./connection");

const app = express();
const PORT = 8001;

app.use(express.json());
app.use('/url', urlRoute);
app.use('/:shortId', urlRoute);

connectMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error:", err));

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
