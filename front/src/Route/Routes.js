import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import AddReservation from '../Screens/AddReservation';
import { Image,StyleSheet } from 'react-native'
import Connexion from '../Screens/Connexion';
import Inscription from '../Screens/Inscription';
import Menu from '../Screens/Menu';
import Profil from '../Screens/Profil';
import Reservation from '../Screens/Reservation';
import Accueil from '../Screens/Accueil';
import AddEnfant from '../Screens/AddEnfant';
import Natation from '../Screens/Natation';
import Notification from '../Screens/Notification';
import LesClubs from '../Screens/LesClubs';
import Paiement from '../Screens/Paiement';
import Contact from '../Screens/Contact';
import StageAdo from '../Screens/StageAdo';
import DetailReserv from '../Screens/DetailReserv';
import Validation from '../Screens/Validation';
import Enfant from '../Screens/Enfant';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import Calendrier from '../Screens/Calendrier'; 
import MesNotifs from '../Screens/MesNotifs';
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <NavigationContainer>
       
      <Stack.Navigator> 
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Connexion" component={Connexion} /> 
        <Stack.Screen options={{ headerShown: false }} name="Validation" component={Validation} />
        <Stack.Screen options={{ headerShown: false }} name="Inscription" component={Inscription} />
        
        <Stack.Screen options={{ headerShown: false }} name="AddReservation" component={AddReservation} />
        <Stack.Screen options={{ headerShown: false }} name="StageAdo" component={StageAdo} />
        <Stack.Screen options={{ headerShown: false }} name="Natation" component={Natation} />
        <Stack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
        <Stack.Screen options={{ headerShown: false }} name="Paiement" component={Paiement} />
       
        <Stack.Screen options={{ headerShown: false }} name="LesClubs" component={LesClubs} />
        <Stack.Screen options={{ headerShown: false }} name="Profil" component={Profil} />
        <Stack.Screen options={{ headerShown: false }} name="Calendrier" component={Calendrier} />
        <Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />  
        <Stack.Screen options={{ headerShown: false }} name="MesNotifs" component={MesNotifs} />
        <Stack.Screen options={{ headerShown: false }} name="Contact" component={Contact} />
        <Stack.Screen options={{ headerShown: false }} name="Reservation" component={Reservation} />
        <Stack.Screen options={{ headerShown: false }} name="DetailReserv" component={DetailReserv} />
        <Stack.Screen options={{ headerShown: false }} name="AddEnfant" component={AddEnfant} />
        <Stack.Screen options={{ headerShown: false }} name="Enfant" component={Enfant} />
        <Stack.Screen name="Accueil" component={Accueil} options={({ navigation }) => ({
          title: '',
          headerLeft: () => (
            <Image  style={styles.Logo} source={require('../Ressources/Logo_Nîmes.png')}  />

          ),
          headerRight: () => (
            <Entypo name="menu" size={33} color="#00A0C6"  onPress={() => navigation.navigate('Menu')} />
          ),
        })} />
       
      </Stack.Navigator>     
    </NavigationContainer>

  );

}

const styles = StyleSheet.create({
Logo: {
  marginLeft : 10,
  width: 90,
  height:50,
}

})

export default MyStack;



