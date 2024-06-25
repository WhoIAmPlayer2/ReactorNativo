import { ScrollView, StyleSheet, View } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import { Nombre } from "./components/Nombre";
import { Edad } from "./components/Edad";
import { Sensors } from "./components/Sensors";
import GlobalStyles from "@/constants/GlobalStyles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={GlobalStyles.indexcontainer}>
      {/* Opcionalmente pasar prop "name" */}
      <HomeScreen />
      <Counter />
      {/* <View>
          <Nombre />
          <Edad />
      </View> */}
      <Sensors />
    </ScrollView>
  );
}
