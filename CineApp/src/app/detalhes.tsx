import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import Botao from "../components/Botao";
import { filmes } from "../data/filmes";

export default function Detalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const filme = filmes.find((item) => item.id === id);

  function voltar() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/catalogo");
    }
  }

  if (!filme) {
    return (
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.titulo}>Filme não encontrado</Text>
        <Botao texto="Voltar ao catálogo" onPress={voltar} />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <Image source={filme.imagem} style={styles.imagem} />

      <Text style={styles.titulo}>{filme.titulo}</Text>

      <Text style={styles.informacoes}>
        {filme.genero} • {filme.ano}
      </Text>

      <Text style={styles.rotulo}>Sinopse</Text>
      <Text style={styles.sinopse}>{filme.sinopse}</Text>

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
  imagem: {
    width: 220,
    height: 330,
    alignSelf: "center",
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 24,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  informacoes: {
    color: "#fca5a5",
    fontSize: 16,
    marginBottom: 24,
  },
  rotulo: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sinopse: {
    color: "#d1d5db",
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 32,
  },
});