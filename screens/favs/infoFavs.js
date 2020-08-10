import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";

export default function infoFavs(props) {
  const [datos, setdatos] = useState([]);

  useEffect(() => {
    axios
      .get(props.route.params.url)
      .then((res) => setdatos(...datos, res.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ScrollView>
      <Card title={datos.name}>
        <Text>Cosecha máxima: {datos.max_harvest}</Text>
        <Text>Tamaño: {datos.size}</Text>
        <Text>Suavidad: {datos.smoothness}</Text>
        <Text>Tiempo de crecimiento: {datos.growth_time}</Text>

      </Card>
    </ScrollView>
  );
}
