import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>CineApp</Text>

      <Text style={styles.subtitulo}>Seu próximo filme começa aqui.</Text>

      <Text style={styles.descricao}>
        Explore nosso catálogo, conheça os filmes e marque seus favoritos.
      </Text>

      <View style={styles.areaBotao}>
        <Botao
          texto="Explorar catálogo"
          onPress={() => router.push("/catalogo")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 24,
    marginBottom: 24,
    resizeMode: "contain",
  },
  titulo: {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#fca5a5",
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
  },
  descricao: {
    color: "#d1d5db",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 20,
  },
  areaBotao: {
    width: "100%",
    maxWidth: 400,
    marginTop: 32,
  },
});
