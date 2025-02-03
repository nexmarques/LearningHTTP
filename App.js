import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import api from "./src/services/api";
import Films from "./src/Films";


export default function App() {

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingFilms() {
      const response = await api.get('r-api/?api=filmes')
      setFilms(response.data);
      setLoading(false)
    }
    loadingFilms();
  }, [])

  if(loading){
    return(
      <View style={styles.loading} >
        <ActivityIndicator
          size={50}
          color="#121212"
        />
      </View>
    )
  }      
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
  loading: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});