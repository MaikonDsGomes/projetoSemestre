var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select idPatrocinio, lugar, empresa, segmento, patrocinio.fkAtleta, nome, email, senha from patrocinio
    join atleta on patrocinio.fkAtleta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarTudo() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select idPostagem, titulo, postagem.descricao, postagem.fkAtleta, DATE_FORMAT(dtPostagem, '%d/%m/%y - %H:%i:%s') AS dtPostagem, idAtleta, nome, sobrenome,email, senha from  postagem 
join atleta on postagem.fkAtleta = idAtleta order by dtPostagem desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarcardsAtletas(estado) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    
    select idAtleta, email,nome, sobrenome, faixa, grau, team , TIMESTAMPDIFF(YEAR, dtNasc, CURDATE()) AS idade from atleta where estado like '${estado}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPostUser(idAtleta) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");

    //console.log("iD DO ATLTETA "+idAtleta)

    var instrucaoSql = `
    select idPostagem, titulo, postagem.descricao, postagem.fkAtleta, DATE_FORMAT(dtPostagem, '%d/%m/%y - %H:%i:%s') AS dtPostagem, idAtleta, nome, email, senha
from postagem join atleta on postagem.fkAtleta = idAtleta where fkAtleta = ${idAtleta} order by dtPostagem desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//listarPesquisa
function listarPesquisa(idAtleta) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");

    //console.log("iD DO ATLTETA "+idAtleta)

    var instrucaoSql = `
    
    select federacao, campeonato, ano, posicao from medalha where ano > '2023-11-11' and ano < '2024-01-11' and fkAtleta = ${idAtleta};

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idAtleta) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");

    console.log("iD DO ATLTETA " + idAtleta)

    var instrucaoSql = `
    select idPatrocinio, lugar, empresa, segmento, patrocinio.fkAtleta, nome, email, senha from patrocinio
join atleta on patrocinio.fkAtleta = idAtleta where idAtleta = ${idAtleta} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarInfoAtletas(idAtleta) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");

    console.log("iD DO ATLTETA " + idAtleta)

    var instrucaoSql = `
    select idMedalha, federacao, campeonato, DATE_FORMAT(ano, '%d/%m/%y') AS ano, posicao from medalha where fkAtleta =  ${idAtleta} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarEditarPost(idPostagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");

    console.log("iD DO ATLTETA -- MODEL " + idPostagem)

    var instrucaoSql = `
    select descricao, titulo from postagem where idPostagem = ${idPostagem} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarMedalha(idAtleta) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");

    console.log("iD DO ATLTETA " + idAtleta)

    var instrucaoSql = `
    select idMedalha ,federacao, campeonato, DATE_FORMAT(ano, '%d/%m/%Y') AS ano, posicao, fkAtleta from medalha where fkAtleta = ${idAtleta};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idAtleta) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idAtleta);
    var instrucaoSql = `
        INSERT INTO postagem (titulo, descricao, fkAtleta) VALUES ('${titulo}', '${descricao}', ${idAtleta});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, novoTitulo, idPostagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idPostagem);
    var instrucaoSql = `
        UPDATE postagem SET descricao = '${novaDescricao}', titulo = '${novoTitulo}' WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idPostagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPostagem);
    var instrucaoSql = `
        DELETE FROM postagem WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar,
    listarTudo,
    listarMedalha,
    listarPostUser,
    listarEditarPost,
    listarcardsAtletas,
    listarInfoAtletas,
    listarPesquisa
}
