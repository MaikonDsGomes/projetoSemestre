
create database projetoIndividual;


use projetoIndividual;

-- drop database projetoindividual;

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

select * from atleta;

create table postagem(
	idPostagem int primary key auto_increment,
    titulo varchar(45),
    descricao varchar(500),
    dtPostagem timestamp not null default current_timestamp,
    fkAtleta int,
    constraint postageFkAtleta foreign key (fkAtleta) references atleta(idAtleta)
);

-- SELECT a.id AS idAviso, a.titulo, a.descricao, a.fk_usuario, u.id AS idUsuario, u.nome, u.email, u.senha
-- FROM postagem a INNER JOIN usuario u ON a.fk_usuario = u.id WHERE u.id = 6

select idPostagem, titulo, postagem.descricao, postagem.fkAtleta, dtPostagem,idAtleta, nome, email, senha
from postagem join atleta on postagem.fkAtleta = idAtleta;

insert into atleta (nome, sobrenome, email, senha, telefone, cep, logradouro, complemento, dtNasc, team, faixa, grau, descricao) values
    ('João', 'Silva', 'joao.silva@email.com', '123456789', '(00) 1234-5678', '12345-678', 'Rua horizonte', 'Apartamento 101', '1990-05-15', 'Macaco gold team', 'preta', '1°', 'Campeão regional de Jiu-Jitsu'),
    ('Maria', 'Santos', 'maria.santos@email.com', '123456789', '(00) 9876-5432', '54321-876', 'Avenida paulista', 'apartamento 1220', '1988-10-20', 'Alpha', 'azul', '2°', 'Participante em torneios estaduais de Jiu-Jitsu'),
    ('Pedro', 'Souza', 'pedro.souza@email.com', '123456789', '(00) 4567-8901', '98765-432', 'Rua Cristovão', 'Bloco D', '1995-03-10', 'Ryan gracie', 'marrom', '3°', 'Instrutor de Jiu-Jitsu');


INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa1', 'Segmento1', 1);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa2', 'Segmento2', 1);

INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa3', 'Segmento3', 2);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa4', 'Segmento4', 2);

INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa5', 'Segmento5', 3);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa6', 'Segmento6', 3);


select idPatrocinio, lugar, empresa, segmento, patrocinio.fkAtleta, nome, email, senha from patrocinio
join atleta on patrocinio.fkAtleta;

INSERT INTO postagem (idPostagem, titulo, descricao, fkAtleta) 
VALUES (1, 'Primeiro Post', 'Descrição do primeiro post.', 1);

INSERT INTO postagem (idPostagem, titulo, descricao, fkAtleta) 
VALUES (2, 'Segundo Post', 'Descrição do segundo post.', 2);

INSERT INTO postagem (idPostagem, titulo, descricao, fkAtleta) 
VALUES (3, 'Terceiro Post', 'Descrição do terceiro post.', 3);


INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação A', 'Campeonato X', '2022-05-20', '1', 1);

INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação B', 'Campeonato Y', '2023-06-15', '2', 2);

INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação C', 'Campeonato Z', '2021-07-10', '3', 3);

select federacao, campeonato, ano, posicao, fkAtleta from medalha where fkAtleta = 1;


-- drop database projetoIndividual;
