import express from "express";

const racerRouter = express.Router();

racerRouter.use(express.static("public"));

racerRouter.get("/", (req, res) => res.render("pages/bikes", {
    pageTitle: "Welcome to Bikes!",
    bikeClass: "racer",
    bikeSub: "Racers!",
    bikePara: "Racers are good for racing!",
    path: "racer"
}));

racerRouter.get("/history", (req, res) => res.render("pages/bikes", {
    pageTitle: "Welcome to Bikes!",
    bikeClass: "racer",
    bikeSub: "Racers!",
    bikePara: "A brief history of racers!",
    path: "racer/history"
}));


export default racerRouter;