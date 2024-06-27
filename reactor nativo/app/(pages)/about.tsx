import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen
        options={{
          title: "About",
        }}
      />
    <Text style={GlobalStyles.title}>Acerca de</Text>
    <Text style={GlobalStyles.text}>
      Soy una empresa con 300 años de experiencia en el desarrollo movil.
    </Text>
    <Text style={GlobalStyles.text}>
      ¡Cómprame!
    </Text>
  </View>
  );
}