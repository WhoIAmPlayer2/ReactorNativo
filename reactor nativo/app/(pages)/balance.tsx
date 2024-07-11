import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Balance } from "../components/Balance";
import GlobalStyles from "@/constants/GlobalStyles";

export default function About() {
  return (
    <View style={GlobalStyles.container}>
        <Stack.Screen
        options={{
          title: "Balance",
          headerStyle: {
            backgroundColor: '#A0A0F0'
          }
        }}
      />
      <Balance />
  </View>
  );
}
