import GlobalStyles from "@/constants/GlobalStyles";
import { View, Text} from "react-native";
import { HorizontalItems } from "./HorizontalItem";

interface Link {
  name: string;
  path: string;
}

export const Menu = () => {
  const menuLinks: Link[] = [
    { name: "Sensor", path: "/(pages)/sensor" },
    { name: "Balance", path: "/(pages)/balance" },
    { name: "Contacto", path: "/(pages)/contact" },
    { name: "Acerca de", path: "/(pages)/about" },
    { name: "Ubicación", path: "/(pages)/location" },
  ];
  return (
    <View>
      <Text style={{ textAlign:'center',marginBottom:20,fontSize:15}}>Explora la app</Text>
      <HorizontalItems links={menuLinks} />
    </View>
  );
};