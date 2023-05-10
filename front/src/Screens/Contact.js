import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Bottom from '../Route/Bottom';
import HeaderBar from '../Components/HeaderBar';
import ContactItem from '../Components/ContactItem';

const Contact = () => {
    const Contacts=[{
        id:1,
        Nom: 'Dupont',
        Prenom: 'Sophie',
        Lieu:'Base sud de la plage – cabine 847',
        Photo:'https://www.ojem.fr/wp-content/uploads/2020/10/Sophie-e1610459729265-300x300.jpg',
        Club:'Ojem Jeunesse',
        Numero :'06 31 62 23 09'
    },
    {
        id:2,
        Nom: 'Dupont',
        Prenom: 'Vincent',
        Lieu:'Centre de la plage – cabine 411',
        Photo:'https://www.ojem.fr/wp-content/uploads/2022/01/IMG_9746-e1642604199394-150x150.png',
        Club:'Ojem Om Mickey',
        Numero :'06 88 32 92 88'  
    },
    {
        id:3,
        Nom: 'Dupont',
        Prenom: 'Ambre',
        Lieu:'Au nord de la plage – cabine 40',
        Photo:'https://www.ojem.fr/wp-content/uploads/2022/03/IMG_2139-150x150.jpeg',
        Club:'Hipp’ojem',
        Numero :'06 24 08 35 46'
    }
    
    ]

    return (
        <>
            <View style={styles.Fond}>
                <HeaderBar destination={'Accueil'} />
                <Text style={styles.Titre}>CONTACT</Text>
                <Image
                    source={require('../Ressources/waveJaune.png')}
                    style={styles.Wave}
                />
                <Text style={styles.text}>OJEM OM Mickey, OJEM Jeunesse et Hippojem sont des clubs de plage situés à Le Touquet Paris Plage. Ils accueillent à chaque vacances petits et grands et leurs proposent différentes activités.</Text>
                <View style={styles.verticleLineTop}></View>

                <FlatList
                    data={Contacts}
                    renderItem={({ item }) => <ContactItem item={item}/>}
                    keyExtractor={item => item.id}
                />

            </View>
            <Bottom />
        </>
    )
}

export default Contact

const styles = StyleSheet.create({
    verticleLineTop: {
        height: 1,
        width: '100%',
        backgroundColor: 'grey',
        marginTop: 20
    },

    text: {
        color: '#2D5F74',
        fontSize: 15,
        marginTop: 25,
        marginLeft: 35,
        marginRight: 35,
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