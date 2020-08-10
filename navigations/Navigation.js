import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

//Stacks
import SearchStack from "../navigations/SearchStack";
import RegionsStack from "../navigations/RegionsStack";
import FavoritesStack from "../navigations/FavoritesStack";
import GalleryStack from "../navigations/GalleryStack";
import Login from "../components/Login";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "search") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "regions") {
              iconName = focused ? "map" : "map";
            } else if (route.name === "favs") {
              iconName = focused ? "favorite" : "favorite";
            } else if (route.name === "gallery") {
              iconName = focused ? "photo-album" : "photo-album";
            } else if (route.name === "login") {
              iconName = focused ? "account-box" : "account-box";

            }
            

            // You can return any component that you like here!
            return <Icon type="material" name={iconName} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="regions"
          component={RegionsStack}
          options={{ title: "Regiones" }}
        />
        <Tab.Screen
          name="favs"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="gallery"
          component={GalleryStack}
          options={{ title: "Galería" }}
        />
        <Tab.Screen
          name="login"
          component={Login}
          options={{ title: "Login" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
