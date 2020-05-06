const express = require("express");
const router = express.Router();
var unirest = require("unirest");
// var request = require("request");

router.get("/api/search/:term", function (req, res) {
  // //  unirest.get( "https://hotels4.p.rapidapi.com/locations/search")
  //   unirest.get( "https://hotels4.p.rapidapi.com/locations/search")
  //       .headers({
  // 	"x-rapidapi-host": "hotels4.p.rapidapi.com",
  // 	"x-rapidapi-key": "48ee43e691msh0d98ca3de053e79p1587b7jsn757067a83940"
  //       })
  //       .query({"locale": "en_US",
  //   "query": req.params.term})
  //   .then(function(response){
  //     console.log(response.body)
  //     res.send(response.body["suggestions"]);
  //   })

  unirest("GET", "https://tripadvisor1.p.rapidapi.com/locations/search")
    .headers({
      "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": "48ee43e691msh0d98ca3de053e79p1587b7jsn757067a83940",
    })
    .query({
      locationId: "1",
      limit: "30",
      sort: "relevance",
      offset: "0",
      lang: "en_US",
      currency: "USD",
      units: "km",
      query: req.params.term,
    })
    .then(function (response) {
      if (response.error) throw new Error(response.error);

      console.log(response.body);
      res.send(response.body);
    });
});

module.exports = router;
