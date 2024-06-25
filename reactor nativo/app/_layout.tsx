import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'overview',
          }}
      />
      <Drawer.Screen
          name="pages/contact" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contacto',
            title: 'overview',
          }}
        />
      <Drawer.Screen
          name="pages/about" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Acerca de',
            title: 'overview',
          }}
        />    
        <Drawer.Screen
          name="pages/location" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Ubicación',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
