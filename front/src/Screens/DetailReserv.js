import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import Bottom from '../Route/Bottom';
import Stage from '../Data/Stage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../Provider/app.provider';

const DetailReserv = () => {
  const firstStage = Stage[0]
  const { User } = useApp()
  const { navigate } = useNavigation()
  const navigation = useNavigation();
  const { params } = useRoute(); // Obtient les paramètres de l'objet route
  const dataRes = params?.data; // Obtient la valeur de "data" à partir des paramètres

  console.log("DATA:", data);
  const data = [
    { label: "Désignation :", value: dataRes.nom },
    { label: "Date :", value: dataRes.dateEvt },
    { label: "Heure début :", value: dataRes.heureDeb },
    { label: "Heure fin :", value: dataRes.heureFin },
    { label: "Nom :", value: User.nom },
    { label: "Prénom :", value: User.prenom },
  ];

  return (
    <>
      <View style={styles.Fond}>

        <View style={{ flexDirection: 'row', marginTop: 37, }}>
          <Ionicons name="arrow-back-circle" size={40} color="#00A0C6" style={{ marginLeft: 30 }} onPress={() => navigation.goBack()} />
          <Entypo style={styles.exit} name="cross" size={50} color="#00A0C6" onPress={() => navigate('Accueil')} />
        </View>

        <Text style={styles.Titre}>Réservation</Text>
        <Image source={require('../Ressources/waveJaune.png')} style={styles.Wave} />
        <Image source={{ uri: dataRes.photoEvt }} style={styles.img} />
        <Text style={styles.detail}>Détails :</Text>



        {data.map((item, index) => (
          <View style={styles.ridesFriends} key={index}>
            <Text style={styles.text1}>{item.label}</Text>
            <Text style={styles.text2}>{item.value}</Text>
          </View>
        ))}

      </View>
      <Bottom />
    </>

  )
}

export default DetailReserv

const styles = StyleSheet.create({


  ridesFriends: {
    paddingTop: 10,
    flexDirection: 'row',


  },

  text2: {
    flex: 1,
    color: '#2D5F74',
    fontWeight: '900',
    fontSize: 16,
  },

  text1: {
    flex: 1,
    marginLeft: 50,
    fontSize: 16,
    color: '#2D5F74',
  },


  detail: {
    marginTop: 20,
    color: '#2D5F74',
    fontSize: 33,
    marginLeft: 35,
    fontWeight: '900',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 30
  },

  img: {
    width: 328,
    height: 228,
    borderRadius: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 30

  },


  Fond: {
    backgroundColor: 'white',
    flex: 1,
  },
  Titre: {
    color: '#00A0C6',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '900',

  },
  Wave: {
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  exit: {
    marginLeft: 250,

  },

})