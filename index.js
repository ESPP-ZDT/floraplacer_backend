const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const FloraRoutes = require("./routes/FloraRoutes");


const app = express();
dotenv.config();
connectDB();



app.use(cors());
app.use(express.json());

app.use("/", FloraRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
