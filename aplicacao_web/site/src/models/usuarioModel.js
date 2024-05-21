var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
    select idAtleta, nome, sobrenome, email, senha, telefone, cep, dtNasc, team, faixa, grau from atleta WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome,email, senha, telefone, cep ,dtNascimento, team, faixa, grau) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        
        insert into atleta (nome, sobrenome, email, senha, telefone, cep, dtNasc, team, faixa, grau) values ('${nome}', '${sobrenome}', '${email}', '${senha}', '${telefone}', '${cep}', '${dtNascimento}', '${team}', '${faixa}', '${grau}');

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

function editar(nome, sobrenome,email, senha, telefone, cep , team, faixa, grau, idAtleta) {
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
      grau = '${grau}'
    WHERE idAtleta = ${idAtleta};

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    editar,
    adicionarMed
};