import { Ionicons } from "@expo/vector-icons";
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DrawerLayout=()=> {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'overview',
            drawerIcon:({size,color}) => (
              <Ionicons name="home-outline" size={size} color={"black"}/>
            )
          }}
      />
      <Drawer.Screen
          name="(pages)/sensor" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Sensor',
            title: 'overview',
            drawerIcon:({size,color}) => (
              <Ionicons name="analytics-outline" size={size} color={"black"}/>
            )
          }}
      />
            <Drawer.Screen
          name="(pages)/balance" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Balance',
            title: 'overview',
            drawerIcon:({size,color}) => (
              <Ionicons name="cash-outline" size={size} color={"black"}/>
            )
          }}
        />
      <Drawer.Screen
          name="(pages)/contact" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contacto',
            title: 'overview',
            drawerIcon:({size,color}) => (
              <Ionicons name="person-outline" size={size} color={"black"}/>
            )
          }}
        />

      <Drawer.Screen
          name="(pages)/about" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Acerca de',
            title: 'overview',
            drawerIcon:({size,color}) => (
              <Ionicons name="help-circle-outline" size={size} color={"black"}/>
            )

          }}
        />    
        <Drawer.Screen
          name="(pages)/location" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Ubicación',
            title: 'overview',
            drawerIcon:({size,color}) => (
              <Ionicons name="compass-outline" size={size} color={"black"}/>
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;