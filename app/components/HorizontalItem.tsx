import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface Props {
  links: Link[];
}

interface Link {
  name: string;
  path: string;
}

export const HorizontalItems = ({ links }: Props) => {
  return (
    <ScrollView horizontal={true}>
      {links.map((link, _i) => (
        <Link key={`${_i}${link.name}`} href={link.path} style={styles.link}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{link.name}</Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  link: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#efefff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 10,    
  },
  buttonText: {
    color: "#333", // Bright Dracula accent color
    fontSize: 16,
    fontWeight: "bold",
    
  },
});