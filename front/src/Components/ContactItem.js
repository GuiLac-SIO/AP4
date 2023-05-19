import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Stage from '../Data/Stage';
import { Entypo } from '@expo/vector-icons';


const ContactItem = ({item}) => { 


    return (
        <View>
            <View style={styles.ridesFriends}>
                <View>
                    <View style={styles.shadow}>
                        <Image source={{ uri: item.Photo}} style={styles.img} />
                    </View>
                    <Text style={styles.nom}>{item.Prenom}</Text>
                    <Text style={styles.nom}>{item.Nom}</Text>
                </View>
                <View>
                    <Text style={styles.Mail}>{item.Fonction}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Entypo name="location-pin" size={16} color="#00A0C6" />
                        <Text style={styles.lieu}>{item.Mail}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <Entypo name="phone" size={16} color="#00A0C6" />
                        <Text style={styles.lieu}> {item.Numero}</Text>
                    </View>
                </View> 
            </View>
            <View style={styles.verticleLine}></View>
        </View>
    )
}

export default ContactItem

const styles = StyleSheet.create({

    shadow: {
        backgroundColor: 'white',
        width: 89,
        height: 89,
        borderRadius: 135,
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

    verticleLine: {
        height: 1,
        width: '100%',
        backgroundColor: 'grey',
    },





    Mail: {
        color: '#2D5F74',
        fontSize: 19,
        fontWeight: '800',
        marginBottom: 21
    },
    nom: {
        color: '#F0B444',
        fontSize: 17,
        marginTop:10,
        marginLeft: 18,
        fontWeight:'700'
    },


    lieu: {
        color: '#2D5F74',
        fontSize: 15,
        marginBottom: 13
    },


    ridesFriends: {
        paddingTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },

    img: {
        width: 89,
        height: 89,
        borderRadius: 135,
        
    },




})