import GlobalStyles from "@/constants/GlobalStyles";
import { View, Text} from "react-native";
import { HorizontalItems } from "./HorizontalItem";

interface Link {
  name: string;
  path: string;
}

export const Menu = () => {
  const menuLinks: Link[] = [
    { name: "Sensors", path: "/(pages)/sensors" },
    { name: "Balance", path: "/(pages)/balance" },
    { name: "Contact", path: "/(pages)/contact" },
    { name: "About", path: "/(pages)/about" },
    { name: "Location", path: "/(pages)/location" },
  ];
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Explora la app</Text>
      <HorizontalItems links={menuLinks} />
    </View>
  );
};