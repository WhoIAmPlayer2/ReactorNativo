import { Text, View, StyleSheet } from "react-native";
import { Accelerometer } from "expo-sensors";
import { useEffect, useState } from "react";
import GlobalStyles from "@/constants/GlobalStyles";

export const Sensors = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });
    Accelerometer.setUpdateInterval(1000);
    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  return (
      <View style={GlobalStyles.sensorContainer}>
        <Text style={GlobalStyles.sensorText}>Sensores</Text>
        <Text style={GlobalStyles.sensorText}>X: {data.x}</Text>
        <Text style={GlobalStyles.sensorText}>Y: {data.y}</Text>
        <Text style={GlobalStyles.sensorText}>Z: {data.z}</Text>
      </View>
  );
};
