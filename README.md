# Sistema de Listagem de Alunos via CLI com Autenticação e Paginação

Este projeto é um comando de terminal (`Command`) desenvolvido em Node.js que consome uma API REST autenticada, listando todos os alunos cadastrados e suas respectivas matérias. Os dados são exibidos em uma tabela formatada no terminal utilizando a biblioteca `cli-table3`.

##  Objetivo da Atividade

- Criar um comando executável no terminal que consuma a rota `GET /api/alunos` da API.
- Fazer login na rota `POST /login` e utilizar o token JWT retornado.
- Listar todos os alunos (paginação limitada a 10 por requisição) com as matérias separadas por vírgula ou quebra de linha.
- Exibir os dados em uma tabela no terminal com as colunas `Aluno` e `Matérias`.
- Utilizar cli-table3 para a exibição.

## ⚙Tecnologias Utilizadas

- Node.js
- Axios
- CLI-Table3
- Sequelize (ORM)
- Express
- JSON Web Token (JWT)

##  Estrutura de Pastas

├── .dockerignore
├── .env.example
├── .gitignore
├── command
├── docker-compose.yml
├── Insomnia.yaml
├── package-lock.json
├── package.json
├── readme.md
├── server.js
│
├── app/
│   ├── Commands/
│   │   └── GetAlunosCommand.js
│   │
│   ├── Controllers/
│   │   └── AuthController.js
│   │   └── AlunosController.js
│   │
│   ├── Middlewares/
│   │   └── auth.js
│   │
│   ├── Models/
│   │   ├── Aluno.js
│   │   ├── Materia.js
│   │   ├── AlunoMateria.js
│   │   └── User.js
│
├── config/
│   ├── database.js
│   └── sequelize_relations.js
│
├── database/
│   ├── migrations/
│   │   └── xxxx-create-users.js
│   │   └── xxxx-create-alunos.js
│   │   └── xxxx-create-materias.js
│   │   └── xxxx-create-alunos-materias.js
│   │
│   └── seeds/
│       └── xxxx-users.js
│       └── xxxx-alunos.js
│       └── xxxx-materias.js
│       └── xxxx-alunos-materias.js
│
└── swagger/
    └── swagger_output.json

## Como executar

1. Clone o repositório (ou use sua versão criada do zero).
2. Instale as dependências:


npm install
Configure o .env com os dados do seu banco.

Rode as migrations e seeds:

bash
Copiar
Editar
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
Execute o comando:

node command
# ou
./command

Resultado Esperado
O terminal exibirá uma tabela como esta:


┌────────────────────────────┬────────────────────────────────────────────────────┐
│ Aluno                      │ Matérias                                           │
├────────────────────────────┼────────────────────────────────────────────────────┤
│ Aluno 1                    │ Português, Matemática, História, Geografia, Inglês│
│ Aluno 2                    │ Português, Matemática, História, Geografia, Inglês│
│ ...                        │ ...                                                │
└────────────────────────────┴────────────────────────────────────────────────────┘
