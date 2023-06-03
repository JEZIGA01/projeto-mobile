import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'; 
import api from '../../service/api';
import { ChamadoList} from '../../components/chamadolist'

export function Search() {

  const route = useRoute();
  const [receipes, setReceipes] = useState([])

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`chamados?name_like=${route.params?.name}`)
     setReceipes(response.data)
    }

    fetchReceipes();
  }, [route.params?.name])
  return (
    <View style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false} 
      data={receipes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <ChamadoList data={item}/>}
      ListEmptyComponent={() => <Text style={styles.text}Não encontramos o que você procura></Text>}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    backgroundColor: '#f3f9ff',
    paddingTop: 14,
    paddingStart: 14,
    paddingEnd: 14,
  },
  text:{
    fontSize:16,
  }
});