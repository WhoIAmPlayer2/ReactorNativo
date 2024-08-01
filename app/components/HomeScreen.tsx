import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  name?: string;
}

export const HomeScreen = ({ name }: Props) => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Inicio",
        }}
      />
      <Text style={GlobalStyles.title}>Bienvenido, {name ?? "spartan"}.</Text>
    </View>
  );
};
