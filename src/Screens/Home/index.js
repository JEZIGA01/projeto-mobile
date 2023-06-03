import * as React from 'react';
import { Text, View, Image, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Home({ navigation }) {

  return (

    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.description}>Para iniciar, escolha uma das opções abaixo:</Text>

      <View style={styles.cardContainer}>

        <Card style={styles.card}>
          <Card.Title
            title="Buscar chamados"
            left={() => <Ionicons name="ios-add" size={24} color="black" />} titleStyle={styles.cardTitle}
          />

          <Card.Actions>
            <FAB
              icon="plus"
              style={styles.fabLeft}
              onPress={() => navigation.navigate('BuscarChamados')}
            />
          </Card.Actions>
        </Card>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
  },

  viewAlignIMG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAlign: {
    flex: 1,
  },
  txtH1: {
    textAlign: 'center',
    padding: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginBottom: 20,
  },
  fabLeft: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
    backgroundColor: '#00A8E0',
  }, 
  cardTitle: {
    textAlign:'auto',
    paddingTop: 20
  },
});
