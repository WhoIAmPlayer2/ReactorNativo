import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Location() {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen
        options={{
          title: "Ubicación",
        }}
      />
      <Text style={GlobalStyles.title}>Ubicación</Text>
    </View>
  );
}
