import { Modal, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom'; 
import HeaderBar from '../Components/HeaderBar'; 
import CheckBox from '../Components/CheckBox';
import axios from 'axios';
import { useApp } from '../Provider/app.provider';
const Paiement = () => {

    const { navigate } = useNavigation()
    const navigation = useNavigation(); 
    const {User,Reservation} = useApp();
    const handleReservation = async () => {
        if(Reservation && User){
            const response = await axios.post('http://192.168.52.70:3001/user/reservation', {
                idEvenement: Reservation.idEvenement,
                idAdherent : User.idAdherent
             })
        }}

    return (
        <>
            <View style={styles.Fond}>

                <HeaderBar destination={'Accueil'} />

                <Text style={styles.Titre}>Renseigner vos coordonnées bancaire</Text>

                <View style={styles.ridesFriends}>
                    <View style={styles.shadow}>
                        <TouchableOpacity>
                            <Image source={require('../Ressources/mastercard.png')} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shadow}>
                        <TouchableOpacity>
                            <Image source={require('../Ressources/visa.png')} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shadow}>
                        <TouchableOpacity>
                            <Image source={require('../Ressources/maestro.png')} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>

               
                <Text style={styles.textgras1}>Récapitulatif de la commande</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <Text style={styles.textgras}>Date :</Text><Text style={styles.text}> 03 juil au 09 juil 2023</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textgras}>Localisation :</Text><Text style={styles.text}>Route d’Ales 30.000 Nîmes</Text>
                </View>
                <Text style={styles.textgras}>Total à régler : 150€</Text>
                </View>

                <View style={{flexDirection :'row', marginLeft :30, marginRight: 10, marginTop:30 }}>
                     <CheckBox Taille={30} />
                     <Text style={styles.text1}>Je m’engage à arriver à l’heure convenue</Text>
                     </View>
                     <View style={{flexDirection :'row', marginLeft :30, paddingRight: 40, marginTop:10}}>
                     <CheckBox Taille={30} />
                     <Text style={styles.text1}>J’accepte les conditions générales d’utilisations de OJEM</Text>
                     </View>
             <TouchableOpacity style={styles.Bouton} onPress={() => alert('Réservation validé')+ navigate('Validation') + handleReservation()}>
                <Text style={styles.BoutonCommencer}  >Payer</Text>
            </TouchableOpacity>


            </View>
            <Bottom />
        </>
    )
}

export default Paiement

const styles = StyleSheet.create({
    Bouton: {

        alignItems: 'center',
        justifyContent: 'center'
    },

    BoutonCommencer: {
        width: 200,
        lineHeight: 54,
        height: 'auto',
        color: 'white',
        fontSize: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        textAlign: 'center',
        display: 'flex',
        marginTop: 50,
        marginBottom: 15,


    },

    textgras1:{
        color: 'white',
         fontSize: 18,
         marginTop: 20,
         marginRight: 'auto',
        marginLeft: 'auto',
         fontWeight: '800' ,
     },

    textgras:{
       color: 'white',
        fontSize: 16,
        marginTop: 4,
        marginLeft: 35, 
        fontWeight: '800' ,
    },
    text1 :{
        color: '#2D5F74',
         fontSize: 16,
         marginTop: 4, 
         marginLeft: 10, 
     },
    text :{
        color: 'white',
         fontSize: 16,
         marginTop: 4,
         marginLeft: 10,  
     },

    container: {
        marginTop: 20,
        borderRadius: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 358,
        height: 169,
        backgroundColor: '#19A0C6',
    },

    shadow: {
        backgroundColor: 'white',
        width: 80,
        height: 60,
        borderRadius: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
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
    img: {
        width: 80,
        height: 70,
        borderRadius: 20,

    },

    ridesFriends: {
        paddingTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },

    GoProBox: {
        width: '90%',
        height: 160,
        margin: 5,
        backgroundColor: '#00cc00',
        borderRadius: 10,
        alignSelf: 'center',
        overflow: 'hidden',

    },
    goProBgImage: {
        width: '100%', height: '100%',


    },

    goProText: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 110,
        fontWeight: 'bold',
        padding: 10,
        color: 'white'

    },

    overlayView: {
        marginTop: 110,
        height: 80,
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(0, 160, 198, 0.8)',

    },





    suivant: {
        position: 'absolute',
        bottom: 14,
        right: 40,

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
        marginBottom: 20,


    },
})