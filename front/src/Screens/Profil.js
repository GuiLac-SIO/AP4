import { StyleSheet, Text, View,KeyboardAvoidingView, Image, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Bottom from '../Route/Bottom';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderBar from '../Components/HeaderBar';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import axios from "axios";
import { useApp } from '../Provider/app.provider';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

const Profil = () => {
    const { User, setUser } = useApp()
    const { navigate } = useNavigation()
    const [image, setImage] = useState(User.photo);
    const [prenom, onChangePrenom] = React.useState(''); 
    const [nom, onChangeNom] = React.useState(''); 
    const [sexe, onChangeSexe] = React.useState(''); 
    const [mail, onChangeMail] = React.useState(''); 
    const isButtonDisabledPrenom = prenom.trim().length === 0;
    const isButtonDisabledNom = nom.trim().length === 0; 
    const isButtonDisabledSexe = sexe.trim().length === 0;  
    const isButtonDisabledMail = mail.trim().length === 0;  

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    const today = new Date();
    
    const userDate = new Date(User.dateInscription);
    const diff = today.getTime() - userDate.getTime();
    const daysSinceRegistration = Math.floor(diff / 86400000); 


    const Update = async (editColonne,text) => {
        try {
            console.log('text :',text, 'colone:', editColonne);
            if (text) {
                if(editColonne == 'mail' ) {
                if(!validateEmail(text))
                {

                    alert("Veuillez saisir une adresse e-mail valide");
                    return;
                }}
                else
                console.log('USER ID :', editColonne);
                setUser({ ...User, [editColonne]: text });
                const response = await axios.post('http://192.168.1.4:3001/user/update', {
                    colonne: editColonne,
                    valeur: text,
                    Userid: User.idAdherent
                })
                if (response.data) {
                    Keyboard.dismiss();
                }
            }
        }
        catch (error) {
            console.error("----", error);
        }
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

    };



    return (
         
        <>
            <View style={styles.Fond}>

                <HeaderBar destination={'Accueil'} />

                <Text style={styles.Titre}>PROFIL</Text>
                <Image
                    source={require('../Ressources/waveJaune.png')}
                    style={styles.Wave}
                />
                <View style={styles.ridesFriends}>

                    {image && <Image source={{ uri: image }} style={styles.img} />}

                    <MaterialIcons style={styles.camera} name="photo-camera" size={30} color="#00A0C6" onPress={pickImage}
                    />
                    <View style={styles.verticleLine}></View>
                    <View>
                        <Text style={styles.membre}>Membre depuis</Text>
                        <Text style={styles.inscription}>{daysSinceRegistration} Jours</Text>
                    </View>
                </View>

                <Text style={styles.prenomId}>{User.prenom}</Text>
                <Text style={styles.nomId}>{User.nom}</Text>




                <View style={styles.item}>
                    <Fumi label={'Modifier nom :'} iconClass={FontAwesomeIcon} iconName={'user'} iconColor={'#f95a25'} 
                        iconSize={20}   inputPadding={16}    onChangeText={onChangeNom} value={nom} 
                    />  
                    <AntDesign style={{ position: 'absolute', right: 20, top: 25 }} name="rightsquare" size={24} color={isButtonDisabledNom ? 'grey' : 'green'}
                        onPress={() => {
                            if (!isButtonDisabledNom) {
                                Keyboard
                                Update('nom',nom),
                                onChangeNom('')
                            }
                        }} />
                </View>


                <View style={styles.item}>
                    <Fumi label={'Modifier prenom :'} iconClass={FontAwesomeIcon} iconName={'user'} iconColor={'#f95a25'} 
                        iconSize={20}   inputPadding={16}    onChangeText={onChangePrenom} value={prenom} 
                    />  
                    <AntDesign style={{ position: 'absolute', right: 20, top: 25 }} name="rightsquare" size={24} color={isButtonDisabledPrenom ? 'grey' : 'green'}
                        onPress={() => {
                            if (!isButtonDisabledPrenom) {
                                Keyboard
                                Update('prenom',prenom),
                                onChangePrenom('')
                            }
                        }} />
                </View>

                <View style={styles.item}>
                    <Fumi label={'Modifier Sexe :'} iconClass={FontAwesomeIcon} iconName={'user'} iconColor={'#f95a25'} 
                        iconSize={20}   inputPadding={16}    onChangeText={onChangeSexe} value={sexe} 
                    />  
                    <AntDesign style={{ position: 'absolute', right: 20, top: 25 }} name="rightsquare" size={24} color={isButtonDisabledSexe ? 'grey' : 'green'}
                        onPress={() => {
                            if (!isButtonDisabledSexe) {
                                Keyboard
                                Update('sexe',sexe),
                                onChangeSexe('')
                            }
                        }} />
                </View>

                

                <View style={styles.item}>
                    <Fumi label={'Modifier mail :'} iconClass={FontAwesomeIcon} iconName={'user'} iconColor={'#f95a25'} 
                        iconSize={20}   inputPadding={16}    onChangeText={onChangeMail} value={mail} 
                    />  
                    <AntDesign style={{ position: 'absolute', right: 20, top: 25 }} name="rightsquare" size={24} color={isButtonDisabledMail ? 'grey' : 'green'}
                        onPress={() => {
                            if (!isButtonDisabledMail) {
                                Keyboard
                                Update('mail',mail),
                                onChangeMail('')
                            }
                        }} />
                </View>

            
                <TouchableOpacity style={styles.Bouton} onPress={() => navigate('Home')}>
                    <View style={styles.BoutonCommencer}>
                        <MaterialCommunityIcons name="location-exit" size={28} color="red" style={{ marginRight: 30, marginTop: 'auto', marginBottom: 'auto' }} />
                        <Text style={styles.textbtn}> Se déconnecter</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Bottom />
        </>
    )
}

export default Profil


const styles = StyleSheet.create({

    camera: {
        backgroundColor: 'white',
        borderRadius: 145,
        bottom: 22,
        right: 52,
    },

    exit: {
        marginLeft: 250,
    },
    icone: {
        marginLeft: 265,
    },

    icone1: {
        marginLeft: 288,
    },

    icone2: {
        marginLeft: 246,
    },
    icone3: {
        marginLeft: 285,
    },
    item: {
        marginLeft: 20,
        marginTop:0,
        
    },

    ridesFriends: {
        paddingTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: 20,
    },

    membre: {
        color: 'grey',
        fontSize: 15,
    },

    inscription: {
        color: '#2D5F74',
        fontSize: 20,
        position: 'relative',
        fontWeight: '800'

    },

    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },

    textbtn: {
        color: '#2D5F74',
        fontSize: 16,
        fontWeight: '900',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    BoutonCommencer: {
        width: 210,
        lineHeight: 54,
        height: 54,
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#F6F7F9',
        backgroundColor: '#F6F7F9',
        position: 'absolute'

    },
    Bouton: {
        marginTop: 46,
        alignItems: 'center',
        justifyContent: 'center'
    },

    img: {
        width: 89,
        height: 89,
        borderRadius: 135,
        backgroundColor: 'black',
    },

    prenomId: {
        color: '#00A0C6',
        fontSize: 23,
        marginTop: 10,
        marginLeft: 35,
        fontWeight: '700'
    },

    nomId: {
        color: '#2D5F74',
        fontSize: 33,
        marginLeft: 35,
        fontWeight: '900'
    },

    nom: {
        color: '#2D5F74',
        fontSize: 15,
        marginTop: 33,
        marginLeft: 35,
        fontWeight: '500'
    },

    text: {
        color: '#2D5F74',
        fontSize: 15,
        marginTop:10,
        marginLeft: 35,
        fontWeight: '500'
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
    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },

})