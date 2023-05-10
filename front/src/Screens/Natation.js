import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import HeaderBar from '../Components/HeaderBar';
import Bottom from '../Route/Bottom';

const Natation = () => {
  return (
    <>  
    <ScrollView style={styles.Fond}>
    <HeaderBar destination={'Accueil'}/>
    <Text style={styles.Titre}>OJEM NATATION</Text>
      <Image
                source={require('../Ressources/waveJaune.png')}
                style={styles.Wave}
            />
            <Text style={styles.Titre2}>Combien de séances sont nécessaires ?</Text>
            <View style={styles.shadow}>
            <Image
              source={require('../Ressources/piscine.png')}
              style={styles.img}
            /></View>
            <Text style={styles.text}>Il est difficile de répondre à cette question, car comme nous l’avons déjà dit, chaque enfant a son propre rythme. Néanmoins, il est de coutume de compter entre 10 et 15 séances afin d’apprendre à nager. Par contre, les maîtres-nageurs recommandent de prendre plusieurs cours rapprochés dans le temps afin que l’enfant ne perde pas ses acquis d’une séance à l’autre. </Text>
      <Text style={styles.text}>L’enfant se verra remettre un diplôme et une médaille par le maître-nageur, au cours de ses 10 séances.</Text>
      <Text style={styles.Titre2}>Comment se déroulent les cours de natation à Ojem ?</Text>
      <View style={styles.shadow}>
      <Image
              source={require('../Ressources/piscine2.png')}
              style={styles.img}
            /></View>
            <Text style={styles.text}>Les cours de natation pour jeunes enfants se déroulent en cours individuels ou collectifs de 3 maximums. Les premières séances sont consacrées à la mise en place des repères de l’environnement dans lequel se trouve l’enfant. Chaque enfant a son rythme et le maître-nageur saura le respecter afin d’éviter tous problèmes. Le but étant de prendre du plaisir, c’est par ce moyen que l’enfant arrivera à progresser. Le maître-nageur est auprès des enfants et à leur écoute afin d’évoluer progressivement. De la tête sous l’eau aux premiers mouvements, l’enfant sera au centre de l’attention du maître-nageur. Si l’enfant dispose déjà de certaines bases, nous pouvons effectuer le perfectionnement des gestes dans l’eau. Nous disposons d’un bassin d’une hauteur d’un mètre avec un eau chauffée et filtrée. </Text>
            <Text style={styles.text}>Comme le dit si bien la Fédération Nationale de Natation : « Apprendre à nager permet l’acquisition d’un savoir-nager sécuritaire afin de se mouvoir dans l’eau avec aisance et en toute sécurité. C’est également le sésame pour pratiquer les activités aquatiques et nautiques en toute sécurité.»</Text>
      </ScrollView>   
    <Bottom/> 
        </>
  )
}

export default Natation

const styles = StyleSheet.create({
  text:{color: '#2D5F74',
  fontSize: 15,
  marginTop: 10,
  marginLeft: 35,
  marginRight: 35,
  fontWeight: '500'},
  
  shadow:{
    backgroundColor: 'white',
    width: 338,
    height: 224,
    borderRadius: 20,
    marginRight: 'auto', 
    marginLeft: 'auto', 
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
   
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },

  img: {
    width: 338,
    height: 224,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    
    
  },

  Titre2: {
    marginTop: 30,
    color: '#2D5F74',
    fontSize: 22,
    textAlign: 'center', 
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '900',
    marginBottom: 30

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