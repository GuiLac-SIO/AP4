import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const HeaderBar = ({destination}) => {
  const { navigate } = useNavigation()
    const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row',     marginTop: 37,}}> 
        <Ionicons name="arrow-back-circle" size={40} color="#00A0C6"  style={{ marginLeft : 30}} onPress={() => navigation.goBack()}/>
        <Entypo style={{marginLeft: 250}} name="cross" size={50} color="#00A0C6" onPress={() => navigate(destination)} />
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({})