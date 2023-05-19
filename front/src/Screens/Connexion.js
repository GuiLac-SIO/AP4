import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { alertAsync } from 'react-native-alert-async';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { useApp, } from '../Provider/app.provider.js';
import * as Crypto from 'expo-crypto';
import { Ionicons } from '@expo/vector-icons';

const Connexion = () => {
    const { setToken, setUser, setEnfant, setEvenement, EvenementById, setEvenementById, setConfig } = useApp();
    const navigation = useNavigation();
    const [Login, onChangeLogin] = React.useState('G@g.fr');
    const [Mdp, onChangeMdp] = React.useState('Guiguigui');
    const { navigate } = useNavigation()



    const handleLogin = async () => {
        try {
            const salt = 'azerty';
            const hashedPassword = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                salt + Mdp // concaténer le sel et le mot de passe
            );

            const response = await axios.post('http://192.168.1.4:3001/user/login', {
                email: Login,
                password: hashedPassword, // envoyer le mot de passe haché dans la requête
            });

            if (response.data) {
                setToken(response.data.token)

                const config = {
                    headers: { Authorization: `Bearer ${response.data.token}` }
                };
                setConfig(config)
                const user = await axios.get(
                    'http://192.168.1.4:3001/user/getUser',
                    config
                );

               // console.log('USEEEER', user.data[0]);
                const userId = user.data[0].idAdherent;


             
                setUser(user.data[0]);
                navigate('Accueil');

            }
            else {
                alert('Email ou mot de passe incorrect')
            }
        } catch (error) {
            console.error("----", error);
        }

    };


    return (
        <View style={styles.Fond}>
            <Ionicons name="arrow-back-circle" size={40} color="#00A0C6" style={{ marginLeft: 30, marginTop: 37, }} onPress={() => navigation.goBack()} />
            <Text style={styles.Titre}>CONNEXION</Text>
            <Image
                source={require('../Ressources/waveJaune.png')}
                style={styles.Wave}
            />
            <Text style={styles.Login}>*Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={Login}
            />
            <Text style={styles.Login}>*Mot de passe</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeMdp}
                value={Mdp}
            />

            <View style={{ flex: 1, marginTop: '70%' }}>
                <TouchableOpacity style={styles.Bouton} onPress={handleLogin}>
                    <Text style={styles.BoutonCommencer} >Se connecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Connexion

const styles = StyleSheet.create({
    input: {
        color: 'grey',
        borderColor: '#2D5F74',
        height: 54,
        width: 358,
        borderRadius: 17,
        margin: 12,
        borderWidth: 1,
        padding: 18,
        marginTop: 4,
        fontSize: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 13,
    },

    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },

    Titre: {
        color: '#00A0C6',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 21,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '900'
    },
    Wave: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50.25,

    },

    Login: {
        color: '#2D5F74',
        marginLeft: 36,
        fontSize: 15,
        fontWeight: '600'

    },

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
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#2D5F74',
        backgroundColor: '#2D5F74',
        textAlign: 'center',

    },
})