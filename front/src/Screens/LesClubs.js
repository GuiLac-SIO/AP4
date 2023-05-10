import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; 
import Bottom from '../Route/Bottom'; 
import { Ionicons } from '@expo/vector-icons';

const LesClubs = () => { 
    const navigation = useNavigation();
  return (
    <>  
    <View style={styles.Fond}>
    <View style={{ flexDirection: 'row',     marginTop: 37,}}>
    <Ionicons name="arrow-back-circle" size={40} color="white"  style={{ marginLeft : 30}} onPress={() => navigation.goBack()}/>
         </View>

      <Text style={styles.Titre}>LES CLUBS</Text>
      <Image
                source={require('../Ressources/waveJaune2.png')}
                style={styles.Wave}
            />

            <Text style={styles.text}>Nous partageons les mêmes valeurs et les mêmes animations sur nos trois clubs 
            <Text style={{ fontWeight: 'bold' }}> OJEM Jeunesse, OJEM OM Mickey</Text> et <Text style={{ fontWeight: 'bold' }}> HippOjem </Text>  
             pour les enfants de 2 ans et demi à 11 ans.</Text>

             <Text style={styles.text}>La piscine attend les jeunes nageurs à 
            <Text style={{ fontWeight: 'bold' }}> OJEM Jeunesse,</Text> pour des cours d’initiation et de nombreux délires aquatiques. </Text>
            

             <Text style={styles.text}>Vous pourrez rencontrer les ados autour d’ 
            <Text style={{ fontWeight: 'bold' }}> OJEM OM Mickey</Text> de 2 ans et demi à 16 ans .</Text>
             

       <Image
                source={require('../Ressources/plan.png')}
                style={styles.img}
            />
      
    </View>   
    <Bottom/> 
        </>
  )
}

export default LesClubs

const styles = StyleSheet.create({

    img:{
        
        width: '100%',
        height: 291,
        marginTop: 30,
    },


    text:{color: 'white',
    fontSize: 15,
    marginTop: 25,
    marginLeft: 35,
    marginRight: 35,
     },

    text2:{color: '#2D5F74',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    fontWeight: '900'},


    Fond: {
        backgroundColor: '#2D5F74',
        flex: 1,
    },
    Titre: {
        color: 'white',
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