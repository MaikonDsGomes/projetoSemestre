var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimasEvolucao/:idAtleta", function (req, res) {
    medidaController.buscarUltimasMedidasEvolucao(req, res);
});

router.get("/ultimasPos/:idAtleta", function (req, res) {
    medidaController.buscarUltimasMedidasPos(req, res);
});


router.get("/taxaVitoria/:idAtleta", function (req, res) {
    medidaController.taxaVitoria(req, res);
});



router.get("/ultimasCat", function (req, res) {
    medidaController.buscarUltimasMedidasCat(req, res);
});

router.get("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;