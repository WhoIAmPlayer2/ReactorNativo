import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Sensors } from "../components/Sensors";
import GlobalStyles from "@/constants/GlobalStyles";

export default function About() {
  return (
    <View style={GlobalStyles.container}>
        <Stack.Screen
        options={{
          title: "Sensor",
        }}
      />
      <Sensors />
  </View>
  );
}

