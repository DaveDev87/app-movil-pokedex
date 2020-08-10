import React, {useEffect, useState} from "react";
import {ScrollView, Text} from "react-native";
import {ListItem} from "react-native-elements"
import axios from "axios";

export default function infoRegions(props) {
    const [datos, setdatos] = useState([])

    useEffect(() => {
        axios.get(props.route.params.url)
        .then(res=>setdatos(...datos, res.data.locations))
        .catch(error=>console.error(error))
    }, [])
  return (
    <ScrollView>
        {
            datos.map((item, i)=>(
            <ListItem title={item.name}/>
            ))
        }
    </ScrollView>
  );
}
