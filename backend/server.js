const express = require("express");
require("dotenv").config();
const db = require("./config/db");
const cookieParser = require("cookie-parser");

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT;

db.query("SELECT 'DB CONNECTED'")
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/city", require("./routes/cityRoutes"));
app.use("/api/state", require("./routes/stateRoutes"));
app.use("/api/claim-status", require("./routes/claimStatusRoutes"));
app.use("/api/designation", require("./routes/designationRoutes"));
app.use("/api/claim", require("./routes/claimRoutes"));
app.use("/api/user", require("./routes/userRoute"));

app.get("/", (req, res) => res.send("Envirement is set to Development"));

app.use(errorHandler);
