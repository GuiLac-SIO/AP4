import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react' 
import Personne from '../Data/Data'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Bottom from '../Route/Bottom';
const MesNotifs = () => {
    const navigation = useNavigation();
    const firstPerson = Personne[0];
  return (
    <> 
    <View style={styles.Fond}>
 
    <View style={{ flexDirection: 'row',     marginTop: 37,}}> 
        <Ionicons name="arrow-back-circle" size={40} color="#00A0C6"  style={{ marginLeft : 30}} onPress={() => navigation.goBack()}/>
        <Image
                    source={{ uri: firstPerson.Photo }}
                    style={styles.imgProfil}
                />
    </View>


    
        </View>
    <Bottom />
    </>
  )
}

export default MesNotifs

const styles = StyleSheet.create({
    Fond: {
        backgroundColor: 'white',
        flex: 1,
      },
      imgProfil: {
   
        marginLeft: 250,
        width: 46,
        height: 46,
        borderRadius: 135,
        backgroundColor: 'black',
    },
    
})