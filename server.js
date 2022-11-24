const express = require("express");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
