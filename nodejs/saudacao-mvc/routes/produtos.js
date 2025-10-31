const express = require("express");
const router = express.Router();
const siteController = require('../controllers/siteController');
const produtosController = require('../controllers/produtosController');

router.get("/",produtosController.produtos);
router.get("/camisas",produtosController.camisetas);
router.get("/cadastrar",produtosController.cadastrar);
router.get("/cadastrar",produtosController.cadastrar);

module.exports = router;