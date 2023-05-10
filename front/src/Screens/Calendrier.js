import { Modal, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom';
import { useState } from 'react';
import HeaderBar from '../Components/HeaderBar';
import axios from "axios";
import { FontAwesome5 } from '@expo/vector-icons';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import { useEffect } from 'react';
import ReservationItem from '../Components/ReservationItem';
import { useApp } from '../Provider/app.provider';

const Calendrier = () => {
  const { navigate } = useNavigation()
  const {  Evenement } = useApp();

  
  

  return (
    <>
      <View style={styles.Fond}>

        <HeaderBar destination={'Accueil'} />
        <Text style={styles.Titre}>Pour quelle évènement?</Text>
 
        <FlatList
        data={Evenement}
        initialNumToRender={4}
        renderItem={( {item},i ) => <ReservationItem event={item} index={i}/>}
        keyExtractor={item => item.idEvenement.toString()}
      />
      
        
       


      </View>
      <Bottom />
    </>
  )
  }

export default Calendrier

const styles = StyleSheet.create({
  BoutonCommencer: {
    color: 'white',
    fontSize: 16,    
    lineHeight: 54,
    
},
Bouton: {

    alignItems: 'center',
    justifyContent: 'center',
 
    height: 'auto',
    width: '70%',
    marginLeft:'auto', 
    marginRight:'auto',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2D5F74',
    backgroundColor: '#2D5F74',
    textAlign: 'center',
   
},

  text: {
    marginTop: 18,
    fontSize: 25,
    bottom: 10,
    fontWeight: '900',

  },

  ridesFriends: {
    paddingTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },

  verticleLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },

  suivant: {
    position: 'absolute',
    bottom: 40,
    right: 40,

  },
  add: {

  },

  text1: {
    flex: 1,
    color: '#00A0C6',
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 26,
  },

  text2: {
    flex: 1,
    color: '#2D5F74',
    fontWeight: '400',
    fontSize: 16,
    marginLeft: 26,

  },

  checkbox: {
    paddingTop: 20,
    flexDirection: 'row',
  },

  position: {
    marginLeft: 56,
    marginTop: 53,
  },


  Fond: {
    backgroundColor: 'white',
    flex: 1,
  },
  Titre: {
    marginTop: 20,
    color: '#2D5F74',
    fontSize: 25,
    textAlign: 'center',

    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '900',

  },
})