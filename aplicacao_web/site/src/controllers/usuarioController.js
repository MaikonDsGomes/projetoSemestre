var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        res.json({
                            idAtleta: resultadoAutenticar[0].idAtleta,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            nome: resultadoAutenticar[0].nome,
                            sobrenome: resultadoAutenticar[0].sobrenome,
                            telefone: resultadoAutenticar[0].telefone,
                            cep: resultadoAutenticar[0].cep,
                            //dtNascimento: resultadoAutenticar[0].dtNascimento,
                            team: resultadoAutenticar[0].team,
                            faixa: resultadoAutenticar[0].faixa,
                            grau: resultadoAutenticar[0].grau,

                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                        alerta_modal.innerHTML = `Email e/ou senha inválido(s)`;
                        modal.style.display = 'block';
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cep = req.body.cepServer;
    var dtNascimento = req.body.dtNascimentoServer;
    var team = req.body.teamServer;
    var faixa = req.body.faixaServer;
    var grau = req.body.grauServer;
    var categoria = req.body.categoriaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenoome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, senha, telefone, cep, dtNascimento, team, faixa, grau, categoria)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function adicionarMed(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var federacao = req.body.federacaoServer;
    var dt = req.body.dtServer;
    var posicao = req.body.posicaoServer;
    var idAtleta = req.body.idAtletaServer;



    // Faça as validações dos valores
    if (federacao == undefined) {
        res.status(400).send("Seu federação está undefined!");
        console.log(("Seu federação está undefined!"))
    } else if (dt == undefined) {
        res.status(400).send("Seu dt está undefined!");
        console.log(("Seu dt está undefined!"))
    } else if (posicao == undefined) {
        res.status(400).send("Sua posicao está undefined!");
        console.log(("Sua posicao está undefined!"))
    } else if (idAtleta == undefined) {
        res.status(400).send("Seu idAtleta está undefined!");
        console.log(("Seu idAtleta está undefined!"))
    } else if (nome == undefined) {
        res.status(400).send("Seu idAtleta está undefined!");
        console.log(("Seu idAtleta está undefined!"))
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.adicionarMed(nome, federacao, dt, posicao, idAtleta)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function adicionarPat(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var lugar = req.body.lugarServer;
    var nomeEmp = req.body.nomeEmpServer;
    var segmento = req.body.segmentoServer;
    var idAtleta = req.body.idAtletaServer;


    // Faça as validações dos valores
    if (lugar == undefined) {
        res.status(400).send("Seu lugar está undefined!");
    } else if (nomeEmp == undefined) {
        res.status(400).send("Seu dt está undefined!");
    } else if (segmento == undefined) {
        res.status(400).send("Sua posicao está undefined!");
    } else if (idAtleta == undefined) {
        res.status(400).send("Seu idAtleta está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.adicionarPat(lugar, nomeEmp, segmento, idAtleta)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar ao ADICIONAR UM PATROCINIO! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cep = req.body.cepServer;
    //var dtNascimento = req.body.dtNascimentoServer;
    var team = req.body.teamServer;
    var faixa = req.body.faixaServer;
    var grau = req.body.grauServer;
    var categoria = req.body.categoriaServer;
    var idAtleta = req.body.idAtletaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenoome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.editar(nome, sobrenome, email, senha, telefone, cep, team, faixa, grau, categoria,idAtleta)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a edição! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    editar,
    adicionarMed,
    adicionarPat
}