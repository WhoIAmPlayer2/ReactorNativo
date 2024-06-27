import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  text:{
    fontSize:15,
    color:"#444"
  },
  counterbuttonscontainers:{
    justifyContent:"center",
        gap:100,
        flexDirection:"row"
  },
  counterBtn: {
    fontWeight: "bold",
    backgroundColor: "#222",
    paddingVertical: 5,
    color:"white",
    fontSize:22,
    paddingHorizontal: 20,
    borderRadius:10
  },
  counterNum:{
    fontSize:108,
    textAlign:"center"
  },
  Menulink: {
    fontSize: 18,
    color: '#1e90ff',
    marginBottom: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
 },
});