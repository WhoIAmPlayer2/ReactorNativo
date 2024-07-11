import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Location() {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen
        options={{
          title: "Ubicación",
          headerStyle: {
            backgroundColor: '#FF6', // Cambia esto al color que desees
          },
        }}
      />
      <Text style={GlobalStyles.title}>Ubicación</Text>
    </View>
  );
}
