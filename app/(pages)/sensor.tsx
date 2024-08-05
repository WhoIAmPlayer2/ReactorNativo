import { Stack } from "expo-router";
import { View } from "react-native";
import { Sensors } from "../components/Sensors";
import { GyroscopeComponent } from "../components/Gyroscope";
import GlobalStyles from "@/constants/GlobalStyles";
import { LightSensorComponent } from "../components/LightSensor";

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
      <GyroscopeComponent />
      <LightSensorComponent />
  </View>
  );
}

