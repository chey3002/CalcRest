const { Router } = require("express");
const router = Router();
router.get("/", (req, res) => {
  res.json({
    Suma: "/api/calculadora/suma",
    Resta: "/api/calculadora/resta",
    multi: "/api/calculadora/multi",
    div: "/api/calculadora/div",
  });
});
router.get("/api/calculadora/suma", (req, res) => {
  const { a, b } = req.body;
  if (a && b) {
    res.json({ Resp: a + b });
  } else {
    res.send("Error");
  }
});
router.get("/api/calculadora/resta", (req, res) => {
  const { a, b } = req.body;
  if (a && b) {
    res.json({ Resp: a - b });
  } else {
    res.send("Error");
  }
});
router.get("/api/calculadora/multi", (req, res) => {
  const { a, b } = req.body;
  if (a && b) {
    res.json({ Resp: a * b });
  } else {
    res.send("Error");
  }
});
router.get("/api/calculadora/div", (req, res) => {
  const { a, b } = req.body;
  if (a && b && b != 0) {
    res.json({ Resp: a / b });
  } else {
    res.send("Error");
  }
});

module.exports = router;
