# lib-validatorCpf

## Sobre a biblioteca

Esta biblioteca tem como objetivo implementar um validador de dados de cartões. A biblioteca deverá validar o número do cartão de crédito (usando algoritmo de Luhn) e retornar **true** e ou **false** de acordo com o caso.

## Como instalar

```sh
npm install lib-validator-card
```

## Como utilizar

```node
> const card = require("lib-validator-card");
> card.cardValidator("5283187141151664")
> // returns "true"

> card.cardValidator("4916232693460535")
> // returns "false"
```
