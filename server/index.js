const express = require("express");
const mongoose = require("mongoose");
require('dotenv/config');
const cors = require("cors");
const driverCertificate = require('./src/routes/drivercertificates');
const adrCertificate = require("./src/routes/adrcertificates");
const managerCertificate = require("./src/routes/managercertificate");
const adrTankCertificate = require("./src/routes/adrtankcertificate");
const searchCertificate = require('./src/routes/search');
const login = require("./src/routes/login");
const analytics = require("./src/routes/analytics");
const admin = require("./src/routes/admin");
const comments = require("./src/routes/comments");

const port = process.env.PORT || 1000;
const app = express();
const whitelist = ['https://ntl-client.vercel.app', 'https://www.xalqarologistika.uz', 'https://xalqarologistika.uz', "http://localhost:3000"]
app.use(cors({
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(process.env.DB_CONNECTION))
  .catch((err) => console.log(err));

app.use("/drivercertificate", driverCertificate);
app.use("/driveradrcertificate", adrCertificate);
app.use("/drivermanagercertificate", managerCertificate);
app.use("/driveradrtankcertificate", adrTankCertificate);
app.use("/search", searchCertificate);
app.use("/analytics", analytics);
app.use("/auth", login);
app.use("/admin", admin);
app.use("/comments", comments)

app.listen(port);