import React, { useEffect, useState } from "react";
import { ScrollView, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";

export default function infoGallery(props) {
    const [datos, setdatos] = useState("")

  useEffect(() => {
    axios
      .get(props.route.params.url)
      .then((res) => setdatos(res.data))
      .catch((error) => console.error(error));
  }, []);

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
    <ScrollView>
      <Pokemon props={datos}/>
    </ScrollView>
  );
}
