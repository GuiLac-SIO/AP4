import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Bottom from '../Route/Bottom';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { useApp } from '../Provider/app.provider';
import ReservationItem from '../Components/ReservationItem';

const Accueil = () => {

  const { User, Evenement,config,setEvenementById,setEvenement } = useApp();
  const { navigate } = useNavigation()

  const chargeReservations = async () => {
    try {
      const Evenement = await axios.get(
        `http://192.168.52.70:3001/user/getEvenement/${User.idAdherent}`,
        config,
      );

      const EvenementById = await axios.get(
        `http://192.168.52.70:3001/user/getReservationById/${User.idAdherent}`,
        config,
      );

      setEvenementById(EvenementById.data)
      setEvenement(Evenement.data)
    }
    catch (error) {
      console.error("----", error);
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    chargeReservations();
  }, []); // la fonction est exécutée une seule fois au montage du composant

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      chargeReservations(); // la fonction est exécutée lorsque le composant est réaffiché
    });

    return unsubscribe;
  }, []);

 

  console.log("USER", User);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image
            source={{ uri: User.photo }}
            style={styles.imgProfil}
          />

          <Text style={styles.nom}>Bonjour {User.prenom}</Text>
          <Ionicons style={{ position: 'absolute', right: 30, marginTop: 26 }} name="notifications" size={30} color="black" onPress={() => navigate('MesNotifs')} />

        </View>
        <Text style={styles.Titre}>Réservez maintenant</Text>
        <View style={styles.rowContainer}>
          <View style={styles.item}>
            <Image
              source={require('../Ressources/stage.png')}
              style={styles.img}
            />
            <Text style={styles.textItem}>Stage Ado</Text>
          </View>

          <View style={styles.item} >
            <TouchableOpacity onPress={() => navigate('Reservation')}
            >
              <Image
                source={require('../Ressources/stage.png')}

                style={styles.img}
              />
            </TouchableOpacity>
            <Text style={styles.textItem} onPress={() => navigate('Reservation')}>Réservations en cours</Text>
          </View>
        </View>
        <Text style={styles.reservation}>Réservations à venir :</Text>

        <FlatList
          data={Evenement}
          initialNumToRender={4}
          renderItem={({ item }, i) => <ReservationItem event={item} index={i} />}
          keyExtractor={item => item.idEvenement.toString()}
        />
      </View>
      <Bottom />
    </>
  )
}

export default Accueil

const styles = StyleSheet.create({

  nom: {
    color: '#2D5F74',
    fontSize: 15,
    marginTop: 33,
    marginLeft: 15,
    fontWeight: '500'
  },

  imgProfil: {
    marginTop: 20,
    marginLeft: 20,
    width: 46,
    height: 46,
    borderRadius: 135,
    backgroundColor: 'black',
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  reservation: {
    color: '#2D5F74',
    fontSize: 20,
    marginLeft: 37,
    marginBottom: 0,
    fontWeight: '700'
  },

  Titre: {
    color: '#2D5F74',
    fontSize: 42,
    textAlign: 'center',
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 36,
    fontWeight: '900'
  },
  img: {
    width: 173,
    height: 201,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',

  },

  rowContainer: {
    flexDirection: 'row'
  },

  item: {
    backgroundColor: 'white',
    height: 260,
    width: 173,
    borderRadius: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 25,
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },

    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,

  },


  textItem: {
    color: '#19A0C6',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 'auto',
    marginBottom: 'auto',
  }

})