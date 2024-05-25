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

function buscarUltimasMedidasCat() {

    var instrucaoSql = `
    select 'galo' as peso, count(*) as quantidade from atleta where peso = 'galo'
union all
select 'pluma' as peso, count(*) as quantidade from atleta where peso = 'pluma'
union all
select 'pena' as peso, count(*) as quantidade from atleta where peso = 'pena'
union all
select 'leve' as peso, count(*) as quantidade from atleta where peso = 'leve'
union all
select 'medio' as peso, count(*) as quantidade from atleta where peso = 'medio'
union all
select 'meio-pesado' as peso, count(*) as quantidade from atleta where peso = 'meio-pesado'
union all
select 'pesado' as peso, count(*) as quantidade from atleta where peso = 'pesado'
union all
select 'super-pesado' as peso, count(*) as quantidade from atleta where peso = 'super-pesado'
union all
select 'pesadissmo' as peso, count(*) as quantidade from atleta where peso = 'pesadissmo'
union all
select 'absoluto' as peso, count(*) as quantidade from atleta where peso = 'absoluto';
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
    buscarMedidasEmTempoReal,
    buscarUltimasMedidasCat
}
