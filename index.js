const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");

// Importing the routers
const ptbrRouter = require("./routers/ptbr");
const enRouter = require("./routers/en");

//middlewares
app.use(cors());

// Using the routers
app.use("/ptbr", ptbrRouter);
app.use("/en", enRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})