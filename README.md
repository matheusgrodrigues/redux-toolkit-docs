# redux-toolkit-docs

Leitura da documentação do Redux Toolkit

- [Começando](#comecando)
  - [Instalação](#instalacao)
  - [APIs inclusas](#apis-inclusas)
  - [RTK Query](#rtk-query)
    - [APIs inclusas](#rtk-apis-inclusas)

## Comecando

- Redux toolkit pretende ser a maneira padrão de escrever a Lógica Redux.
- Foi originalmente criado para ajudar a resolves três preocupações comuns do Redux.
  - "Configurar uma Store Redux é muito complicado"
  - "Eu tenho que adicionar muitos pacotes para que o Redux fala algo útil"
  - "O Redux requer muito código clichê"
- Não podemos resolver todos os casos de uso, msa no espírito do create-react-app, podemos tentar fornecer algumas ferramentas que abstraem o processo de configuração e tratam dos casos de uso mais comuns, além de incluir alguns utilitários úteis que permitirão ao usuário simplificar o código de sua aplicação.
- O Redux Toolkit também inclui um poderoso recurso de busca e armazenamento de dados que chamamos de [RTK Query](https://redux-toolkit.js.org/introduction/getting-started#rtk-query). Está incluído no pacote como um conjunto separado de pontos de entrada. É opcional, mas pode eliminar a necessidade de escrever manualmente a lógica de dados.

### Instalacao

- A maneira recomendada de iniciar novos aplicativos React e Redux é usando o [Modelo oficial Redux+JS](https://github.com/reduxjs/cra-template-redux) ou [Redux+TS](https://github.com/reduxjs/cra-template-redux-typescript) para create-react-app, que aproveita a integração do Redux Toolkit e do React Redux com components React.
- O Redux Tookit está disponível como um pacote no NPM para uso com um empacotador de módulos ou em um aplicativo Node:

> yarn add @reduxjs/toolkit

> npm install @reduxjs/toolkit

- Também está disponivel como um pacote UMD pré-compilado que define uma variavel global window.RTK. O pacote UMD pode ser usado como um `<script></script>` diretamente.

### APIs inclusas

- O Redux Toolkit inclui estas APIs:
  - **configureStore()**: wraps createStore para fornecer opções de configuração simplificadas e bons padrôes.
    - Ele pode combinar automaticamente seus reducers de slice, adicionar qualquer middleware Redux que você fornecer, incluir redux-thunk por padrão, e permite o uso da Extensão Redux DevTools.
- **createReducer()**: que permite fornecer uma tabela de pesquisa de tipos de ação para funções de reducers de maiúsculas e minúsculas, em vez de escrever instruções switch. Além disso, ele usa automaticamente o immer mutativo normal, como `state.todos[3].completed = true`
- **createAction()**: gera uma função de createAction para a string de tipo de ação fornecida. A função em si tem toString() definido, para que possa saer usado no lugar da constante de tipo.
- **createSlice()**: aceita um objeto de funções reducers, um nome de slice e um valor de estado inicial e gera automaticamente um reducer de slice com createActions e tipos de ação correspondentes.
- **createAsyncThunk:** aceita uma string de tipo de ação e uma função que retorna uma promisse e gera uma conversão que despacha `pendind/fullied/rejected` tipos de ação com base nessa promisse.
- **createEntityAdapter:** gera um conjunto de reducers e selectors reutilizáveis para gerenciar dados normalizados na loja.
- o helper createSelector da Reselect, reescrito para facilidade de uso.

### RTK Query

- Construído sobre o núcleo do Redux Toolkit para sua implementação, usando Redux internamente para sua arquitetura.
- RTK Query é fornecido como um complemento opcional dentro do @reduxjs/toolkit.
- Desenvolvido especificamente para resolver o caso de uso de busca e armazenamento em cache de dados, fornecendo um conjunto de ferramentas compacto, mas poderoso, para definir uma camada de interface de API para seu aplicativo.
- Destina-se a simplificar casos comuns de carregamento de dados em um aplicativo da Web, eliminando a necessidade de escrever manualmente a lógica de busca e armazenamento de dados em cache.
- O RTK Query está incluido na instalação do pacote principal do Redux Toolkit. Está disponível através de um dos dois pontos de entrada abaixo:
  > import {createApi} from "@reduxjs/toolkit/query

> import {createApi} from "@reduxjs/toolkit/query/react

#### RTK APIs inclusas

- **createApi()**: O núcleo da funcionalidade do RTK Query. Ele permite que você defina um conjunto de endpoints que descreva como recuperar dados de uma série de endpoints, incluindo a configuração de como buscar e transformar dados.
- **fetchBaseQuery()**: Um pequeno wrapper de fetch que visa simplificar os pedidos de busca de dados.
- **`<ApiProvider />`**: Pode ser usado como Provider se você ainda não tiver uma store Redux.
- **setupListeners()**: Um utilitário usado para habilitar comportamentos refetchOnMount e refetchOnreconnect.
