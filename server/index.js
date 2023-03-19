require("dotenv").config();
require("module-alias/register");

const express = require("express");
const db = require("./database/models");
const cors = require("cors");
const routes = require("./routes");
const errorMiddleware = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";
const PID = process.pid;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(errorMiddleware);

(async () => {
  try {
    await db.sequelize.authenticate();

    app.listen(PORT, () =>
      console.log(`Server started: ${HOST}:${PORT}. Pid: ${PID}`)
    );
  } catch (e) {
    console.log(e);
  }
})();
