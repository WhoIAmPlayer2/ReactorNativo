import { ImageComponent, View, StyleSheet } from "react-native";
import { HomeScreen } from "./components/HomeScreen";
import { Counter } from "./components/Counter";
import GlobalStyles from "@/constants/GlobalStyles";
import { PicDeck } from "./components/PicDeck";
import { Menu } from "./components/Menu";
export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <HomeScreen />
      <Menu />
      {/* <PicDeck />  */}
      <Counter />
    </View>
  );
}
