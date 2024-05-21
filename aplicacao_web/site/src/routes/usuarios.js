var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/adicionarMed", function (req, res) {
    usuarioController.adicionarMed(req, res);
})

router.post("/adicionarPat", function (req, res) {
    usuarioController.adicionarPat(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/editar", function (req, res) {
    usuarioController.editar(req, res);
});


module.exports = router;