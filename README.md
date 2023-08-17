# Node_RetirementPlan

## Português

### Requerimentos

- Node.js 18+
- NPM or Yarn - Eu vou usar o Yarn
- nodemon é opcional mas eu vou usar neste projeto
- PostgreSQL 12+

### Passos

- Primeiro, após extrair o projeto do git, execute os comandos abaixo dentro da pasta do projeto.

- Crie um arquivo .env e nele coloque as credenciais para a conexão com o banco de dados postgresql. Utilize o arquivo setting.env como base.

```
yarn install
```

- Se tiver o nodemon instalado só rodar o comando abaixo

```
yarn start
```

- Caso contrário, rodar o comando abaixo

```
node server.js
```

#### P.S.

- Para ver a coletania de endpoints acessar o http://localhost:3000/api/doc

- Este projeto contem a coleção dos endpoints no postman para os endpoints.

## English

### Requirements

- Node.js 18+
- NPM or Yarn - I'll use Yarn
- nodemon is optional but I'll use it in this project
- PostgreSQL 12+

### Steps

- First, extract the project from git, run the commands below inside of the project folder.

- Create a .env file and inside of it put the credentials to connect with the PostgreSQL database. Use setting.env as a mold.

```
yarn install
```

- If you have nodemon installed run the code below

```
yarn start
```

- Otherwise, run this code

```
node server.js
```

#### P.S.

- This project has an endpoint collection in postman and the documentation you can access in http://localhost:3000/api/doc
