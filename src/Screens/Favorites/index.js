import {View,Text,StyleSheet} from 'react-native'

export function Favorites(){
  return(
    <View style={styles.container}>
      <Text>Favoritos</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:36,
    paddingStart:14,
    paddingEnd:14
  }
})