import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { ListItem } from "react-native-elements";

export default function Favs() {
  const [datos, setdatos] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/berry/")
      .then((res) => setdatos(...datos, res.data.results))
      .catch((err) => console.error(err));
  }, []);
  const navigation = useNavigation();
  return (
    <ScrollView>
      {datos.map((item, i) => (
        <ListItem
          title={item.name}
          bottomDivider
          chevron
          onPress={() => navigation.navigate("infofavs", item)}
        />
      ))}
    </ScrollView>
  );
}
