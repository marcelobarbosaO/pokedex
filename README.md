<p align="center">
  <img alt="Pokedex logo" src=".github/logo.svg" width="400px" />
</p>

<p align="center" fontSize="60px">
  Aplicativo para listagem de pokémons
</p>

<p align="center">
</p>

## 💻   Projeto

Aplicativo para listagem, filtro e busca de pokemons utilizando React Native.
Todo o consumo de api foi possível utilizando a [PokéApi](https://pokeapi.co/).


### Funcionalidades

- [x] **Autenticação de Usuário**: Logar usuário usando api back end para teste [ReqRes](https://reqres.in/)

- [x] **Listagem dos pokémons**: Listar os pokémons com o uso da API REST.

- [x] **Scroll infito**: Aumentar a listagem de pokemons ao rolar a tela até o fim.

- [x] **Buscar pokémons**: Método para filtrar os pokémons a partir do seu nome.

- [x] **Detalhe do pokémon**: Página com detalhes do pokemon.

### Conceitos abordados

- Utilizado uma api de back end de teste para autenticar usuário e manter logado via redux-persist com sagas e redux-toolkit

- FlexBox com Styled-Components para montagem do layout.

- Utilização do react-native-size-matters para normalização de fontes e tamanho de Views.

- Consumo de api com o uso da lib [axios](https://github.com/axios/axios).

- Conceitos de tipagem no typescript.

- Configuração de fonte local.

- Tema global utilizando react-native-paper e styled-components.

- Uso de Redux (redux-saga, redux-toolkit, redux-persist) para controle de autenticação do usuário.

- Solidarity para controle de dependencias obrigatórias no projeto.

- Hook Form para controle do formulário de login e validação usando yup.

- Husky para melhora e validação dos commits.

- Jest para testes de integração.

## 🚀  Tecnologias

-  [Styled-components](https://www.styled-components.com/)
-  [React-Native-Vector-Icons](https://react-icons.netlify.com/)
-  [Axios](https://github.com/axios/axios)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [Redux-Toolkit](https://redux-toolkit.js.org/)
-  [Redux-Persist](https://github.com/rt2zz/redux-persist)
-  [Solidarity](https://infinitered.github.io/solidarity/)
-  [React-Navigation](https://reactnavigation.org/)
-  [React-Hook-Form](https://react-hook-form.com/)

## 📥   Instalação e execução

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone git@github.com:marcelobarbosaO/pokedex.git && cd pokedex
```

```bash
# Instalando as dependências
$ yarn

# Executanto aplicação
$ yarn start

# Instalação dos pods
$ cd ios && pod install && cd ..

```

```bash
  # Na tela de login use essas credencias para login com sucesso.
  email = eve.holt@reqres.in
  password = cityslicka
```
