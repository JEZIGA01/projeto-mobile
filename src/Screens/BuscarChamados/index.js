import { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import api from '../../service/api'
import {ChamadoList} from '../../components/chamadolist'
import { useNavigation } from '@react-navigation/native'
import { Text as MotiText } from 'moti'

export function BuscarChamados() {

  const [inputValue, setInputValue] = useState("");
  const [chamados, setChamados] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    async function fetchApi() {
      const response = await api.get("/chamados")
      setChamados(response.data)
    }
    fetchApi();
  }, [])

  function handleSearch() {
    if (!inputValue) return;

    let input = inputValue;
    setInputValue("")
    navigation.navigate("Search", { name: input })
  }
  return (
    <SafeAreaView style={styles.container}>

      <MotiText
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 15,
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          delay: 100,
          type: "timing",
          duration: 650
        }}
      >Econtre o Chamado</MotiText>
      <MotiText 
      style={styles.title }
      from={{
        opacity: 0,
        translateY: 15,
      }}
      animate={{
        opacity: 1,
        translateY: 0
      }}
      transition={{
        delay: 200,
        type: "spring",
        duration: 650
      }}
      >E fique Informado 🦜</MotiText>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome do chamado..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color={"#4CBE6C"} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={chamados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ChamadoList data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FF',
    paddingTop: 35,
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black"
  },
  form: {
    width: "100%",
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ECECEC",
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: "90%",
    maxWidth: "90%",
    height: 54,
  }
});