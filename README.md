
# Pix

Plataforma de realizações de transações por pix


## Tecnologias usadas

Versão node: 16^
Versão typeScript: 4.6.4


Framework Node:  [Nestjs](https://nestjs.com/)

Banco de dados : [MongoDb](https://www.mongodb.com/pt-br)

Documentação: [Swagger](https://swagger.io/)

Docker: [Docker](https://www.docker.com/)
## Instalações

Adicionando o projeto em sua máquina:

```bash
  git clone https://github.com/dev-carol/pix.git
  cd pix
```

### Docker

```bash
  docker build -t nest-cloud-run .
  docker run -p3000:3000 nest-cloud-run
```

### Caso o Docker não rode

```bash 
  npm install 
  npm run start:dev
```
obs: Caso o projeto reclame de alguma dependência do mongoDB, rode o comando:

```bash
  npm install @moongose
```



### Local de acesso

http://localhost:3000/api#/
