import { createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '../Screens/Home' 
import {BuscarChamados} from '../Screens/BuscarChamados' 

const Stack = createNativeStackNavigator();

export function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
       name="Home" 
       component={Home} 
       options={{headerShown:false}}
       /> 
       <Stack.Screen
       name="BuscarChamados" 
       component={BuscarChamados} 
       options={{title: "Busca de Chamados"}}
       /> 
    </Stack.Navigator>
  )
} 