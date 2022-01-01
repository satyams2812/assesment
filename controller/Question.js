const express = require("express");
const router = express.Router();

const data = require("./data.json");
exports.questionpaper = async function (req, res) {
  try {
    let total = req.body.total;

    var result = [];
    const value1 = data.filter(function (x) {
      if (x.difficulty == "Easy") {
        return result.push(x);
      }
    });
    const value2 = data.filter(function (x) {
      if (x.difficulty == "Medium") {
        return result.push(x);
      }
    });

    const value3 = data.filter(function (x) {
      if (x.difficulty == "Hard") {
        return result.push(x);
      }
    });

    const results = [];

    var test = value1.sort(() => 0.5 - Math.random());
    var test1 = value2.sort(() => 0.5 - Math.random());
    var test2 = value3.sort(() => 0.5 - Math.random());

    var easy = test.splice(0, req.body.easy);
    var medium = test1.splice(0, req.body.medium);
    var hard = test2.splice(0, req.body.hard);

    if (total > 100) {
      res.status(404).json("Maxium Size is 100");
    }

    results.push(easy, medium, hard);

    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json(err);
  }
};
