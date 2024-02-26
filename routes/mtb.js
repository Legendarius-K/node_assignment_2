import express from "express";

const mtbRouter = express.Router();

mtbRouter.use(express.static("public"));

mtbRouter.get("/", (req, res) => res.render("pages/bikes", {
    pageTitle: "Welcome to Bikes!",
    bikeClass: "mtb",
    bikeSub: "Mountain bikes!",
    bikePara: "Mountain bikes are good for mountain biking!",
    path: "mtb"
}));

mtbRouter.get("/history", (req, res) => res.render("pages/bikes", {
    pageTitle: "Welcome to Bikes!",
    bikeClass: "mtb",
    bikeSub: "Mountain bikes!",
    bikePara: "A brief history of mountain bikes!",
    path: "mtb/history"
}));

export default mtbRouter;