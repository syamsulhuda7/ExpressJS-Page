const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "Succesfully",
    message: "Welcome to Express JS Home",
    try1: "/product",
    try2: "/product/:id",
  });
});

router.get("/product", (req, res) => {
  res.json({
    status: "Succesfully",
    message: "Welcome to Product Page",
  });
});

router.get("/product/:id", (req, res) => {
  res.json({
    message: "This is product id page",
    id: req.params.id,
  });
});

module.exports = router;
