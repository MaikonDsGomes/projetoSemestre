create database projetoIndividual;

use projetoIndividual;

create table team(
	idTeam int primary key auto_increment,
    nome varchar(100),
    cep char(9),
    logradouro varchar(45),
    complemento varchar(45),
    descricao varchar(100)
);

create table atleta (
	idAtleta int primary key auto_increment,
    nome varchar(45),
    sobrenome varchar(45),
    email varchar(255),
    senha varchar(45),
    cep char(9),
    logradouro varchar(45),
    complemento varchar(45),
    dtNasc date,
    grau char(2),
    faixa varchar(45),
    fkTeam int,
    constraint fkTeamAtleta foreign key (fkTeam) references team(idTeam)
);

drop database projetoIndividual;
