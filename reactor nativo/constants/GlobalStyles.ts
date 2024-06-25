import { StyleSheet } from "react-native";

export default StyleSheet.create({
    indexcontainer: {
        backgroundColor: "#f0f0f0", // Light background color
        padding: 20, // Add some padding for visual spacing
      },
      countercounterText: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign:"center",
      },
      counterbuttonscontainers:{
        justifyContent:"center",
        gap:100,
        flexDirection:"row"
      },
      counterBtn: {
        fontWeight: "bold",
        backgroundColor: "#000",
        paddingVertical: 5,
        color:"white",
        fontSize:22,
        paddingHorizontal: 20,
        borderColor:"#0f0f0f",
        borderWidth:1,
        borderRadius:5
      },
      counterNum:{
        fontSize:108,
        textAlign:"center"
      },
      hscontainer: {
        flex: 1, // Allow container to fill the entire screen
      },
      hsheader: {
        flexDirection: "row", // Arrange elements horizontally
        justifyContent: "space-between", // Distribute evenly
        alignItems: "center", // Align vertically in center
        marginBottom: 20, // Add some margin below the header
      },
      hsheaderTitle: {
        fontSize: 20, // Set title font size
        fontWeight: "bold", // Make title bold
        marginBottom:20
      },
      MenuheaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
      },
      Menulink: {
        fontSize: 18,
        color: '#1e90ff',
        marginBottom: 10,
        textDecorationLine: 'underline',
        textAlign: 'center',
      },
      sensorContainer:{
        margin:"auto",
        alignContent:"center",
        textAlign:"center",
        padding:30,
        backgroundColor:"#444",
        borderWidth:2,
        borderColor:"white",
        borderRadius:5
      },
      sensorText: {
        color:"white"
      }

});