# Trybe Wallet - Gerenciador de Despesas

Este projeto consiste em uma aplicação web para gerenciamento de despesas financeiras. Permite aos usuários realizar login, adicionar, editar e excluir despesas, além de apresentar um resumo das despesas totais.

## Deploy
O projeto está disponível para acesso no link: [Trybe Wallet](https://trybe-wallet-smoky.vercel.app/)

## Tecnologias e Técnicas Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **React Router**: Gerenciamento de rotas na aplicação.
- **Redux**: Gerenciamento de estado global na aplicação.
- **Redux Thunk**: Middleware para lidar com ações assíncronas no Redux.
- **Testing Library**: Utilizada para testes de componentes React.
- **API de Moedas**: Integração com uma API externa para informações de câmbio.

### Técnicas e Práticas

- **Desenvolvimento Orientado a Testes (TDD)**: Desenvolvimento baseado em testes, onde os testes são escritos antes da implementação do código.
- **Padrões de Projeto**: Utilização de padrões como Container/Presentation, Redux Ducks, entre outros.

## Estrutura de Arquivos

- **`src/`**: Diretório principal do código-fonte.
  - **`components/`**: Componentes reutilizáveis da aplicação.
  - **`pages/`**: Páginas principais da aplicação (Login, Wallet, etc.).
  - **`redux/`**: Configurações do Redux (actions, reducers, store).
  - **`services/`**: Serviços, como integrações com APIs externas.
  - **`styles/`**: Arquivos de estilos para a aplicação.

## Testes Automatizados

### Arquivos de Teste

- **`helpers/renderWith.js`**: Funções utilitárias para renderização de componentes com Redux e React Router.
- **`__tests__/api.test.js`**: Testes para verificar os retornos da API de moedas.
- **`__tests__/login.test.js`**: Testes para a página de login.
- **`__tests__/wallet.test.js`**: Testes para a página de carteira, incluindo adição, edição e exclusão de despesas.


## Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Instale as dependências com o comando: `npm install`.
3. Execute a aplicação com: `npm start`.

## Como Executar os Testes

Para executar os testes automatizados:

```bash
npm test
