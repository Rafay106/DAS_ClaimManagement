import "dotenv/config";
import express from "express";
import db from "./config/db.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

import cityRoutes from "./routes/cityRoutes.js";
import stateRoutes from "./routes/stateRoutes.js";
import claimStatusRoutes from "./routes/claimStatusRoutes.js";
import designationRoutes from "./routes/designationRoutes.js";
import claimRoutes from "./routes/claimRoutes.js";
import userRoutes from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

db.query("SELECT 'DB CONNECTED'")
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/city", cityRoutes);
app.use("/api/state", stateRoutes);
app.use("/api/claim-status", claimStatusRoutes);
app.use("/api/designation", designationRoutes);
app.use("/api/claim", claimRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => res.send("Envirement is set to Development"));

app.use(errorHandler);
