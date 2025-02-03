import React, { useState }from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from "react-native";
import ModalComponent from "../Modal";

export default function Films(props) {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View>
      <View style={styles.card} >
        <Text style={styles.name} >{props.data.nome}</Text>
        <Image
          source={{ uri: props.data.foto }}
          style={styles.img}
        />
        <View style={styles.viewButton} >
          <TouchableOpacity style={styles.button} onPress={ () => setModalVisible(true) } >
            <Text style={styles.buttonTxt} > Read more </Text>
          </TouchableOpacity>
        </View>
        <Modal visible={modalVisible} animationType="slide" transparent={true} >
          <ModalComponent closeModal={() => setModalVisible(false)} data={props.data}  />
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 50
  },
  img: {
    width: '100%',
    height: 250,
    zIndex: 2
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
  },
  viewButton:{
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 3
  }, 
  button:{
    width: 100,        
    backgroundColor: '#09A6FF',
    padding: 8,    
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  buttonTxt:{
    color: '#000',
    textAlign: 'center'
  }
})