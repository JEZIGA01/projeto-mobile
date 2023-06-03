import AsyncStorage from '@react-native-async-storage/async-storage';

//Buscar os favoritos
//Salvar Favorito
//Remover favorito

export async function getFavorites(key) {
  const favorites = await AsyncStorage.getItem(key)
  return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem) {
  let myFavorites = await getFavorites(key);
  let hasItem = myFavorites.some(item => item.id === newItem.id)

  if (hasItem) {
    console.log('ja ta na lista')
    return;
  }
  myFavorites.push(newItem)

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
  console.log('salvo')
}
export async function removeItem(id) {
  let receipes = await getFavorites("@appreceitas")

  let myFavorites = receipes.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem("@appreceitas",JSON.stringify(myFavorites));
  console.log('item deletado com sucesso')
  return myFavorites;
}

export async function isFavorite(receipe) {
  let myReceipes = await getFavorites("@appreceitas")
  
  const favorite = myReceipes.find(item => item.id === receipe.id)
  if(favorite){
    return true;
  }
  return false
}