import { ImageComponent, ScrollView, StyleSheet, View } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import GlobalStyles from "@/constants/GlobalStyles";
import { PicDeck } from "./components/PicDeck";
export default function Index() {
  return (
    <ScrollView style={GlobalStyles.container}>
      <HomeScreen />
      <PicDeck /> 
      <Counter />
    </ScrollView>
  );
}
