# Projeto de Pesquisa de Satisfação do Cliente

Este projeto é uma aplicação Node.js utilizando TypeScript e Prisma para gerenciar pesquisas de satisfação do cliente. A aplicação fornece endpoints para criar, atualizar, listar e buscar pesquisas, além de utilizar Docker para facilitar o desenvolvimento e a implantação.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- **Prisma**: ORM para interagir com o banco de dados.
- **Docker**: Plataforma para criar, implantar e rodar aplicações em containers.

## Configuração do Docker

Para rodar o projeto usando Docker, siga estas etapas:

### 1. Clonar o Repositório

Clone o repositório do projeto para sua máquina local:

```bash
git clone https://github.com/amaralzando/api_pesquisa_satisfacao_cliente_node
```

### 2. Instalação do Docker

### 3. Construir a Imagem Docker

- [Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux-install/)
- [Docker Desktop for Mac (macOS)](https://docs.docker.com/desktop/install/mac-install/)
- [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)

Construa a imagem Docker para o projeto:

```bash
docker-compose up -d --build
```

# Descrição das APIs

### 1. Criar Pesquisa

- Endpoint: POST /satisfacao-cliente
- Descrição: Cria uma nova pesquisa de satisfação.
- Corpo da Requisição:

```json
{
  "publicTarget": "string",
  "email": "string",
  "numberStar": number
}
```

- Resposta:

```json
  {
    "id": "string",
    "publicTarget": "string",
    "email": "string",
    "numberStar": number,
    "created_at": "string",
    "update_at": "string",
    "deleted_at": "string"
  }
```

### 2. Atualizar Pesquisa

- Endpoint: POST /satisfacao-cliente/edit/:pesquisa_id
- Descrição: Atualiza os detalhes de uma pesquisa existente.
- Parâmetros:
  - pesquisa_id: ID da pesquisa a ser atualizada.
- Corpo da Requisição:

```json
{
  "publicTarget": "string",
  "email": "string",
  "numberStar": number
}
```

- Resposta:

```json
{
  "id": "string",
  "publicTarget": "string",
  "email": "string",
  "numberStar": number,
  "created_at": "string",
  "update_at": "string",
  "deleted_at": "string"
}
```

### 3. Em teste

### 4. Buscar Pesquisa por Público-Alvo

- Endpoint: GET /satisfacao-cliente/search
- Descrição: Busca pesquisas pelo público-alvo e ordena pelo número de estrelas.
- Query Parameters:
  - publicTarget: Público-alvo para filtrar.
  - orderStar: Ordenação por número de estrelas ("asc" ou "desc").
- Resposta: Array de Pesquisas

```json
  [
    {
    "id": "string",
    "publicTarget": "string",
    "email": "string",
    "numberStar": number,
    "created_at": "string",
    "update_at": "string",
    "deleted_at": "string"
    }
  ]
```
