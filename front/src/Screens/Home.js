import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useApp } from '../Provider/app.provider';



const Home = () => {

    const {token, getUser} = useApp();
    const { navigate } = useNavigation()
    

    return (
        <View style={styles.Fond}>
            <Image
                source={require('../Ressources/Logo_Nîmes.png')}
                style={styles.logo}
            />
            <Image
                source={require('../Ressources/accueil.jpg')}
                style={styles.img}
            />
            <Text style={styles.Titre}>BIENVENUE AU TENNIS CLUB DE NÎMES !</Text>
            <Image
                source={require('../Ressources/waveJaune.png')}
                style={styles.Wave}
            />

            <Text style={styles.Texte}>Le club dispose de 6 courts extérieurs et d’1 court couvert, TOUS en terre-battue. L’éclairage est gratuit sur tous les courts. </Text>

            <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Inscription')}>
                <Text style={styles.BoutonCommencer}  >Commencer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Connexion')}>
                <Text style={styles.BoutonConnecter}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Home

const styles = StyleSheet.create({


    fontFamily: Montserrat_400Regular,

    BoutonCommencer: {
        width: 271,
        lineHeight: 54,
        height: 'auto',
        color: 'white',
        fontSize: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        textAlign: 'center',
        display: 'flex',
        marginVertical: 37,
        marginBottom: 15,


    },

    img: {
        
        width: 270,
        height: 270,
        borderRadius: 135,
        backgroundColor: 'black', 
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15, 
        
    }, 
    Wave: { 
        width: 80,
        height:10,
        marginTop:10,
        marginBottom : 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    Bouton: {

        alignItems: 'center',
        justifyContent: 'center'
    },

    BoutonConnecter: {
        width: 271,
        lineHeight: 54,
        height: 'auto',
        color: '#2D5F74',
        fontSize: 16,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        textAlign: 'center',
        display: 'flex',
 
    },

    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },

    Titre: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        width: 340,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900'
    },

    Texte: {
        color: '#21415580',
        fontSize: 15,
        width: 303,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    logo: {
       
        width: 169,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 25,
        marginTop: 61,

    },

})