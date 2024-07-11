import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-root-toast";
import { RootSiblingParent } from "react-native-root-siblings";

export const Balance = () => {
  const [showBalance, setShowBalance] = useState(false);
  
  const toggleShow = (state: boolean) => {
    setShowBalance(!state);
    let msg: string = "Balance oculto";
    if (!state) {
      msg = "Mostrando balance";
    }
    // Add a Toast on screen.
    Toast.show(msg, {
      duration: Toast.durations.SHORT,
    });
  };
  return (
    <RootSiblingParent>
      <View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Monedero</Text>
          {showBalance ? (
            <Text style={styles.balanceText}>$5, 100.00</Text>
          ) : (
            <View style={styles.balanceTextSkeleton}>
              {Array(5)
                .fill(null)
                .map((_, _i) => (
                  <View
                    key={`${_i}-dot`}
                    style={styles.balanceTextSkeletonDot}
                  ></View>
                ))}
            </View>
          )}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Retiro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.depositButton]}>
              <Text style={styles.buttonText}>Deposito</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{justifyContent: "center", alignItems: "center", marginTop:100 }}
        >
          <TouchableOpacity
            style={styles.fingerprintButton}
            onPress={() => toggleShow(showBalance)}
          >
            <View>
              <Ionicons name="finger-print" size={64} />
            </View>
          </TouchableOpacity>
          <Text>Mostrar balance</Text>
        </View>
      </View>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: "#9090FF",
    padding: 20,
    borderRadius: 10,
  },
  balanceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FFF",
  },
  balanceText: {
    fontSize: 54,
    textAlign:"center",
    fontWeight:"bold",
    color: "#EEE",
  },
  balanceTextSkeleton: {
    fontSize: 50,
    width: "100%",
    height: 50,
    flexDirection: "row", // Arrange dots horizontally
    justifyContent: "space-around", // Distribute dots evenly
    alignItems: "center",
    marginVertical: 5,
    color:"red"
  },

  balanceTextSkeletonDot: {
    width: 40, // Dot width
    height: 40, // Dot height
    borderRadius: 50, // Round corners for circular dots
    backgroundColor: "#202020", // Light gray for dots
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4AF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight:"bold",
    fontSize: 14,
    textAlign: "center",
  },
  depositButton: {
    backgroundColor: "#4F9",
  },
  fingerprintButton: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderBlockColor: "black",
    borderWidth: 2,
  },
});