var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listarTudo", function (req, res) {
    avisoController.listarTudo(req, res);
});

router.get(`/listar/:idAtleta`, function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get(`/listarMedalha/:idAtleta`, function (req, res) {
    avisoController.listarMedalha(req, res);
});
//

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;