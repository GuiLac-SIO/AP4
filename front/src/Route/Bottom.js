import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Bottom = () => {
    const { navigate } = useNavigation()
  return (
    <View style={styles.Fond}>
    <View style={ styles.item }>
    <Entypo style={styles.marginHome}  name="home" size={35} color="#2D5F74" onPress={() => navigate('Accueil')} />
    <FontAwesome style={{marginTop:5}}  name="calendar" size={35} color="#2D5F74" onPress={() => navigate('Reservation')} />
    <MaterialCommunityIcons  style={styles.marginProfil} name="account" size={40} color="#2D5F74" onPress={() => navigate('Profil')}/>
     
    </View>
    <View style={styles.item2}> 
        <Text style={styles.text} onPress={() => navigate('Accueil')}>Accueil </Text> 
        <Text style={styles.textReservation}onPress={() => navigate('Reservation')} >Reservation</Text>
        <Text style={styles.textProfil} onPress={() => navigate('Profil')}>Profil</Text>
    </View>
    </View>

  )
}

export default Bottom

const styles = StyleSheet.create({
    Fond: {
        backgroundColor: 'white',
        flex: 0,
    },

    item2:{
        flexDirection: 'row',
        
        
     
        
    },

    shadow:{
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowColor: '#000000',
        elevation: 4,
    },
    item: { 
        backgroundColor: '#FFFFFF',
        height: 40,
        flexDirection: 'row',
      
         
        
      },

    marginHome:{
        marginTop:5,
        marginLeft : 30,
        marginRight : 115,
    },
    
    marginProfil:{
        marginTop:5,
        marginLeft : 127,
    },

    text:{ 
        color : '#2D5F74',
        marginLeft : 27,
         
    },

    textReservation:{ 
        color : '#2D5F74',
        marginLeft : 87,
    },

    textProfil:{ 
        color : '#2D5F74',
        marginLeft : 103,
    }

})