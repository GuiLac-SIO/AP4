import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react' 
import Bottom from '../Route/Bottom';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HeaderBar from '../Components/HeaderBar';
import Personne from '../Data/Data';
import { useApp } from '../Provider/app.provider';

const Enfant = () => { 
    const { navigate } = useNavigation() 
    const { Enfant } = useApp();
    const RenderChildren = ({ children }) => (
        <View>
          {children.map((child, index) => (
            <TextInput style={styles.input}    key={index} >  {child.enf_nom} {child.enf_prenom}</TextInput>
          ))}
        </View>
      );
      
      
      
    return (
        <>
            <View style={styles.Fond}>
            <HeaderBar destination={'Accueil'}/>
            <View style={{marginTop: 40}}></View>

            <RenderChildren children={Enfant} />

         
             
             
            <Ionicons style={styles.add} name="add-circle-outline" size={40} color="grey"  onPress={() => navigate('AddEnfant')}/>
            </View>
            <Bottom/>
        </>

    )
}

export default Enfant

const styles = StyleSheet.create({


    add:{
        marginTop:60,
        marginRight:'auto',
        marginLeft:'auto'
    },

    input: {
        color: 'black',
        borderColor: '#2D5F74',
       
        width: 328,
        borderRadius: 17,
        margin: 12,
        borderWidth: 1,
        padding: 8,
        textAlign:'left',
        marginTop: 10,
        fontSize: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 8,
    },

    Fond: {
        backgroundColor: 'white',
        flex: 1,
    },
    exit:{
        marginLeft : 320,
        marginTop: 37,
        marginBottom: 50,
    },
})