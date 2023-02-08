import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';


export default function Login() {
  return (
    <View style={styles.contrainer}>
      <Animatable.View animation="fadeInLeft" delay={500} styles={styles.contrainerHeader}>
        <Text style={styles.message}>Bem vindo(a)!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.contrainerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder='Digite o nome'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite a senha'
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>


      </Animatable.View >


    </View>
  )
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 3,
    backgroundColor: '#76C9F3'
  },
  contrainerHeader:{
    marginTop: '14%',
    marginBottom:  '8%',
    paddingStart: '5%'
  },
  message:{
    paddingTop:'15%',
    paddingStart: '5%',
    marginBottom:  '20%',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  contrainerForm:{
    backgroundColor: '#fffd',
    flex: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 20,
    marginTop:28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize:16,
  },
  button:{
    backgroundColor: "#1F4D64",
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems:'center',
  },
  buttonText:{
    fontSize:18,
    color:'#fff',
    fontWeight: 'bold'
}
  


})