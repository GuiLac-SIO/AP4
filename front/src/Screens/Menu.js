import { StyleSheet, Text, View, BackHandler } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5, } from '@expo/vector-icons';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Menu = () => {
    const { navigate } = useNavigation()
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Entypo style={styles.exit} name="cross" size={50} color="#00A0C6"  onPress={() => navigation.goBack()}/>
            <View style={styles.rowContainer}>
                <Entypo style={styles.marginHome}  name="home" size={29} color="#000000" onPress={() => navigate('Accueil')}/>
                <Text style={styles.TextHome}  onPress={() => navigate('Accueil')}>Accueil</Text>
            </View>
            <View style={styles.rowContainer}>
                <FontAwesome style={styles.marginReservation} name="calendar" size={29} color="#000000"  onPress={() => navigate('Reservation')}/>
                <Text style={styles.Text} onPress={() => navigate('Reservation')}>Réservations</Text>
            </View> 
            <View style={styles.rowContainer}>
                <FontAwesome5 style={styles.marginReservation} name="swimmer" size={29} color="black" onPress={() => navigate('StageAdo')} />
                <Text style={styles.Text} onPress={() => navigate('StageAdo')}>Stage Ado</Text>
            </View>
            <View style={styles.rowContainer}>
                <Ionicons style={styles.marginReservation} name="notifications" size={29} color="black"  onPress={() => navigate('Notification')}/>
                <Text style={styles.Text} onPress={() => navigate('Notification')}>Notifications</Text>
            </View> 
            <View style={styles.rowContainer}>
                <MaterialCommunityIcons style={styles.marginReservation} name="account" size={35} color="black"  onPress={() => navigate('Profil')} />
                <Text style={styles.Text} onPress={() => navigate('Profil')}>Profil</Text>
            </View>
            <View style={styles.rowContainer}>
                <MaterialIcons style={styles.marginReservation} name="contact-phone" size={29} color="black" onPress={() => navigate('Contact')} />
                <Text style={styles.Text} onPress={() => navigate('Contact')}>Contact</Text>
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({


    exit:{
        marginLeft : 320,
        marginTop: 37,
    },

    container: {
        flex: 1,
    },

    rowContainer: {
        flexDirection: 'row'
    },

    marginHome: {
        marginTop: 80,
        marginLeft: 30,
    },

    marginReservation: {
        marginTop: 25,
        marginLeft: 30,
    },

    TextHome: {
        color: '#00A0C6',
        marginTop: 86,
        marginLeft: 80,
        fontSize: 15,
        fontWeight: '500',
        position: 'absolute'
    },

    Text: {
        color: '#00A0C6',
        marginTop: 28,
        marginLeft: 80,
        fontSize: 15,
        fontWeight: '500',
        position: 'absolute'
    },

})