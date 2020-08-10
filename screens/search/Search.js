import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, ActivityIndicator, Image } from "react-native";
import { SearchBar, Card } from "react-native-elements";
import axios from "axios";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [timer, settimer] = useState(false);
  const [data, setdata] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + search)
      .then((res) => setdata(res.data))
      .catch((err) => console.error(err));
  }, [timer]);

  const handleSearch = (search) => {
    setSearch(search);
    setTimeout(() => {
      settimer(search);
      setisLoading(false);
    }, 2000);
  };

  const Pokemon = (props) => {
    const { name, height, base_experience, weight, id } = props.props;
    const pokeImg =
      "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
    return (
      <Card title="Your Pokemon">
        <Image source={{ uri: pokeImg }} style={{ width: 200, height: 200, margin: "auto" }} />
        <Text>ID: {id}</Text>
        <Text>Nombre: {name}</Text>
        <Text>Altura: {height}</Text>
        <Text>Peso: {weight}</Text>
        <Text>Experiencia base: {base_experience}</Text>
      </Card>
    );
  };
  return (
    <View>
      <SearchBar
        placeholder="Type to find"
        onChangeText={handleSearch}
        value={search}
        lightTheme
        round
      />
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Aun nada</Text>  : <Pokemon props={data} />}
      </View>
    </View>
  );
}
