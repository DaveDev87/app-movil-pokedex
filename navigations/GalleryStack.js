import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gallery from "../screens/gallery/Gallery";
import infoGallery from "../screens/gallery/infoGallery";

const Stack = createStackNavigator();
export default function GalleryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="gallery"
        component={Gallery}
        options={{ title: "Galeria" }}
      />
      <Stack.Screen
        name="infogallery"
        component={infoGallery}
        options={{ title: "Sprites" }}
      />
    </Stack.Navigator>
  );
}