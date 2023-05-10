import { Modal, StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useState }  from 'react'
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom'; 
import HeaderBar from '../Components/HeaderBar';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckBox from '../Components/CheckBox';


const StageAdo = () => {
    const { navigate } = useNavigation()
    const [intVisible, setintVisible] = useState(false);
     

    return (
        <>
            <View style={styles.Fond}>

                <HeaderBar destination={'Accueil'} />
                <Text style={styles.Titre}>STAGE ADO</Text>
                <Image
                    source={require('../Ressources/waveJaune.png')}
                    style={styles.Wave} />
                <Text style={styles.Titre2}>11-13 ans & 14-16 ans</Text>
                <Text style={styles.Titre1}>Du 3 juillet - 02 septembre 2023</Text>
                
                {!intVisible ? (<View >
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Accrobranche</Text>
                            <Text style={styles.activite}>Bubble Foot</Text>
                            <Text style={styles.activite}>karting</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Carabine laser</Text>
                            <Text style={styles.activite}>Catamaran</Text>
                            <Text style={styles.activite}>Longboard</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Échasses urbaines</Text>
                            <Text style={styles.activite}>Tir à l’arc</Text>
                            <Text style={styles.activite}>Golf</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Bagatelle</Text>
                            <Text style={styles.activite}>Hover kart</Text>
                            <Text style={styles.activite}>Paddle</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Opale</Text>
                            <Text style={styles.activite}>VTT</Text>
                            <Text style={styles.activite}>Laser</Text>
                        </View>
                    </ScrollView>
                </View> ) : (<View >
                <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Fort-Boyard</Text>
                            <Text style={styles.activite}>Kohlanta</Text>
                            <Text style={styles.activite}>Foot</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Mini-raid</Text>
                            <Text style={styles.activite}>Base-ball</Text>
                            <Text style={styles.activite}>Longboard</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.activite}>Échasses urbaines</Text>
                            <Text style={styles.activite}>Tir à l’arc</Text>
                            <Text style={styles.activite}>Volley</Text>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.activite}>kayak de mer</Text>
                            <Text style={styles.activite}>Paddle</Text>
                        </View>
                    </ScrollView></View>)}

             

                <View  >
                    <View style={styles.switch}>
                        <Text style={[styles.goProText, intVisible && styles.goProTextYellow ]} onPress={() => setintVisible(true) }>Activités de plein air</Text>
                        <Text style={[styles.goProText, !intVisible && styles.goProTextYellow] } onPress={() => setintVisible(false) }>Sorties extérieures</Text></View>

                    <View style={styles.GoProBox} >
                        <ImageBackground source={require('../Ressources/stageado.jpg')}
                            resizeMode='cover' style={styles.img}>
                        </ImageBackground>
                    </View> 
                </View>

            </View>
            <Bottom />
        </>
    )
}

export default StageAdo

const styles = StyleSheet.create({

    switch: {
        position: 'absolute',
        zIndex: 200,
        left: '15%',
        top: 15,
        height: 80,
        width: "70%",
        marginRight: 'auto',
        marginLeft: 'auto',
        
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },

        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10,


    },


    goProText: {

        backgroundColor: '#F8F8FA',
        borderRadius: 10,
        paddingVertical:4,
        paddingHorizontal:12,
        
        marginTop: 7,
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 16,

        fontWeight: '700',
        color: '#2D5F74'

    },
    goProTextYellow: {

        backgroundColor: '#FCEDD2',
       

    },

    container: {
        flexDirection: 'row',
    },


    activite: {
        marginTop: 5,
        padding: 12,
        borderRadius: 15,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: '#00000029',
        backgroundColor: '#F8F8FA'
    },

    scrollView: {
        height: 160,
        width: 330,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15

    },
    GoProBox: {
        marginTop: 40,
        width: '100%',
        height: 422,
        margin: 5,
        backgroundColor: '#00cc00',
        borderRadius: 60,
        alignSelf: 'center',
        overflow: 'hidden',

    },

    img: {
        width: '100%', height: '100%',

    },
    Titre2: {
        marginTop: 13,
        color: '#2D5F74',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '700',
        marginLeft: 'auto',
        marginRight: 'auto',


    },
    Titre1: {
        color: '#00A0C6',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '600'
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

    text1: {
        color: '#A9A9A9',
        fontSize: 17,
        marginLeft: 90,
        fontWeight: '800'
    },
    text: {
        color: '#A9A9A9',
        fontSize: 17,
        marginLeft: 70,
    },
    verticleLine: {
        height: 1,
        width: '40%',
        backgroundColor: '#A9A9A9',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },

    suivant: {
        position: 'absolute',bottom: 40,
        right: 40,

    },



    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },

})