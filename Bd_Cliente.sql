Create database APICLIENTE;
use APICLIENTE;

create table tbCliente(
id int primary key auto_increment,
nome varchar(50) NOT NULL,
telefone varchar(20),
endereco varchar(55) NOT NULL);

insert into tbCliente values (1, 'Ana Paula Souza', '(11) 91234-5678', 'Rua das Flores, 123 - São Paulo/SP');
insert into tbCliente values (2, 'Bruno Costa','(21) 99876-5432','Av. Atlântica, 456 - Rio de Janeiro/RJ');
insert into tbCliente values (3, 'Carla Mendes', '(31) 98765-4321', 'Rua Ouro Preto, 789 - Belo Horizonte/MG');
insert into tbCliente values (4, 'Diego Alves', '(41) 97654-3210', 'Rua XV de Novembro, 101 - Curitiba/PR');
insert into tbCliente values (5, 'Elisa Ferreira', '(51) 96543-2109', 'Av. Borges de Medeiros, 202 - Porto Alegre/RS');
insert into tbCliente values (6, 'Thais Obana', '(11) 96543-2109', 'Av. XV de Novembro, 11 - São Paulo/SP');
