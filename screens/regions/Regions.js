import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, ActivityIndicator, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

export default function Regions() {
  const navigation = useNavigation();
  const [datos, setDatos] = useState([
    {
      name: "kanto",
      url: "https://pokeapi.co/api/v2/region/1/",
    },
    {
      name: "johto",
      url: "https://pokeapi.co/api/v2/region/2/",
    },
    {
      name: "hoenn",
      url: "https://pokeapi.co/api/v2/region/3/",
    },
    {
      name: "sinnoh",
      url: "https://pokeapi.co/api/v2/region/4/",
    },
    {
      name: "unova",
      url: "https://pokeapi.co/api/v2/region/5/",
    },
    {
      name: "kalos",
      url: "https://pokeapi.co/api/v2/region/6/",
    },
    {
      name: "alola",
      url: "https://pokeapi.co/api/v2/region/7/",
    },
  ]);
  const [isLoading, setisLoading] = useState(false);

  const renderItem = ({ item }, i) => {
    return (
      <ListItem
        title={item.name}
        bottomDivider
        chevron
        key={item.name}
        onPress={() => navigation.navigate("inforegions", item)}
      />
    );
  };
  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={datos}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </ScrollView>
  );
}
