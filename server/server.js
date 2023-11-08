const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.js.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/db");

// routes
const healthroute = require('./routes/health.route')
app.use(healthroute)

const perryRoute = require('./routes/perry.route')
app.use(perryRoute)

dbo.connect().then(() => {
    app.listen(port, () => {
        console.log(`app listening on port ${port}!`)
    })
})
    .catch(
        /* istanbul ignore next */ (e) => {
            console.log(e)
        }
    )