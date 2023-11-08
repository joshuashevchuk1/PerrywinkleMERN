const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.js.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//app.use(require("./routes/record"));
app.use(require("./routes/health"));
// get driver connection
const dbo = require("./db/db");


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