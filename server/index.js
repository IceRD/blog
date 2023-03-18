require("dotenv").config();

const express = require("express");
const db = require("./database/models");

const cors = require("cors");

const PORT = process.env.PORT || 5000;
const PID = process.pid;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

(async () => {
  try {
    await db.sequelize.authenticate();

    app.listen(PORT, () =>
      console.log(`Server started on port: ${PORT}. Pid: ${PID}`)
    );
  } catch (e) {
    console.log(e);
  }
})();
