# CineApp — Catálogo de Filmes

## Identificação

- Nome: Pedro Lucas de Novaes Dutra
- RA: 2991392513038
- Disciplina: Programação para Dispositivos Móveis 

## Descrição

Aplicativo desenvolvido com React Native, Expo e TypeScript.
Permite explorar um catálogo de seis filmes, visualizar seus
detalhes e marcar ou desmarcar favoritos.

## Funcionalidades

- Tela inicial com nome, imagem e descrição do aplicativo.
- Catálogo com título, imagem, gênero e ano de cada filme.
- Sistema de favoritos com atualização visual e contador.
- Tela de detalhes com sinopse.
- Tela Sobre com informações do aplicativo.
- Navegação entre telas com Expo Router.
- Botões com alteração visual durante o pressionamento.

Os favoritos ficam na memória durante o uso da tela de catálogo.
Não são salvos após fechar o aplicativo.

## Tecnologias e conceitos utilizados

- React Native e Expo.
- TypeScript e Expo Router.
- View, Text, Image e ScrollView.
- StyleSheet e Flexbox.
- Pressable.
- useState e useEffect.
- Componentes reutilizáveis e Props.

## Componentes reutilizáveis

- Botao: recebe texto e onPress.
- FilmeCard: recebe titulo, genero, ano, imagem, favorito,
  onDetalhes e onFavoritar.

## Como executar

É necessário ter Node.js e npm instalados.

Abra o terminal na pasta do projeto e instale as dependências:

```bash
npm install
```

Inicie o aplicativo:

```bash
npx expo start
```

Leia o QR Code com o Expo Go no celular.
O celular e o computador devem estar na mesma rede Wi-Fi.

Para testar no navegador, pressione w no terminal.

## Organização

- src/app: telas e configuração de navegação.
- src/components: componentes reutilizáveis.
- src/data: informações dos filmes.
- assets/images: imagens utilizadas pelo aplicativo.

## Versão

1.0.0
