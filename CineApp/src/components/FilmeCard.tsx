import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { ImageSourcePropType } from "react-native";

type FilmeCardProps = {
  titulo: string;
  genero: string;
  ano: number;
  imagem: ImageSourcePropType;
  favorito: boolean;
  onDetalhes: () => void;
  onFavoritar: () => void;
};

export default function FilmeCard({
  titulo,
  genero,
  ano,
  imagem,
  favorito,
  onDetalhes,
  onFavoritar,
}: FilmeCardProps) {
  return (
    <View style={styles.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Ver detalhes de ${titulo}`}
        onPress={onDetalhes}
        style={({ pressed }) => [
          styles.conteudo,
          pressed && styles.pressionado,
        ]}
      >
        <Image source={imagem} style={styles.imagem} />

        <View style={styles.informacoes}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.texto}>{genero}</Text>
          <Text style={styles.texto}>{ano}</Text>
          <Text style={styles.detalhes}>Ver detalhes →</Text>
        </View>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={
          favorito
            ? `Remover ${titulo} dos favoritos`
            : `Favoritar ${titulo}`
        }
        onPress={onFavoritar}
        style={({ pressed }) => [
          styles.botaoFavorito,
          favorito && styles.favoritado,
          pressed && styles.pressionado,
        ]}
      >
        <Text style={styles.textoFavorito}>
          {favorito ? "★ Favorito" : "☆ Favoritar"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1f2937",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  conteudo: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    width: 90,
    height: 135,
    borderRadius: 8,
    resizeMode: "cover",
  },
  informacoes: {
    flex: 1,
    marginLeft: 16,
  },
  titulo: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 8,
  },
  texto: {
    color: "#d1d5db",
    fontSize: 14,
    marginBottom: 4,
  },
  detalhes: {
    color: "#fca5a5",
    marginTop: 10,
  },
  botaoFavorito: {
    backgroundColor: "#374151",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginTop: 14,
  },
  favoritado: {
    backgroundColor: "#92400e",
  },
  textoFavorito: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressionado: {
    opacity: 0.65,
  },
});