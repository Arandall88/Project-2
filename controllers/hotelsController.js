const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/hotels", function (req, res) {
  db.Lego.findAll()
    .then((hotels) => {
      console.log(hotels);
      res.render("hotel", { hotels });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/hotels", function (req, res) {
  db.Lego.findAll()
    .then((hotels) => {
      console.log(hotels);
      res.json(hotels);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.get("/api/hotels/:id", function (req, res) {
  db.Hotels.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: db.User }],
  })
    .then((hotels) => {
      console.log(hotels);
      res.json(hotels);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        error: true,
      });
    });
});

router.post("/api/hotels", function (req, res) {
  const newLegoObject = {
    name: req.body.name.trim(),
    numberOfPieces: req.body.numberOfPieces,
    setNumber: req.body.setNumber.trim(),
    imageURL: req.body.imageURL.trim(),
  };
  db.Lego.create(newHotelObject)
    .then((newHotel) => {
      console.log(newHotel);
      res.json({
        message: "Successfully created new hotel",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "An error occurred adding your lego to our database",
      });
    });
});

module.exports = router;
