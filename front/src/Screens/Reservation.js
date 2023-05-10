import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom';
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../Components/HeaderBar';
import ReservationItemUpdate from '../Components/ReservationItemUpdate';
import { useApp } from '../Provider/app.provider';

const Reservation = () => {
    const { EvenementById } = useApp()
    const { navigate } = useNavigation()
    const navigation = useNavigation();

   console.log("EvenementById ;",EvenementById);

   

    return (
        <>
            <View style={styles.Fond}>
                <HeaderBar destination={'Accueil'} />
                <Text style={styles.Titre}>RÉSERVATION</Text>
                <Image
                    source={require('../Ressources/waveJaune.png')}
                    style={styles.Wave}
                />
                <FlatList
                    data={EvenementById}
                    initialNumToRender={4}
                    renderItem={({ item }, i) => <ReservationItemUpdate event={item} index={i} />}
                    keyExtractor={item => item.idEvenement.toString()}
                />

                <Ionicons style={styles.add} name="add-circle-outline" size={40} color="grey" onPress={() => navigate('AddReservation')} />
            </View>
            <Bottom />
        </>
    )
}

export default Reservation

const styles = StyleSheet.create({
    add: {
        marginTop: 60,
        marginRight: 'auto',
        marginLeft: 'auto'
    },


    margin: {
        marginLeft: 10,

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
        fontWeight: '900'
    },
    Wave: {
        marginLeft: 'auto',
        marginRight: 'auto',

    },


})