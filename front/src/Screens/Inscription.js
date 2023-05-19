import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import * as Crypto from 'expo-crypto';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';

const Inscription = () => {
    const [Prenom, onChangePrenom] = React.useState('');
    const [Nom, onChangeNom] = React.useState('');
    const [Login, onChangeLogin] = React.useState('');
    const [Mdp, onChangeMdp] = React.useState('');
    const [MdpConf, onChangeMdpConf] = React.useState('');
    const { navigate } = useNavigation()
    const navigation = useNavigation();
    const getCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();

        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return year + '-' + month + '-' + date;//format: d-m-y;
    }

    const DateInscription = getCurrentDate()




    const checkPassword = (password) => {
        if (password.length < 8 || password.toUpperCase() === password) {

            return false;
        } else {
            return true;
        }
    }
    const Valide = checkPassword(Mdp)

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleInscription = async () => {

        try {
            const salt = 'azerty';
            const hashedPassword = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                salt + Mdp // concaténer le sel et le mot de passe
            );
            console.log("hashedPassword :", hashedPassword);
            if (Login && Nom && Prenom && DateInscription && Mdp) {
                if (Mdp == MdpConf) {
                    if (Valide) {
                        if (!validateEmail(Login)) {

                            alert("Veuillez saisir une adresse e-mail valide");
                            return;
                        }
                        else { 
                            const response = await axios.post('http://192.168.1.4:3001/user/inscription', { 
                                nom: Nom,
                                prenom: Prenom,
                                email: Login,
                                date_inscription: DateInscription,
                                password: hashedPassword 
                            });
                            console.log("response",response.data); 
                            if (response.data == true) { 
                                alert("Inscription confirmé!");
                                navigate('Connexion');
                                
                            } 
                            else{
                                alert("Cette adresse mail est déja utilisé");
                            } 
                        }
                    }
                    else 
                    {
                        alert("Le mot de passe doit contenir au moins 8 caractères et au moins une lettre majuscule.");
                    }
                }
                else 
                {
                    alert("Le mot de passe n'est pas identique");
                    return;

                }

            }
            else 
            {
                alert("Veuillez renseigner tous les champs")
            }



        } catch (error) {
            console.error("----", error);
        }

    };

    return (
        <View style={styles.Fond}>
              <Ionicons name="arrow-back-circle" size={40} color="#00A0C6"  style={{ marginLeft : 30, marginTop: 37,}} onPress={() => navigation.goBack()}/>
            <Text style={styles.Titre}>INSCRIPTION</Text>
            <Image
                source={require('../Ressources/waveJaune.png')}
                style={styles.Wave}
            />
            <Text style={styles.Login}>*Prenom</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePrenom}
                value={Prenom}
            />
            <Text style={styles.Login}>*Nom</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNom}
                value={Nom}
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
            <Text style={styles.Login}>*Confirmez le mot de passe</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeMdpConf}
                value={MdpConf}
            />
            <TouchableOpacity style={styles.Bouton} onPress={() => handleInscription()}>
                <Text style={styles.BoutonCommencer} >S'inscrire</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Inscription

const styles = StyleSheet.create({
    suivant: {
        position: 'absolute', bottom: 40,
        right: 40,


    },
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
        marginTop: 50,
    },
    Bouton: {

        alignItems: 'center',
        justifyContent: 'center'
    },
})