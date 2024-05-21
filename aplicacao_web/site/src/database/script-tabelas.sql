-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projetoIndividual;

use projetoIndividual;


create table atleta (
	idAtleta int primary key auto_increment,
    nome varchar(45),
    sobrenome varchar(45),
    email varchar(255),
    senha varchar(45),
    telefone char(16),
    cep char(9),
    logradouro varchar(45),
    complemento varchar(45),
    dtNasc date,
    team varchar(100),
    faixa varchar(45),
	grau char(2),
    descricao varchar(500)
);
    

create table medalha (
	idMedalha int primary key auto_increment,
    federacao varchar(45),
    campeonato varchar(45),
    ano date,
    posicao char(2),
    fkAtleta int,
    constraint medalhaAtleta foreign key (fkAtleta) references atleta(idAtleta)
);


create table patrocinio (
	idPatrocinio int primary key auto_increment,
    lugar varchar(45),
    empresa varchar(45),
    segmento varchar(45),
    fkAtleta int,
    constraint patrocinioAtleta foreign key (fkAtleta) references atleta(idAtleta)
);

-- INSERTS

-- Inserts para a tabela 'atleta'
insert into atleta (nome, sobrenome, email, senha, telefone, cep, logradouro, complemento, dtNasc, team, faixa, grau, descricao) values
    ('João', 'Silva', 'joao.silva@email.com', '123456789', '(00) 1234-5678', '12345-678', 'Rua horizonte', 'Apartamento 101', '1990-05-15', 'Macaco gold team', 'Preta', '1°', 'Campeão regional de Jiu-Jitsu'),
    ('Maria', 'Santos', 'maria.santos@email.com', '123456789', '(00) 9876-5432', '54321-876', 'Avenida paulista', 'apartamento 1220', '1988-10-20', 'Alpha', 'Azul', '2°', 'Participante em torneios estaduais de Jiu-Jitsu'),
    ('Pedro', 'Souza', 'pedro.souza@email.com', '123456789', '(00) 4567-8901', '98765-432', 'Rua Cristovão', 'Bloco D', '1995-03-10', 'Ryan gracie', 'marrom', '3°', 'Instrutor de Jiu-Jitsu');

-- Inserts para a tabela 'medalha'
insert into medalha (federacao, campeonato, ano, posicao, fkAtleta) values
    ('CBJJE', 'Campeonato Brasileiro', '2023-01-01', '1º', 1),
    ('IBJJF', 'Mundial de Jiu-Jitsu', '2022-01-01', '3º', 2),
    ('FPJJ', 'Copa Paulista', '2024-01-01', '2º', 3);

-- Inserts para a tabela 'patrocinio'
insert into patrocinio (lugar, empresa, segmento, fkAtleta) values
    ('pernas', 'Kvara', 'Vestes', 1),
    ('peito', 'Growth', 'Alimentício', 2),
    ('braços', 'cisco', 'Tech', 3);
    

-- select para exibir as medalhas e os patrocinios de um usuario especifico
select a.nome, a.sobrenome, m.federacao, m.campeonato, m.ano, m.posicao, pt.empresa, pt.segmento
from atleta a
left join medalha m on a.idAtleta = m.fkAtleta
left join patrocinio pt on a.idAtleta = pt.fkAtleta
where a.idAtleta = 1; -- substitua "1" pelo ID do usuário desejado

-- select para exibir todas as medalhas e patrocinios de todos os usuarios
select a.nome, a.sobrenome, m.federacao, m.campeonato, m.ano, m.posicao, pt.empresa, pt.segmento
from atleta a
left join medalha m on a.idAtleta = m.fkAtleta
left join patrocinio pt on a.idAtleta = pt.fkAtleta;



-- drop database projetoIndividual;