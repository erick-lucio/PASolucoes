INSERT INTO Permissoes
(permissao)
values
('relatorios'),
('inserir_cliente'),
('inserir_funcionario'),
('iniciar_atendimento'),
('painel_admin'),
('visualizar_financeiro'),
('alterar_financeiro'),
('alterar_atendimento'),
('alterar_funcionario'),
('alterar_cliente')
;

INSERT INTO Funcionarios
(nome,email,login,senha,ultimo_login)
values
('administrador','ericklucio-suv@hotmail.com','admin',md5('kyuubi2014'),now());

INSERT INTO Funcionarios_Permissoes
(funcionarios_id,permissao_id)
values
((select id from Funcionarios where nome like '%admin%'),1),
((select id from Funcionarios where nome like '%admin%'),2),
((select id from Funcionarios where nome like '%admin%'),3),
((select id from Funcionarios where nome like '%admin%'),4),
((select id from Funcionarios where nome like '%admin%'),5),
((select id from Funcionarios where nome like '%admin%'),6),
((select id from Funcionarios where nome like '%admin%'),7),
((select id from Funcionarios where nome like '%admin%'),8),
((select id from Funcionarios where nome like '%admin%'),9),
((select id from Funcionarios where nome like '%admin%'),10);

INSERT INTO Tipo_Contrato_Cliente
(tipo_contrato)
values
('contrato'),
('avulso');

INSERT INTO Clientes
(nome,numero,bairro,cep,telefone,rua,complemento,UF,cidade,CNPJ,tipo_contrato_id)
VALUES
('Itau Unibanco',267,'São Fransico','33600000','999976918','Rua dos Coquero','Segundo andar','MG','Pedro Leopoldo','154545-4587',1),
('Bradesco',267,'São Fransico','33600000','999976918','Rua dos Coquero','Segundo andar','MG','Pedro Leopoldo','154545-4587',2);

INSERT INTO Prioridade
(prioridade,prioridade_string)
values
(0,'normal'),
(1,'urgencia'),
(2,'emergencia');

INSERT INTO Tipo_Atendimento
(tipo)
values
('Atendimento Online'),
('Atendimento Presencial');

INSERT INTO Sistemas
(sistema)
VALUES
('Sistema 1'),
('Sistema 2'),
('Sistema 3');

INSERT INTO Status
(descricao)
values
('Não Iniciado'),
('Em Andamento'),
('Finalizado'),
('Cancelado');

INSERT INTO Atendimentos
(data_solicitacao,descricao_atendimento,valor_avulso,status_id,pendencia_financeira,duracao,prioridade_id,sistema_id,funcionarios_id,cliente_id,tipo_atendimento_id)
VALUES
(now(),'To fazendo',2540.43,3,'Nenhuma',2.53,2,1,1,1,1),
(now(),'To fazendo',2540.43,4,'Nenhuma',2.53,2,1,1,1,1);