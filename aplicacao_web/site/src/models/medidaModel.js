var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `select 'branca' as faixa, count(*) as quantidade from atleta where faixa = 'branca'
    union all
    select 'azul' as faixa, count(*) as quantidade from atleta where faixa = 'azul'
    union all
    select 'roxa' as faixa, count(*) as quantidade from atleta where faixa = 'roxa'
    union all
    select 'marrom' as faixa, count(*) as quantidade from atleta where faixa = 'marrom'
    union all
    select 'preta' as faixa, count(*) as quantidade from atleta where faixa = 'preta';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `
    select 'branca' as faixa, count(*) as quantidade from atleta where faixa = 'branca'
union all
select 'azul' as faixa, count(*) as quantidade from atleta where faixa = 'azul'
union all
select 'roxa' as faixa, count(*) as quantidade from atleta where faixa = 'roxa'
union all
select 'marrom' as faixa, count(*) as quantidade from atleta where faixa = 'marrom'
union all
select 'preta' as faixa, count(*) as quantidade from atleta where faixa = 'preta';
                    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
