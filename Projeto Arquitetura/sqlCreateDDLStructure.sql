use PaSolucoesDev;

create table Permissoes(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
permissao VARCHAR(50) NOT NULL
);
create table Funcionarios(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
email VARCHAR(30) NOT NULL,
login VARCHAR(50) NOT NULL,
senha VARCHAR(100) NOT NULL,
ultimo_login datetime not null
);
create table Funcionarios_Permissoes(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
permissao_id INT NOT NULL,
funcionarios_id INT NOT NULL,
FOREIGN KEY (permissao_id) REFERENCES Permissoes(id),
FOREIGN KEY (funcionarios_id) REFERENCES Funcionarios(id)
);

create table Sistemas(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
sistema VARCHAR(30) NOT NULL
);
create table Tipo_Atendimento(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
tipo VARCHAR(30) NOT NULL
);
create table Prioridade(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
prioridade int NOT NULL,
prioridade_string VARCHAR(30) NOT NULL
);
create table Tipo_Contrato_Cliente(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
tipo_contrato VARCHAR(30) NOT NULL
);
create table Clientes(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
numero int NOT NULL,
bairro VARCHAR(50) NOT NULL,
cep VARCHAR(15) NOT NULL,
telefone VARCHAR(15) NOT NULL,
rua VARCHAR(50) NOT NULL,
complemento VARCHAR(150),
UF VARCHAR(3) NOT NULL,
cidade VARCHAR(30) NOT NULL,
CNPJ VARCHAR(20) NOT NULL,
tipo_contrato_id int NOT NULL,
FOREIGN KEY (tipo_contrato_id) REFERENCES Tipo_Contrato_Cliente(id)
);
create table Status(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
descricao VARCHAR(50) NOT NULL
);
create table Atendimentos(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
data_solicitacao datetime NOT NULL,
data_inicio datetime ,
descricao_atendimento VARCHAR(250) ,
prioridade_id int ,
sistema_id int ,
funcionarios_id int ,
cliente_id int ,
tipo_atendimento_id int ,
status_id int,
duracao float,
pendencia_financeira varchar(100),
valor_avulso float,
FOREIGN KEY (status_id) REFERENCES Status(id),
FOREIGN KEY (prioridade_id) REFERENCES Prioridade(id),
FOREIGN KEY (sistema_id) REFERENCES Sistemas(id),
FOREIGN KEY (funcionarios_id) REFERENCES Funcionarios(id),
FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
FOREIGN KEY (tipo_atendimento_id) REFERENCES Tipo_Atendimento(id)
);







