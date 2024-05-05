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
    grau char(2),
    faixa varchar(45),
    team varchar(100)
);

create table medalha (
	idMedalha int primary key auto_increment,
    campeonato varchar(45),
    ano date,
    posicao char(2),
    fkAtleta int,
    constraint medalhaAtleta foreign key (fkAtleta) references atleta(idAtleta)
);

create table administrador (
	idAdministrador int primary key auto_increment,
    nome varchar(45),
    sobrenome varchar(45),
    email varchar(255),
    senha varchar(45),
    telefone char(16),
    cargo varchar(45)
);

create table empresa (
	idEmpresa int primary key auto_increment,
    razaoSocial varchar(100),
    cnpj char(18),
    descricao varchar (100),
    segmento varchar (45),
    cep char (9),
    logradouro varchar(45),
    complemento varchar(45),
    fkAdministrador int,
    constraint empresaAdministrador foreign key (fkAdministrador) references administrador(idAdministrador)
);

create table patrocinio (
	idPatrocinio int,
    pkAtleta int,
    pkEmpresa int,
    lugar varchar(45),
    constraint pkCompostaPatrocinio primary key (idPatrocinio,pkAtleta,pkEmpresa),
    constraint patrocinioAtleta foreign key (pkAtleta) references atleta(idAtleta),
    constraint patrocinioEmpresa foreign key (pkEmpresa) references empresa(idEmpresa)
);

-- INSERTS

-- Inserts para a tabela atleta
insert into atleta (nome, sobrenome, email, senha, telefone, cep, logradouro, complemento, dtNasc, grau, faixa, team)
values ('João', 'Silva', 'joao.silva@email.com', 'senha123', '(11) 91234-5678', '12345-678', 'Rua das Flores', 'Apto 101', '1990-05-15', '3°', 'Roxa', 'Equipe A');

insert into atleta (nome, sobrenome, email, senha, telefone, cep, logradouro, complemento, dtNasc, grau, faixa, team)
values ('Maria', 'Santos', 'maria.santos@email.com', 'senha456', '(11) 98765-4321', '54321-876', 'Avenida Central', 'Casa 02', '1988-10-20', '2°', 'Branca', 'Equipe B');

insert into atleta (nome, sobrenome, email, senha, telefone, cep, logradouro, complemento, dtNasc, grau, faixa, team)
values ('Pedro', 'Oliveira', 'pedro.oliveira@email.com', 'senha789', '(11) 99876-5432', '98765-432', 'Rua das Palmeiras', 'Bloco C', '1995-03-10', '4°', 'Preta', 'Equipe C');

-- Inserts para a tabela medalha
insert into medalha (campeonato, ano, posicao, fkAtleta)
values ('Campeonato Nacional', '2023-07-15', '1', 1);

insert into medalha (campeonato, ano, posicao, fkAtleta)
values ('Campeonato Estadual', '2024-02-20', '2', 2);

insert into medalha (campeonato, ano, posicao, fkAtleta)
values ('Mundial de Jiu Jitsu', '2023-11-30', '3', 3);

-- Inserts para a tabela administrador
insert into administrador (nome, sobrenome, email, senha, telefone, cargo)
values ('Carlos', 'Santana', 'carlos.santana@email.com', 'senhaadm1', '(11) 8765-4321', 'Gerente de Marketing');

insert into administrador (nome, sobrenome, email, senha, telefone, cargo)
values ('Ana', 'Lima', 'ana.lima@email.com', 'senhaadm2', '(11) 9876-5432', 'Diretora Financeira');

insert into administrador (nome, sobrenome, email, senha, telefone, cargo)
values ('Mariana', 'Pereira', 'mariana.pereira@email.com', 'senhaadm3', '(11) 8765-9876', 'Gerente de Recursos Humanos');

-- Inserts para a tabela empresa
insert into empresa (razaoSocial, cnpj, descricao, segmento, cep, logradouro, complemento, fkAdministrador)
values ('Empresa A', '12345678901234', 'Empresa de Tecnologia', 'Tecnologia', '12345-678', 'Rua Principal', 'Sala 101', 1);

insert into empresa (razaoSocial, cnpj, descricao, segmento, cep, logradouro, complemento, fkAdministrador)
values ('Empresa B', '98765432109876', 'Empresa de Alimentos', 'Alimentício', '54321-876', 'Avenida Central', 'Andar 2', 2);

insert into empresa (razaoSocial, cnpj, descricao, segmento, cep, logradouro, complemento, fkAdministrador)
values ('Empresa C', '13579246801357', 'Empresa de Moda', 'Moda', '98765-432', 'Rua das Lojas', 'Bloco B', 3);

-- Inserts para a tabela patrocinio
insert into patrocinio (idPatrocinio, pkAtleta, pkEmpresa, lugar)
values (1, 1, 1, 'Ombros');

insert into patrocinio (idPatrocinio, pkAtleta, pkEmpresa, lugar)
values (2, 2, 2, 'Costas');

insert into patrocinio (idPatrocinio, pkAtleta, pkEmpresa, lugar)
values (3, 3, 3, 'Pernas');



-- SELECTS PATROCINICIO

select * from patrocinio;

select * from patrocinio
join atleta as a on pkAtleta = a.idAtleta
join empresa as e on pkEmpresa = e.idEmpresa;

-- dados do atleta e empresa e local do patrocinio
select a.nome, a.email, a.telefone, a.faixa, a.grau, a.team, e.razaoSocial, e.segmento, lugar from patrocinio
join atleta as a on pkAtleta = a.idAtleta
join empresa as e on pkEmpresa = e.idEmpresa;



-- SELECTS EMPRESA

select * from empresa;

-- Empresa e seus adms
select razaoSocial, segmento, nome, sobrenome, email, cargo from empresa
join administrador on fkAdministrador = idAdministrador;


-- SELECTS ATLETA E MEDALHA

select * from atleta;

select * from medalha;

-- Atletas suas conquistas
select nome, faixa, team, campeonato, posicao, ano from medalha
join atleta on fkAtleta = idAtleta;



-- drop database projetoIndividual;
