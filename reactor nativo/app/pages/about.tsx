import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "About",
        }}
      />
    <Text style={styles.title}>Acerca de</Text>
    <Text style={styles.description}>
      Soy una empresa con 300 años de experiencia en el desarrollo movil.
    </Text>
    <Text style={styles.description}>
      ¡Cómprame!
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 10,
  },
});
