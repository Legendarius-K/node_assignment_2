import express from "express";
import mtbRouter from "./routes/mtb.js";
import racerRouter from "./routes/racer.js";
import * as path from "path";

const app = express();
const port = 3020;
const __dirname = path.resolve();
app.set("view engine", "ejs");
app.set("views", )

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render(
        "pages/home",
        {
            pageTitle: "Welcome to Bikes!"
        });
})

app.use("/mtb", mtbRouter);
app.use("/racer", racerRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})