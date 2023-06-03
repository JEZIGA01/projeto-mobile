import React from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';

export default function History() {
  return (
    <ImageBackground source={require('../Images/bgNGT.png')} style={styles.container} resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.title}>Abrindo um chamado</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Bloco" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Local" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Categoria" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Item" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Motivo" />
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.question}>Deseja anexar uma foto?</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Escolher um arquivo</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.obsTitle}>Obs.:</Text>
          <View style={styles.obsContainer}>
            <Text style={styles.obsText}></Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.question}>Deseja receber atualizações de status por email?</Text>
        </View>
        <View style={styles.emailInputContainer}>
          <TextInput style={styles.emailInput} placeholder="Digite seu email" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  question: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  obsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  obsContainer: {
    // backgroundColor: '#F2F2F2',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  obsText: {
    fontSize: 14,
  },
  emailInputContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  emailInput: {
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginTop: 5,
    width: '100%',
  },
  line: {
    height: 1,
    backgroundColor: '#000000',
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
  },
});

