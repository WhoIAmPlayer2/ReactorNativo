import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,Image, TouchableHighlight, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";
import GlobalStyles from '@/constants/GlobalStyles';
import MapView, { Marker, Polyline } from 'react-native-maps';

import img1 from '@/assets/images/school-img.png';
import img2 from '@/assets/images/house-img.png';

export const MapComponent=() =>{
  const imageURL = ''
  const [location, setLocation] = useState<LocationObject | null>();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(()=>{
    (async()=>{
      let {status} =await Location.requestForegroundPermissionsAsync();
      if (status!=='granted'){
        setErrorMsg("El permiso a la ubicación de acceso fue denegado");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  },[]);

  let text = 'Waiting..';
  text=errorMsg ? errorMsg : JSON.stringify(location);
  
  const mapRegion= {
    latitude: location?.coords.latitude ?? 37.7825,
    longitude: location?.coords.longitude ?? -122.4324,
    latitudeDelta: 0.04,
    longitudeDelta: -0.05,
    // casa
    // 25.722617034124728, -100.17299509056434
  };
  const mapRegion2={
    latitude:   25.800690770545962,
    longitude: -100.13549855987661,
    latitudeDelta: 0.04,
    longitudeDelta: -0.05,
  }

  console.log(mapRegion);

  console.log(text);

  return (
    <View >
      <Text style={GlobalStyles.title}>Ubicación</Text>
      <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Origen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.depositButton]}>
              <Text style={styles.buttonText}>Destino</Text>
            </TouchableOpacity>
          </View>
      <MapView region={mapRegion} style={styles.map}>
        <Marker coordinate={mapRegion} title='Casa' image={img2}/>
        <Marker coordinate={mapRegion2} title='Escuela' image={img1}/>
        <Polyline coordinates={[mapRegion,mapRegion2]} strokeColor='rgb(255,0,0)'></Polyline>
        
      </MapView>

    </View>
  );
};

const styles= StyleSheet.create({
  map:{
    width:"100%",
    height:600,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:10,
  },
  button: {
    backgroundColor: "#06F",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
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
    backgroundColor: "#F55",
  },
});