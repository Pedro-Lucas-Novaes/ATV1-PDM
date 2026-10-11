import { router } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import Botao from "../components/Botao";

export default function Sobre() {
  function voltar() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/catalogo");
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.titulo}>CineApp</Text>
      <Text style={styles.versao}>Versão 1.0.0</Text>

      <Text style={styles.texto}>
        Aplicativo desenvolvido para explorar um catálogo de filmes, visualizar
        detalhes e marcar filmes como favoritos.
      </Text>

      <Text style={styles.rotulo}>Disciplina</Text>
      <Text style={styles.texto}>Programação para Dispositivos Móveis I</Text>

      <Text style={styles.rotulo}>Desenvolvido por</Text>
      <Text style={styles.texto}>Pedro Lucas de Novaes Dutra</Text>

      <Text style={styles.rotulo}>Tecnologias</Text>
      <Text style={styles.texto}>
        React Native, Expo, TypeScript e Expo Router.
      </Text>

      <Botao texto="Voltar ao catálogo" onPress={voltar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  conteudo: {
    padding: 24,
    paddingBottom: 40,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "bold",
  },
  versao: {
    color: "#fca5a5",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  rotulo: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 8,
  },
  texto: {
    color: "#d1d5db",
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 24,
  },
});
