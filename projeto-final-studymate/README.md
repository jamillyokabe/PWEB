# StudyMate - Projeto Final

Projeto desenvolvido para a disciplina de Programação Web.

O StudyMate é uma aplicação acadêmica para organização de disciplinas, tarefas, calendário, faltas, avaliações e acompanhamento do desempenho do estudante.

Nesta entrega, o projeto contém:

- Frontend web em React;
- Backend Java;
- Banco de dados Oracle;
- Scripts SQL para criação das tabelas;
- CRUD de disciplinas integrado entre frontend e backend.

---

## Estrutura do projeto

```text
ProjetoFinal/
├── backend/
│   └── API Java do projeto
│
├── frontend/
│   └── Aplicação web do StudyMate
│
├── database/
│   └── Scripts SQL do banco Oracle
│
├── docs/
│   └── Documentação do projeto
│
└── README.md
```

---

## Funcionalidades implementadas

Nesta versão, foram implementadas as seguintes funcionalidades:

- Cadastro de disciplinas;
- Listagem de disciplinas;
- Edição de disciplinas;
- Exclusão de disciplinas;
- Integração do frontend com o backend;
- Ajustes de navegação da aplicação;
- Script SQL para criação das tabelas no Oracle;
- Organização do backend com camadas de Controller, Service, DAO, DTO e Model.

---

## Tecnologias utilizadas

### Frontend

- React
- TypeScript
- Vite
- HTML
- CSS
- JavaScript

### Backend

- Java
- API REST
- JDBC / DAO
- Oracle Database

### Banco de dados

- Oracle
- SQL Developer
- Scripts SQL

---

## Banco de dados

O script de criação das tabelas está localizado em:

```text
database/scripts/scripts/create_tables.sql
```

Antes de executar o backend, é necessário abrir esse arquivo no Oracle SQL Developer e executar o script para criar as tabelas do banco.

---

## Configuração do backend

O backend utiliza conexão com banco Oracle.

Antes de executar o backend, verifique as configurações de conexão no arquivo:

```text
backend/src/main/resources/application.properties
```

Confira se os dados estão corretos para o ambiente local:

```properties
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:XE
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA
```

Caso o Oracle esteja configurado com outro host, porta, usuário, senha ou service name, esses dados devem ser ajustados.

---

## Pré-requisitos para executar o projeto

Para executar o projeto completo, é necessário ter instalado:

- Java;
- Maven, caso o backend seja executado pelo terminal;
- Oracle Database;
- Oracle SQL Developer;
- Node.js;
- npm;
- Git.

---

## Ordem recomendada para execução

A ordem recomendada para testar o projeto é:

1. Executar o script SQL de criação das tabelas no Oracle;
2. Verificar as configurações do banco no arquivo `application.properties`;
3. Garantir que exista pelo menos um usuário, um calendário e um período letivo cadastrados;
4. Iniciar o backend Java;
5. Iniciar o frontend;
6. Testar o cadastro, edição, listagem e exclusão de disciplinas.

---

## Informação importante sobre o cadastro de disciplinas

Para cadastrar uma disciplina, é necessário que exista pelo menos um **Período Letivo** cadastrado no banco de dados.

A disciplina possui vínculo com um período através do campo `idPeriodo`.

Portanto, antes de testar o CRUD de disciplinas, é necessário garantir que exista pelo menos um registro na tabela de período letivo.

Caso não exista um período letivo cadastrado, o cadastro de disciplinas pode não funcionar corretamente, pois haverá dependência de chave estrangeira.

---

## Dados mínimos necessários para teste

Para testar o cadastro de disciplinas, o banco precisa ter pelo menos:

- 1 usuário;
- 1 calendário vinculado ao usuário;
- 1 período letivo vinculado ao calendário.

Exemplo de dados mínimos:

```sql
INSERT INTO USUARIO (
    id_usuario,
    nome,
    email,
    senha,
    data_criacao,
    curso,
    semestre,
    matricula,
    instituicao
) VALUES (
    1,
    'Usuário Teste',
    'teste@studymate.com',
    '123456',
    SYSDATE,
    'Análise e Desenvolvimento de Sistemas',
    4,
    '000001',
    'FATEC Sorocaba'
);

INSERT INTO CALENDARIO (
    id_calendario,
    id_usuario,
    nome,
    modo_visualizacao,
    data_inicio,
    data_fim
) VALUES (
    1,
    1,
    'Calendário 2026',
    'MENSAL',
    DATE '2026-02-01',
    DATE '2026-12-20'
);

INSERT INTO PERIODO_LETIVO (
    id_periodo,
    id_calendario,
    nome,
    data_inicio,
    data_fim,
    status
) VALUES (
    1,
    1,
    '2026/1',
    DATE '2026-02-01',
    DATE '2026-06-30',
    'ATIVO'
);

COMMIT;
```

Observação: caso os nomes das tabelas ou colunas estejam diferentes no script `create_tables.sql`, utilizar os nomes definidos no próprio script.

---

## Como executar o backend

Entre na pasta do backend:

```bash
cd backend
```

Execute o projeto pela IDE utilizada em aula ou pelo terminal, caso o Maven esteja configurado:

```bash
mvn spring-boot:run
```

Após iniciar, a API deverá ficar disponível em:

```text
http://localhost:8081/api
```

---

## Como executar o frontend

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois acesse no navegador o endereço exibido no terminal.

Normalmente será:

```text
http://localhost:5173
```

---

## Integração frontend e backend

O frontend está configurado para consumir a API no seguinte endereço:

```text
http://localhost:8081/api
```

Essa configuração pode ser encontrada no arquivo de serviço do frontend, por exemplo:

```text
frontend/src/services/disciplinaService.ts
```

Para que a integração funcione corretamente:

1. O banco Oracle precisa estar rodando;
2. O backend precisa estar executando;
3. O frontend precisa estar executando;
4. Deve existir pelo menos um período letivo cadastrado.

---

## Teste do CRUD de disciplinas

Com o sistema rodando, é possível testar:

- Cadastro de uma nova disciplina;
- Listagem das disciplinas cadastradas;
- Alteração de uma disciplina;
- Exclusão de uma disciplina.

Ao cadastrar uma disciplina, informar os dados solicitados na tela, como:

- Nome da disciplina;
- Professor;
- Média de aprovação;
- Limite de faltas;
- Período letivo.

---

## Possíveis problemas

### Erro ao cadastrar disciplina

Verifique se existe pelo menos um período letivo cadastrado no banco.

### Erro de conexão com o banco

Verifique o arquivo:

```text
backend/src/main/resources/application.properties
```

Confirme usuário, senha, host, porta e service name do Oracle.