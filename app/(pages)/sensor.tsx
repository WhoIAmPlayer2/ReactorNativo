import { Stack } from "expo-router";
import { View } from "react-native";
import { Sensors } from "../components/Sensors";
import GlobalStyles from "@/constants/GlobalStyles";

export default function sensor() {
  return (
    <View style={GlobalStyles.container}>
        <Stack.Screen
        options={{
          title: "Sensor",
          headerStyle: {
            backgroundColor: '#F0A030'
          }
          
        }}
      />
      <Sensors />
  </View>
  );
}

