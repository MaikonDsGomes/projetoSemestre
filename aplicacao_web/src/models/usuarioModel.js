var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
    select idAtleta, nome, sobrenome, email, senha, telefone, cep, estado,dtNasc, team, faixa, grau from atleta WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome,email, senha, telefone, cep ,estado,dtNascimento, team, faixa, grau, categoria) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
        insert into atleta (nome, sobrenome, email, senha, telefone, cep, estado,dtNasc, team, faixa, grau, peso) values ('${nome}', '${sobrenome}', '${email}', '${senha}', '${telefone}', '${cep}', '${estado}','${dtNascimento}', '${team}', '${faixa}', '${grau}', '${categoria}');

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarMed(nome, federacao, dt, posicao, idAtleta) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ADICIONAR():", nome, federacao, dt);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
    insert into medalha (campeonato, federacao, ano, posicao, fkAtleta) values (
    '${nome}', 
    '${federacao}', 
    '${dt}', 
    '${posicao}', 
    '${idAtleta}');
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarPat(lugar, nomeEmp, segmento, idAtleta) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ADICIONAR():", nomeEmp, segmento, lugar);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
    insert into patrocinio (lugar, empresa, segmento, fkAtleta) values 
    ('${lugar}', 
    '${nomeEmp}', 
    '${segmento}', 
    '${idAtleta}');
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(nome, sobrenome,email, senha, telefone, cep , team, faixa, grau, categoria,idAtleta) {
    console.log("ACESSEI O USUARIO MODEL EDIÇÃO \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
    UPDATE atleta SET 
      nome = '${nome}',
      sobrenome = '${sobrenome}',
      email = '${email}',
      senha = '${senha}',
      telefone = '${telefone}',
      cep = '${cep}',
      team = '${team}',
      faixa = '${faixa}',
      grau = '${grau}',
      peso = '${categoria}'
    WHERE idAtleta = ${idAtleta};

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarPat(idPatrocinio) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPatrocinio);
    var instrucaoSql = `
        DELETE FROM patrocinio WHERE idPatrocinio = ${idPatrocinio};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarMed(idMedalha) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMedalha);
    var instrucaoSql = `
        DELETE FROM medalha WHERE idMedalha = ${idMedalha};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    editar,
    adicionarMed,
    adicionarPat,
    deletarPat,
    deletarMed
};