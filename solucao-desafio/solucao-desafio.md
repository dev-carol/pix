## Solução

##### Aqui recebemos uma listas das transações aguardando um reprocessamento

```http
  GET /api/v1/pix/transactions
```
Mas como descobrir a qual agência/conta pertence ao sheridancrist@lemke.info?

- Já temos a nossa primeira pista, que é o próprio email
- Todo procedimento de transação de pix possui um costumerID
- E através desse ID que iremos encontrar a agência/conta em outra rota


#### Retorna todos os dados de agência e conta

```http
  GET /api/v1/customers/customers
```

- Depois de termos pego o costumerID na rota /api/v1/pix/transactions, podemos procurar pelo mesmo nessa endpoint de costumers
- Assim encontraremos a agência e conta que pertence ao email: sheridancrist@lemke.info


### Verificação de saldo 

```http
  GET /api/v1/customers/{customerID}
```
 E aqui que entra a pegadinha. Ao entrar na api de verificação de saldo, percebi que a informação está solta
 Ou seja não há um ID para dizer que aquele X saldo, pertence ao determinado cliente

 Em um problema real, isso daria um grande problema. Nesse caso atribuiria um novo param de ID
 Mas por ser dados mocks, encarei aquele saldo sendo do sheridancrist@lemke.info


### Reenviando o pix para o cliente

```http
  POST /api/v1/pix/
```

- Como vi que o cliente possuia o valor total em sua conta
- Pude reenviar para o cliente, usando os dados {CPF, EMAIL, TELEFONE}
- E assim retornando um body + ID do pix realizado

### Consultando se o pix foi realmente enviado

```http
  GET /api/v1/pix/transactions
```

- Através do ID gerado na rota : /api/v1/pix, podemos consultar nessa endpoint
- E assim veremos se foi enviado o pix pro cliente :D