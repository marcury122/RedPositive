const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { userRouter } = require("./routes/userRoute");
// const UserModel = require("./models/userSchema.js");
// const userRouter = require("./routes/userRoute.js");
// const bodyParser = require("body-parser");
// const { default: userRouter } = require("./routes/userRoute.js");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000; // Choose your desired port

// const url = "mongodb+srv://mehuljain0503:mehuljain0503@marcury.93qwehr.mongodb.net/form?retryWrites=true&w=majority&appName=Marcury";
const url = "mongodb://localhost:27017/redpositive";

mongoose
  .connect(url)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.use("/api/v1/user", userRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
