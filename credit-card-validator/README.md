# Validador de Cartões de Crédito

Este projeto é um validador de cartões de crédito em JavaScript, capaz de identificar a bandeira do cartão e validar o número utilizando o algoritmo de Luhn. O projeto foi desenvolvido como parte de um desafio da DIO.

## Estrutura do Projeto

```
credit-card-validator
├── src
│   ├── index.js          # Ponto de entrada da aplicação
│   ├── validator.js      # Classe principal de validação
├── package.json          # Configuração do projeto
└── README.md             # Documentação
```

## Instalação

1. Clone o repositório e acesse a pasta do projeto:

   ```bash
   git clone <repository-url>
   cd "Projeto Dio 3 - Validador de cartões/credit-card-validator"
   ```

2. Instale o Node.js, se ainda não tiver ([nodejs.org](https://nodejs.org/)).

3. (Opcional, mas recomendado) Adicione `"type": "module"` ao seu `package.json` para evitar avisos:

   ```json
   {
     "type": "module"
   }
   ```

## Como Usar

Edite o arquivo `src/index.js` para testar diferentes cartões:

```javascript
import CreditCardValidator from './validator.js';

const validator = new CreditCardValidator();

// Troque o número abaixo para testar diferentes cartões
const cardNumber = '4111 1111 1111 1111';

if (validator.validate(cardNumber)) {
    console.log(`${cardNumber} é um cartão válido.`);
    console.log(`Bandeira: ${validator.getCardType(cardNumber)}`);
} else {
    console.log(`${cardNumber} não é um cartão válido.`);
}
```

Execute o projeto:

```bash
cd src
node index.js
```

## Exemplos de Cartões Testados

- **Visa:**  
  `4916 8387 7250 6984`, `4506 3168 9496 7216`
- **Diners Club:**  
  `3828 579867 3243`, `3680 391862 0159`
- **EnRoute:**  
  `2149 2131963 9257`, `2149 1712229 7317`
- **JCB:**  
  `3594 0692 3480 9961`, `3582 0197 1880 5989`
- **Voyager:**  
  `86996 1750 44946 7`, `86997 1870 41370 7`
- **Hipercard:**  
  `6062 8225 8112 8468`, `6062 8251 3031 5114`
- **Aura:**  
  `5077 7538 0893 7834`, `5084 5752 3884 6231`

## Como funciona a identificação das bandeiras

A identificação é feita por meio de expressões regulares (regex) que verificam os prefixos e o tamanho dos números de cada bandeira. Os padrões foram definidos com base em exemplos reais e documentação de cartões.

Exemplo de regex para Visa:
```javascript
/^4[0-9]{12}(?:[0-9]{3})?$/
```

## Como contribuir

Se quiser adicionar novas bandeiras, basta enviar exemplos de cartões ou os prefixos (BINs) para serem incluídos no método `getCardType` do arquivo `validator.js`.

---

Projeto criado como parte do desafio da DIO, com apoio do GitHub Copilot.

## Licença

Este projeto está licenciado sob a licença MIT.