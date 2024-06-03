
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
    estado varchar(45),
    cep char(9),
    dtNasc date,
    team varchar(100),
    faixa varchar(45),
	grau char(2),
    peso varchar(45)
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

create table postagem(
	idPostagem int primary key auto_increment,
    titulo varchar(45),
    descricao varchar(250),
    dtPostagem timestamp not null default current_timestamp,
    fkAtleta int,
    constraint postageFkAtleta foreign key (fkAtleta) references atleta(idAtleta)
);

-- INSERTS NAS TABELAS

INSERT INTO atleta (nome, sobrenome, email, senha, telefone, estado ,cep, dtNasc, team, faixa, grau, peso)
VALUES 
('João', 'Silva', 'joao.silva@email.com', '123456789', '(00) 1234-5678', 'Belo Horizonte','12345-678', '1990-05-15', 'Macaco gold team', 'preta', '1°', 'medio'),
('Maria', 'Santos', 'maria.santos@email.com', '123456789', '(00) 9876-5432', 'Belo Horizonte','54321-876','1988-10-20', 'Alpha', 'azul', '2°', 'pena'),
('Pedro', 'Souza', 'pedro.souza@email.com', '123456789', '(00) 4567-8901', 'Belo Horizonte','98765-432', '1995-03-10', 'Ryan gracie', 'marrom', '3°', 'meio-pesado'),
('Carlos', 'Pereira', 'carlos.pereira@email.com', 'senhaSegura1', '(00) 1122-3344', 'Belo Horizonte','12345-987', '1985-07-22', 'BJJ Heroes', 'roxa', '2°', 'medio'),
('Lucas', 'Martins', 'lucas.martins@email.com', 'senhaSegura3', '(00) 3344-5566', 'São Paulo','67890-123', '1989-04-17', 'Warriors', 'azul', '3°', 'super-pesado'),
('Beatriz', 'Oliveira', 'beatriz.oliveira@email.com', 'senhaSegura4', '(00) 4455-6677','São Paulo', '87654-321','1991-12-25', 'Elite Team', 'branca', '1°', 'galo'),
('Gabriel', 'Fernandes', 'gabriel.fernandes@email.com', 'senhaSegura5', '(00) 5566-7788', 'São Paulo', '13579-246','1987-06-18', 'Champion BJJ', 'preta', '5°', 'pesado'),
('Julia', 'Costa', 'julia.costa@email.com', 'senhaSegura6', '(00) 6677-8899', 'São Paulo','24680-135', '1994-08-05', 'Gracie Barra', 'marrom', '4°', 'leve'),
('Rafael', 'Rodrigues', 'rafael.rodrigues@email.com', 'senhaSegura7', '(00) 7788-9900', 'Bahia', '11223-334', '1993-09-14', 'Nova União', 'roxa', '3°', 'meio-pesado'),
('Sofia', 'Almeida', 'sofia.almeida@email.com', 'senhaSegura8', '(00) 8899-0011', 'Bahia','33445-667',  '1996-02-28', 'Alliance', 'azul', '2°', 'pluma'),
('Larissa', 'Barbosa', 'larissa.barbosa@email.com', 'senhaSegura10', '(00) 0011-2233', 'Bahia','55667-889',  '1986-03-23', 'GFTeam', 'preta', '4°', 'pena');

select * from atleta;

INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa1', 'Segmento1', 1);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa2', 'Segmento2', 1);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa3', 'Segmento3', 2);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa4', 'Segmento4', 2);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa5', 'Segmento5', 3);
INSERT INTO patrocinio (lugar, empresa, segmento, fkAtleta) VALUES ('Costas', 'Empresa6', 'Segmento6', 3);


INSERT INTO postagem (idPostagem, titulo, descricao, fkAtleta) 
VALUES (1, 'Primeiro Post', 'Descrição do primeiro post.', 1);
INSERT INTO postagem (idPostagem, titulo, descricao, fkAtleta) 
VALUES (2, 'Segundo Post', 'Descrição do segundo post.', 2);
INSERT INTO postagem (idPostagem, titulo, descricao, fkAtleta) 
VALUES (3, 'Terceiro Post', 'Descrição do terceiro post.', 3);


INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação A', 'Campeonato X', '2022-05-20', '1°', 1);
INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação B', 'Campeonato Y', '2023-06-15', '2°', 2);
INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação C', 'Campeonato Z', '2021-07-10', '3°', 3);
INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES 
    ('Federação B', 'Campeonato Y', '2023-01-15', '1°', 4),
    ('Federação C', 'Campeonato Z', '2022-08-10', '2°', 5),
    ('Federação D', 'Campeonato W', '2021-12-05', '3°', 6),
    ('Federação E', 'Campeonato V', '2022-03-22', '1°', 7),
    ('Federação F', 'Campeonato U', '2023-07-19', '2°', 8),
    ('Federação G', 'Campeonato T', '2021-11-25', '3°', 9),
    ('Federação H', 'Campeonato S', '2022-06-30', '1°', 10),
    ('Federação I', 'Campeonato R', '2023-02-18', '2°', 11);

-- SELECTS COMUM
select federacao, campeonato, ano, posicao, fkAtleta from medalha where fkAtleta = 1;

select idPatrocinio, lugar, empresa, segmento, patrocinio.fkAtleta, nome, email, senha from patrocinio
join atleta on patrocinio.fkAtleta;

select idPostagem, titulo, postagem.descricao, postagem.fkAtleta, dtPostagem, idAtleta, nome, email, senha
from postagem join atleta on postagem.fkAtleta = idAtleta;

select nome, sobrenome, email, faixa, grau, dtNasc,team,federacao, campeonato, ano, posicao from medalha 
join atleta on fkAtleta = idAtleta;

-- SELECT GRAFICO 1
    select faixa, count(faixa) as quantidade from atleta group by faixa;

-- SELECT GRAFICO 2
    select peso, count(peso) as quantidade from atleta group by peso;

-- Idade do usuario
SELECT 
    nome,
    sobrenome,
    dtNasc,
    TIMESTAMPDIFF(YEAR, dtNasc, CURDATE()) AS idade_atual
FROM 
    atleta;
    
    -- TAXA DE VITORIA
SELECT 
    TRUNCATE(
        (SELECT COUNT(*) FROM medalha WHERE fkAtleta = 1 AND posicao = '1°') / 
        (SELECT COUNT(*) FROM medalha WHERE fkAtleta = 1) * 100, 1
    ) AS taxa
FROM medalha
WHERE fkAtleta = 1
group by taxa;


-- GRAFICO PIE DE QTD MEDALHA POR POSICAO

select posicao, count(posicao) as posQtd from medalha where fkAtleta = 1 group by posicao;

-- LISTAR ESTADOS

select distinct estado from atleta;
