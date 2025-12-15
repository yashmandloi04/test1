const router = require('express').Router();
require("../Config/conn")

router.use('/api/product', require("../Controllers/ProductController"));

module.exports = router;