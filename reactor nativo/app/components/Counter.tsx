import GlobalStyles from "@/constants/GlobalStyles";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <View>
      <Text style={GlobalStyles.countercounterText}>Contador:</Text>
      <Text style={GlobalStyles.counterNum}> { count } </Text>
      <View style={GlobalStyles.counterbuttonscontainers}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={GlobalStyles.counterBtn}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleIncrement}>
          <Text style={GlobalStyles.counterBtn}>+</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

