
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
    peso varchar(45),
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

create table postagem(
	idPostagem int primary key auto_increment,
    titulo varchar(45),
    descricao varchar(250),
    dtPostagem timestamp not null default current_timestamp,
    fkAtleta int,
    constraint postageFkAtleta foreign key (fkAtleta) references atleta(idAtleta)
);

-- INSERTS NAS TABELAS

INSERT INTO atleta (nome, sobrenome, email, senha, telefone, cep, logradouro, complemento, dtNasc, team, faixa, grau, peso, descricao) 
VALUES 
('João', 'Silva', 'joao.silva@email.com', '123456789', '(00) 1234-5678', '12345-678', 'Rua horizonte', 'Apartamento 101', '1990-05-15', 'Macaco gold team', 'preta', '1°', 'medio', 'Campeão regional de Jiu-Jitsu'),
('Maria', 'Santos', 'maria.santos@email.com', '123456789', '(00) 9876-5432', '54321-876', 'Avenida paulista', 'apartamento 1220', '1988-10-20', 'Alpha', 'azul', '2°', 'pena', 'Participante em torneios estaduais de Jiu-Jitsu'),
('Pedro', 'Souza', 'pedro.souza@email.com', '123456789', '(00) 4567-8901', '98765-432', 'Rua Cristovão', 'Bloco D', '1995-03-10', 'Ryan gracie', 'marrom', '3°', 'meio-pesado', 'Instrutor de Jiu-Jitsu');
INSERT INTO atleta (nome, sobrenome, email, senha, telefone, cep, logradouro, complemento, dtNasc, team, faixa, grau, peso, descricao) 
VALUES 
('Carlos', 'Pereira', 'carlos.pereira@email.com', 'senhaSegura1', '(00) 1122-3344', '12345-987', 'Rua das Flores', 'Casa 10', '1985-07-22', 'BJJ Heroes', 'roxa', '2°', 'medio', 'Vice-campeão nacional de Jiu-Jitsu'),
('Ana', 'Lima', 'ana.lima@email.com', 'senhaSegura2', '(00) 2233-4455', '54321-654', 'Avenida Central', 'Conjunto 200', '1992-11-30', 'Top Team', 'verde', '1°', 'pena', 'Treinadora de Jiu-Jitsu infantil'),
('Lucas', 'Martins', 'lucas.martins@email.com', 'senhaSegura3', '(00) 3344-5566', '67890-123', 'Rua das Palmeiras', 'Apartamento 3B', '1989-04-17', 'Warriors', 'azul', '3°', 'super-pesado', 'Campeão universitário de Jiu-Jitsu'),
('Beatriz', 'Oliveira', 'beatriz.oliveira@email.com', 'senhaSegura4', '(00) 4455-6677', '87654-321', 'Avenida das Nações', 'Bloco A', '1991-12-25', 'Elite Team', 'branca', '1°', 'galo', 'Iniciando carreira no Jiu-Jitsu'),
('Gabriel', 'Fernandes', 'gabriel.fernandes@email.com', 'senhaSegura5', '(00) 5566-7788', '13579-246', 'Rua do Campo', 'Sítio São José', '1987-06-18', 'Champion BJJ', 'preta', '5°', 'pesado', 'Campeão mundial de Jiu-Jitsu'),
('Julia', 'Costa', 'julia.costa@email.com', 'senhaSegura6', '(00) 6677-8899', '24680-135', 'Rua da Liberdade', 'Apartamento 404', '1994-08-05', 'Gracie Barra', 'marrom', '4°', 'leve', 'Treinadora de Jiu-Jitsu avançado'),
('Rafael', 'Rodrigues', 'rafael.rodrigues@email.com', 'senhaSegura7', '(00) 7788-9900', '11223-334', 'Avenida da Paz', 'Condomínio Sol', '1993-09-14', 'Nova União', 'roxa', '3°', 'meio-pesado', 'Atleta de Jiu-Jitsu profissional'),
('Sofia', 'Almeida', 'sofia.almeida@email.com', 'senhaSegura8', '(00) 8899-0011', '33445-667', 'Rua do Sol', 'Apartamento 202', '1996-02-28', 'Alliance', 'azul', '2°', 'pluma', 'Participante em campeonatos internacionais de Jiu-Jitsu'),
('Vinicius', 'Carvalho', 'vinicius.carvalho@email.com', 'senhaSegura9', '(00) 9900-1122', '44556-778', 'Avenida das Américas', 'Casa 5', '1990-01-12', 'CheckMat', 'verde', '1°', 'medio', 'Promissor atleta de Jiu-Jitsu'),
('Larissa', 'Barbosa', 'larissa.barbosa@email.com', 'senhaSegura10', '(00) 0011-2233', '55667-889', 'Rua das Estrelas', 'Bloco B', '1986-03-23', 'GFTeam', 'preta', '4°', 'pena', 'Instrutora de Jiu-Jitsu para mulheres');



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
VALUES ('Federação A', 'Campeonato X', '2022-05-20', '1', 1);
INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação B', 'Campeonato Y', '2023-06-15', '2', 2);
INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES ('Federação C', 'Campeonato Z', '2021-07-10', '3', 3);
INSERT INTO medalha (federacao, campeonato, ano, posicao, fkAtleta) 
VALUES 
    ('Federação B', 'Campeonato Y', '2023-01-15', '1', 4),
    ('Federação C', 'Campeonato Z', '2022-08-10', '2', 5),
    ('Federação D', 'Campeonato W', '2021-12-05', '3', 6),
    ('Federação E', 'Campeonato V', '2022-03-22', '1', 7),
    ('Federação F', 'Campeonato U', '2023-07-19', '2', 8),
    ('Federação G', 'Campeonato T', '2021-11-25', '3', 9),
    ('Federação H', 'Campeonato S', '2022-06-30', '1', 10),
    ('Federação I', 'Campeonato R', '2023-02-18', '2', 11),
    ('Federação J', 'Campeonato Q', '2021-09-12', '3', 12),
    ('Federação K', 'Campeonato P', '2022-04-07', '1', 13);



-- SELECTS COMUM

select federacao, campeonato, ano, posicao, fkAtleta from medalha where fkAtleta = 1;

select idPatrocinio, lugar, empresa, segmento, patrocinio.fkAtleta, nome, email, senha from patrocinio
join atleta on patrocinio.fkAtleta;

select idPostagem, titulo, postagem.descricao, postagem.fkAtleta, dtPostagem, idAtleta, nome, email, senha
from postagem join atleta on postagem.fkAtleta = idAtleta;

select nome, sobrenome, email, faixa, grau, dtNasc,team,federacao, campeonato, ano, posicao from medalha 
join atleta on fkAtleta = idAtleta;



-- SELECT GRAFICO 1
select 'branca' as faixa, count(*) as quantidade from atleta where faixa = 'branca'
union all
select 'azul' as faixa, count(*) as quantidade from atleta where faixa = 'azul'
union all
select 'roxa' as faixa, count(*) as quantidade from atleta where faixa = 'roxa'
union all
select 'marrom' as faixa, count(*) as quantidade from atleta where faixa = 'marrom'
union all
select 'preta' as faixa, count(*) as quantidade from atleta where faixa = 'preta';


-- SELECT GRAFICO 2
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


-- Idade do usuario
SELECT 
    nome,
    sobrenome,
    dtNasc,
    TIMESTAMPDIFF(YEAR, dtNasc, CURDATE()) AS idade_atual
FROM 
    atleta;


