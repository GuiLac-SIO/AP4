import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HeaderBar from '../Components/HeaderBar';
import Bottom from '../Route/Bottom';
import CheckBox from '../Components/CheckBox';

const Notification = () => {
    const data = [
        { label: "Notification de réservation", push: true, mail: false, sms: false },
        { label: "Rappel de réservation", push: false, mail: true, sms: false },
        { label: "Annulation de réservation", push: false, mail: false, sms: true }
      ];
    return (
        <>
            <View style={styles.Fond}>
                <HeaderBar destination={'Accueil'} />
                <Text style={styles.Titre}>NOTIFICATIONS</Text>
                <Image
                    source={require('../Ressources/waveJaune.png')}
                    style={styles.Wave}
                />

                <View style={{flexDirection:'row', marginLeft:198, marginBottom:15}}>
                <Text style={styles.text}>Push</Text>
                <Text style={styles.text}>Mail</Text>
                <Text style={styles.text}>Sms</Text>
                </View>
                <View style={styles.verticleLine}></View>

                <View style={{flexDirection:'row', marginLeft:40, marginBottom:15, marginTop:10,}}>
                <Text style={styles.text2}>Réservations :</Text>
                <View style={{marginLeft:35}}> 
                <CheckBox Taille={30} />
                </View><View style={{marginLeft:35}}>
                <CheckBox Taille={30} />
                </View><View style={{marginLeft:35}}>
                <CheckBox Taille={30} />
                </View></View>
                <View style={styles.verticleLine}></View>

                <View style={{flexDirection:'row', marginLeft:40, marginTop:10,}}>
                <Text style={styles.text2}>Message :</Text>
                <View style={{marginLeft:72}}> 
                <CheckBox Taille={30} />
                </View><View style={{marginLeft:35}}>
                <CheckBox Taille={30} />
                </View><View style={{marginLeft:35}}>
                <CheckBox Taille={30} />
                </View></View>





                
            </View>
            <Bottom />
        </>
    )
}

export default Notification

const styles = StyleSheet.create({
    verticleLine: {
        height: 1 ,
        width: '100%',
        backgroundColor: '#D3D3D3',
    },

    ridesFriends: {
        paddingTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },
    text2: {
        fontSize: 20,
        color: '#2D5F74',
        fontWeight:'800',
    },

    text: {
        fontSize: 17,
        color: '#2D5F74',
        fontWeight:'600',
        marginRight:30,
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
        marginBottom : 50,

    },
})