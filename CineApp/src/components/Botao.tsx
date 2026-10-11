import { Pressable, StyleSheet, Text } from "react-native";

type BotaoProps = {
  texto: string;
  onPress: () => void;
};

export default function Botao({ texto, onPress }: BotaoProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        pressed && styles.pressionado,
      ]}
    >
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#dc2626",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  pressionado: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  texto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});