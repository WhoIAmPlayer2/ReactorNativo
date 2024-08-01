import GlobalStyles from "@/constants/GlobalStyles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { MapComponent} from "../components/MapComponent";
export default function location() {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Screen
        options={{
          title: "Ubicación",
          headerStyle: {
            backgroundColor: '#FFB', // Cambia esto al color que desees
          },
        }}
      />
      <MapComponent />
    </View>
  );
}
