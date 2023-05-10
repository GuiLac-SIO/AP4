import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Stage from '../Data/Stage';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { useApp } from '../Provider/app.provider';
import axios from 'axios';

const ReservationItem = (event) => {
    const dateEvent = event.event.dateEvt.substring(0, 10);
    const firstStage = Stage[0]
    const { navigate } = useNavigation()
    const navigation = useNavigation();
    const {setReservation, User} = useApp()
   
    
    const deleteResa = async () => {
        try {
            const response = await axios.delete(`http://192.168.52.70:3001/user/deleteReservation/${User.idAdherent}&${event.event.idEvenement}`);
            console.log(response.data);
            navigate('Accueil')
          } catch (error) {
            console.error(error);
          }
    }
    return (
        <View>
            <View style={styles.ridesFriends}>
                <Image source={{ uri: event.event.photoEvt }} style={styles.img} />
                <View>
                    <Text style={styles.nom}>{[event.event.nom]}</Text>
                    <Text style={styles.activite}>Activité : {firstStage.Activite}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Entypo name="location-pin" size={16} color="#2D5F74" />
                        <Text style={styles.lieu}>Club Tennis Nîmes</Text>
                    </View>
                    <Text style={styles.activite}>Date : {dateEvent}</Text>
                    <Text>
                    </Text>
                    <View>
                        <View>
                          
                    <TouchableOpacity style={styles.BoutonReserver} onPress={deleteResa}>
                        <View style={styles.BoutonReserv}>
                            <Text style={styles.textbtn}> Supprimer</Text>
                        </View>
                    </TouchableOpacity>
                    
                    </View>
                </View>
                </View>
            
                <TouchableOpacity style={styles.Bouton} onPress={() => navigate('DetailReserv',{ data: event.event })}>
                    <View style={styles.BoutonCommencer}>
                        <Text style={styles.textbtn}> Voir</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.verticleLine}></View>
        </View>
    )
}

export default ReservationItem

const styles = StyleSheet.create({


    textbtn: {
        color: 'white',
        fontSize: 12,
        fontWeight: '900',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto'
    },

    BoutonCommencer: {

        width: 50,
        lineHeight: 54,
        height: 35,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        position: 'absolute'

    },
    BoutonReserv: {

        width: 75,
        lineHeight: 54,
        height: 35,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        position: 'absolute'

    },
    Bouton: {
        marginLeft: 15,
        marginTop: 46,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    BoutonReserver: {
        marginLeft: 15,
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },

    verticleLine: {
        height: 1,
        width: '100%',
        backgroundColor: 'grey',
    },



    nom: {

        fontSize: 17,
        fontWeight: '600',
    },

    activite: {
        fontSize: 13,
        fontWeight: '600',
    },

    lieu: {
        color: '#19A0C6',
        fontSize: 13,
        fontWeight: '600',
    },


    ridesFriends: {
        paddingTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },

    img: {
        width: 123,
        height: 110,
        borderRadius: 20,
    },




})