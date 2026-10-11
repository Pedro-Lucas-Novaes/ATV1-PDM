import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#111827" },
        headerTintColor: "#ffffff",
        contentStyle: { backgroundColor: "#111827" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="catalogo" options={{ title: "Catálogo" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes do filme" }} />
      <Stack.Screen name="sobre" options={{ title: "Sobre o CineApp" }} />
    </Stack>
  );
}
