import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Bottom from '../Route/Bottom';
import HeaderBar from '../Components/HeaderBar';
import ContactItem from '../Components/ContactItem';

const Contact = () => {
    const Contacts = [
        {
          id: 1,
          Nom: 'Decker',
          Prenom: 'Bernard',
          Fonction: 'Président',
          Photo: 'https://tcnimes.fr/wp-content/uploads/2021/05/Bernard-DECKER.png',
          Mail: 'bernard.decker@tcnimes.fr',
          Numero: '06 37 34 02 37'
        },
        {
          id: 2,
          Nom: 'Labrevoir',
          Prenom: 'Delphine',
          Fonction: 'Vice-Présidente',
          Photo: 'https://tcnimes.fr/wp-content/uploads/2023/01/delphine-NB-2.jpg',
          Mail: 'delphine.labrevoir@tcnimes.fr',
          Numero: '06 11 50 65 85'
        },
        {
          id: 3,
          Nom: 'Vergnet',
          Prenom: 'Emeric',
          Fonction: 'Vice-Président',
          Photo: 'https://tcnimes.fr/wp-content/uploads/2021/05/Emeric-VERGNET.png',
          Mail: 'emeric.vergnet@tcnimes.fr',
          Numero: '06 09 50 48 52'
        },
        {
          id: 4,
          Nom: 'Decker',
          Prenom: 'Nathalie',
          Fonction: 'Secrétaire général',
          Photo: 'https://tcnimes.fr/wp-content/uploads/2023/01/nathalie-NB.jpg',
          Mail: 'nathalie.decker@tcnimes.fr',
          Numero: '06 37 34 02 37'
        },
        {
          id: 5,
          Nom: 'Brissart',
          Prenom: 'Astrid',
          Fonction: 'Trésorière',
          Photo: 'https://tcnimes.fr/wp-content/uploads/2023/01/astrid-NB.jpg',
          Mail: 'astrid.brissart@tcnimes.fr',
          Numero: '06 47 64 48 85'
        }
      ];
      

    return (
        <>
            <View style={styles.Fond}>
                <HeaderBar destination={'Accueil'} />
                <Text style={styles.Titre}>CONTACT</Text>
                <Image
                    source={require('../Ressources/waveJaune.png')}
                    style={styles.Wave}
                />
                <Text style={styles.text}>Le bureau actuel est en responsabilité depuis mai 2019, avec quelques évolutions.
Il s’appuie sur l’aide active de 7 autres bénévoles dans le comité directeur.</Text>
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
        textAlign: 'center',
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