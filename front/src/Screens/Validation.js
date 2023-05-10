import { Modal, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom'; 
import { useState } from 'react';
import HeaderBar from '../Components/HeaderBar';
import { FontAwesome5 } from '@expo/vector-icons';  
import CheckBox from '../Components/CheckBox';
import { useApp } from '../Provider/app.provider';


 
const Validation = () => {

    const { navigate } = useNavigation() 
    const {Reservation, User} = useApp()

    
  return (
    <> 
   <View style={styles.Fond}>

   <HeaderBar destination={'Accueil'}/>

   <Image source={require('../Ressources/paiement.png')} style={styles.img} />


   <Text style={styles.Titre}>Paiement réussi !</Text>
   <Text style={styles.text}>Numéro de transaction : 548754876</Text>
   <View style={styles.verticleLine}></View>
  <View style={{flexDirection:'row'}}><Text style={styles.text}>Montant payé : </Text><Text style={styles.text1}>150 €</Text></View> 



 
 <FontAwesome5 name="arrow-right" size={40} color="#F0B444" style={styles.suivant} onPress={() => navigate('Accueil')}/>
  </View>
    <Bottom />
    </>
  )
}

export default Validation

const styles = StyleSheet.create({
    text1 :{
        color: '#A9A9A9',
         fontSize: 17,  
         marginLeft: 90, 
         fontWeight :'800'
     },
    text :{
        color: '#A9A9A9',
         fontSize: 17,  
         marginLeft: 70, 
     },
     verticleLine: {
        height: 1 ,
        width: '40%',
        backgroundColor: '#A9A9A9',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
    Titre: {
        marginTop: 20,
        color: '#2D5F74',
        fontSize: 30,
        textAlign: 'center',

        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900',
        marginBottom: 30,


    },
    suivant:{
        position: 'absolute',bottom: 40,
        right:40,
 
    },
    img: {
        width: 250,
        height: 230,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    

    Fond: {
        backgroundColor: 'white',
        flex: 1,
      },
     
})