const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


/* MongoDB Connection  for the database  */


mongoose
mongoose.connect(
  "mongodb+srv://gopusaikumar05_db_user:saireddy05@cluster0.ay9thur.mongodb.net/shopeaseDB?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log("MongoDB Error ❌", err));



app.use("/api", authRoutes);


app.get("/", (req, res) => {
  res.send("ShopEase Backend is Running 🚀");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
