import React from 'react';
import {Image, Text, View, StyleSheet } from "react-native";


export const PicDeck = () => {
  return (
    <View>
        <Text style={styles.image}>

            <Image source={require('../../assets/images/halo-logo.png')} style={{
            
            
            }}/>
        </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 400,  // ajusta el ancho según tu necesidad
    height: 650, // ajusta la altura según tu necesidad
    resizeMode: 'center', // ajusta el modo de redimensionamiento según tu necesidad
    marginTop:-230,
    marginLeft:40,
    position:"relative"
  },
});
