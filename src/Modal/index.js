import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ModalComponent(props) {
  return (
    <View style={styles.container} >
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => props.closeModal()} style={styles.button} >
          <Text style={styles.buttonTxt} >Close modal</Text>
        </TouchableOpacity>
        <Text style={styles.name} > {props.data.nome} </Text>
        <Text style={styles.sinopse} > Sinopse: </Text>
        <Text style={styles.description} > {props.data.sinopse} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',    
  },
  modalContainer: {
    height: '80%',
    backgroundColor: '#121212',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    backgroundColor: '#E52246',
    padding: 10,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonTxt: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center'
  },
  name: {
    color: '#FFF',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  sinopse: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 10
  },
  description: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'justify',
    paddingLeft: 10,
    paddingRight: 10,
  }
})
