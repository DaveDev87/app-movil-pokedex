import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favs from "../screens/favs/Favs";
import infoFavs from "../screens/favs/infoFavs";

const Stack = createStackNavigator();
export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favs"
        component={Favs}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="infofavs"
        component={infoFavs}
        options={{ title: "Detalles" }}
      />
    </Stack.Navigator>
  );
}