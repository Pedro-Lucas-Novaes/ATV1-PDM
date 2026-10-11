import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Botao from "../components/Botao";
import FilmeCard from "../components/FilmeCard";
import { filmes } from "../data/filmes";

export default function Catalogo() {
  const [favoritos, setFavoritos] = useState<string[]>([]);

  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  function alternarFavorito(id: string) {
    setFavoritos((atuais) => {
      if (atuais.includes(id)) {
        return atuais.filter((favoritoId) => favoritoId !== id);
      }

      return [...atuais, id];
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      <Text style={styles.titulo}>Escolha seu filme</Text>

      <Text style={styles.subtitulo}>
        {filmes.length} filmes • {favoritos.length} favoritos
      </Text>

      <View style={styles.areaBotao}>
        <Botao
          texto="Sobre o aplicativo"
          onPress={() => router.push("/sobre")}
        />
      </View>

      {filmes.map((filme) => (
        <FilmeCard
          key={filme.id}
          titulo={filme.titulo}
          genero={filme.genero}
          ano={filme.ano}
          imagem={filme.imagem}
          favorito={favoritos.includes(filme.id)}
          onFavoritar={() => alternarFavorito(filme.id)}
          onDetalhes={() =>
            router.push({
              pathname: "/detalhes",
              params: { id: filme.id },
            })
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#9ca3af",
    fontSize: 15,
    marginTop: 8,
  },
  areaBotao: {
    marginVertical: 20,
  },
});