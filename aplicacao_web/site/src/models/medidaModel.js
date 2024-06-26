var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `
    select faixa, count(faixa) as quantidade from atleta group by faixa;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasEvolucao(idAtleta) {

    var instrucaoSql = `
    select year(ano) as ano, count(distinct campeonato) as qtdCamp 
from medalha 
where fkAtleta = ${idAtleta} 
group by year(ano) 
order by ano desc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidasPos(idAtleta) {

    var instrucaoSql = `
    select posicao, count(posicao) as posQtd from medalha where fkAtleta = ${idAtleta} group by posicao;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function taxaVitoria(idAtleta) {

    var instrucaoSql = `
    SELECT 
    TRUNCATE(
        (SELECT COUNT(*) FROM medalha WHERE fkAtleta = ${idAtleta} AND posicao = '1°') / 
        (SELECT COUNT(*) FROM medalha WHERE fkAtleta = ${idAtleta}) * 100, 1
    ) AS taxa
FROM medalha
WHERE fkAtleta = ${idAtleta}
group by taxa;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasCat() {

    var instrucaoSql = `
    select peso, count(peso) as quantidade from atleta group by peso;
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
    buscarUltimasMedidasCat,
    buscarUltimasMedidasEvolucao,
    buscarUltimasMedidasPos,
    taxaVitoria
}
