import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'; 
import { Feather } from '@expo/vector-icons';

export function BuscarChamados() {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.viewAlign}> 
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Número do ticket</Text>
          <Feather name="search" size={24} color="black" style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.bulletPoints}>
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}>
              <Text style={styles.bulletText}>1</Text>
            </View>
            <Text style={styles.bulletDescription}>Pendente</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}>
              <Text style={styles.bulletText}>2</Text>
            </View>
            <Text style={styles.bulletDescription}>Em andamento</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}>
              <Text style={styles.bulletText}>3</Text>
            </View>
            <Text style={styles.bulletDescription}>Concluído</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.createdByContainer}>
            <Text style={styles.createdByText}>Criado por:</Text>
            <Text style={styles.nameText}>Nome</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.createdByContainer}>
            <Text style={styles.createdByText}>Criado em:</Text>
            <Text style={styles.nameText}>00/00/2023</Text>
          </View>

          <View style={styles.createdByContainer}>
            <Text style={styles.createdByText}>Última atualização:</Text>
            <Text style={styles.nameText}>00/00/2023</Text>
          </View>
          <View style={styles.createdByContainer}>
            <Text style={styles.createdByText}>Bloco:</Text>
            <Text style={styles.nameText}>Bloco A</Text>
          </View>
          <View style={styles.createdByContainer}>
            <Text style={styles.createdByText}>Local:</Text>
            <Text style={styles.nameText}>Sala 1</Text>
          </View>
          <View style={styles.createdByContainer}>
            <Text style={styles.createdByText}>Categoria:</Text>
            <Text style={styles.nameText}>Cadeira</Text>
          </View>
          <View style={styles.createdByContainer}>
            <Text style={styles.createdByText}>Item:</Text>
            <Text style={styles.nameText}>Mobília</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.card}>
            <Text style={styles.obsTitle}>Obs.:</Text>
            <View style={[styles.obsContainer, {
              width
                : '100%'
            }]}>
              <Text style={styles.obsText}></Text>
            </View>
            <View style={styles.line} />
          </View>

          <Text style={styles.updateText}>Atualização:</Text>
          <View style={styles.line} />

          <TextInput style={styles.updateTextInput} />
        </View>
      </View>
    </View> 
);
}

const styles = StyleSheet.create({
  viewAlign: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtH1: {
    textAlign: 'center',
    padding: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  searchIcon: {
    marginLeft: 5,
  },
  bulletPoints: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  bulletContainer: {
    alignItems: 'center',
  },
  bullet: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bulletText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bulletDescription: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    width: 50,
    backgroundColor: 'lightgray',
    marginHorizontal: 5,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  createdByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  createdByText: {
    textAlign: 'left',
    flex: 1,
    fontWeight: 'bold',
  },
  nameText: {
    textAlign: 'right',
    flex: 1,
  },
  line: {
    height: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginTop: 5,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  obsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  obsContainer: {
    backgroundColor: '#F2F2F2',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  obsText: {
    fontSize: 14,
  },
  updateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  updateTextInput: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
  },
});
