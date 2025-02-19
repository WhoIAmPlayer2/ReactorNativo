import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function contact() {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen
        options={{
          title: "Contacto",
          headerStyle: {
            backgroundColor: '#A0FFA0'
          }
        }}
      />
      <Text style={GlobalStyles.title}>Información de Contacto</Text>
      <Text style={GlobalStyles.text}>Nombre: Miguel Angel Cruz Castillo</Text>
      <Text style={GlobalStyles.text}>Teléfono: 8122538191</Text>
      <Text style={GlobalStyles.text}>Email: mickyangelamgel@gmail.com</Text>
    </View>
  );
};