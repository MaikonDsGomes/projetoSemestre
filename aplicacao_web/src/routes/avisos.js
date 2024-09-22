var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listarCardsAtletas/:estado/:faixa", function (req, res) {
    avisoController.listarcardsAtletas(req, res);
});

router.get("/listarEstados", function (req, res) {
    avisoController.listarEstados(req, res);
});

router.get("/listarInfoAtletas/:idAtleta", function (req, res) {
    avisoController.listarInfoAtletas(req, res);
});

router.get("/listarTudo", function (req, res) {
    avisoController.listarTudo(req, res);
});

router.get("/listarPostUser/:idAtleta", function (req, res) {
    avisoController.listarPostUser(req, res);
});
//listarPesquisa
router.get("/listarPesquisa/:idAtleta", function (req, res) {
    avisoController.listarPesquisa(req, res);
});

router.get("/listarEditarPost/:idPostagem", function (req, res) {
    avisoController.listarEditarPost(req, res);
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

router.post("/publicar/:idAtleta", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idPostagem", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idPostagem", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;