import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Regions from "../screens/regions/Regions";
import infoRegions from "../screens/regions/infoRegions";

const Stack = createStackNavigator();
export default function RegionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="regions"
        component={Regions}
        options={{ title: "Regiones" }}
      />
      <Stack.Screen
        name="inforegions"
        component={infoRegions}
        options={{ title: "Locaciones" }}
      />
    </Stack.Navigator>
  );
}