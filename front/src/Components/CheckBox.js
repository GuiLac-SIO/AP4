import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from 'react';

const CheckBox = ({Taille}) => {
    const [checked, setChecked] = useState(false); 
  return (
    <View>
      {checked ? (
      <MaterialCommunityIcons  name="checkbox-marked" size={Taille} color="#00A0C5" onPress={() =>  setChecked(false)} />
    ) : (
      <MaterialCommunityIcons name="checkbox-blank-outline" size={Taille} color="#00A0C5" onPress={() => setChecked(true)}/>
    )}
    </View>
  )
}

export default CheckBox

const styles = StyleSheet.create({})