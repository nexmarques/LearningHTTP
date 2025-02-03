import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import api from "./src/services/api";
import Films from "./src/Films";

export default function App() {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadingFilms() {
      const response = await api.get('r-api/?api=filmes')
      setFilms(response.data);
    }
    loadingFilms();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={ (item) => String(item.id) }
        renderItem= { ({item}) => <Films data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
});