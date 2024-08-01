import { Ionicons } from "@expo/vector-icons";
import { RootSiblingParent } from "react-native-root-siblings";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Toast from "react-native-root-toast";
import * as LocalAuthentication from "expo-local-authentication";

export const Balance = () => {
  const [showBalance, setShowBalance] = useState(false);

  const onToggle = async () => {
    // Log whether balance is shown or hidden
    console.log({ showBalance });

    // Check if device has biometric auth hardware
    let hasHW = await LocalAuthentication.hasHardwareAsync();
    console.log({ hasHW });

    // Check for auth type
    let authType =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log({ authType });
    let msg: string = "Auth error";
    if (!showBalance) {
      const { success } = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to show your balance",
      });
      console.log({ success });
      if (success) {
        msg = "Showing balance";
        setShowBalance(!showBalance);
      }
    } else if (showBalance) {
      // Toggle balance
      // Msg for when the balance is hidden
      msg = "Balance hidden";
      setShowBalance(!showBalance);
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
          <Text style={styles.balanceTitle}>Wallet</Text>
          {showBalance ? (
            <Text style={styles.balanceText}>$5, 999.99</Text>
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
        <View
          style={{justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.fingerprintButton}
            onPress={() => onToggle()}
          >
            <View>
              <Ionicons
                name={showBalance ? "lock-open" : "finger-print"}
                size={64}
              />
            </View>
          </TouchableOpacity>
          <Text>{showBalance ? "Hide" : "Show"} balance</Text>
        </View>
      </View>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: "#dedeff",
    padding: 20,
    borderRadius: 10,
    marginBottom:250
  },
  balanceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#333",
  },
  balanceText: {
    fontSize: 40,
    textAlign:"center",
    fontWeight:"bold",
    color: "#333",
  },
  balanceTextSkeleton: {
    fontSize: 40,
    width: "100%",
    height: 50,
    flexDirection: "row", // Arrange dots horizontally
    justifyContent: "space-around", // Distribute dots evenly
    alignItems: "center",
    marginVertical: 5,
    color:"333"
  },

  balanceTextSkeletonDot: {
    width: 40, // Dot width
    height: 40, // Dot height
    borderRadius: 50, // Round corners for circular dots
    backgroundColor: "#fff", // Light gray for dots
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#06F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight:"bold",
    fontSize: 14,
    textAlign: "center",
  },
  depositButton: {
    backgroundColor: "#0D6",
  },
  fingerprintButton: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderBlockColor: "black",
    borderWidth: 2,
  },
});