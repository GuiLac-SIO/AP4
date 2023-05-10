import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from 'react';
import HeaderBar from '../Components/HeaderBar';
import { FontAwesome5 } from '@expo/vector-icons';
 
 
 


const AddReservation = () => {
    const { navigate } = useNavigation()

    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
   
  return (
    <> 
   <View style={styles.Fond}>

   <HeaderBar destination={'Accueil'}/> 

    <Text style={styles.Titre}>Vous réservez pour qui ?</Text>
    <View style={styles.position}>
        <View style={styles.checkbox}> 
    {checked ? (
      <MaterialCommunityIcons  name="checkbox-marked" size={30} color="#00A0C5" onPress={() =>  setChecked(false)} />
    ) : (
      <MaterialCommunityIcons name="checkbox-blank-outline" size={30} color="#00A0C5" onPress={() => setChecked(true)}/>
    )}
    <Text style={styles.text2}> Vous-même</Text>
  </View>
  <View style={styles.checkbox}> 
  <Ionicons style={styles.add} name="add-circle-outline" size={30} color="grey" onPress={() => navigate('AddEnfant')} />
  <Text style={styles.text1} onPress={() => navigate('AddEnfant')}> Ajouter un enfant</Text>
 </View>
  </View>
  <FontAwesome5 name="arrow-right" size={40} color="#F0B444" style={styles.suivant} onPress={() => navigate('Calendrier')}/>
   
    </View>
    <Bottom />
    </>
  )
}

export default AddReservation

const styles = StyleSheet.create({
    suivant:{
        position: 'absolute',bottom: 40,
        right:40,


    },
 
    text1:{
        flex: 1,
        color : '#00A0C6',
        fontWeight : '400',
        fontSize : 16,
        marginLeft :26,
    },

    text2:{
        flex: 1,
        color : '#2D5F74',
        fontWeight : '400',
        fontSize : 16,
        marginLeft :26,
        
      },

    checkbox:{
        paddingTop :20,
        flexDirection: 'row',
    },

    position:{   marginLeft :56,
        marginTop : 53, },
   

    Fond: {
        backgroundColor: 'white',
        flex: 1,
      },
      Titre: {
        marginTop:20,
        color: '#2D5F74',
        fontSize: 25,
        textAlign: 'center',
         
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900',
        
      },
})