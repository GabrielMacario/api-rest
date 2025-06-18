# 🌍 API Node - Rest

Esta é uma API simples desenvolvida com **Node.js**, **Express** e **PostgreSQL**, para gerenciar seleções da Copa do Mundo.

## 📦 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- dotenv
- pg

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/api-node.git
cd api-node
2. Instale as dependências
npm install
3. Configure o banco de dados
Certifique-se de que você tem um banco PostgreSQL rodando com uma tabela chamada selecoes:

sql

CREATE TABLE selecoes (
  id SERIAL PRIMARY KEY,
  selecao VARCHAR(255) NOT NULL,
  grupo VARCHAR(255) NOT NULL
);
4. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env

DB_USER=admin
DB_PASS=123456
DB_NAME=db-cup
DB_PORT=5432
DB_HOST=localhost
PORT=3000
Ajuste os valores conforme sua configuração local.

5. Inicie o servidor
bash

npm run dev
A API estará disponível em: http://localhost:3000

📚 Endpoints disponíveis
Método	Rota	Descrição
GET	/	Hello World
GET	/selecoes	Lista todas as seleções
GET	/selecoes/:id	Retorna uma seleção por ID
POST	/selecoes	Cria uma nova seleção
PUT	/selecoes/:id	Atualiza uma seleção existente
DELETE	/selecoes/:id	Remove uma seleção

📥 Exemplo de corpo para POST/PUT
json

{
  "selecao": "Brasil",
  "grupo": "G"
}
```
