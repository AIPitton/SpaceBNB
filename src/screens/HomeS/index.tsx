import { Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/Router'

type HomeSProps = NativeStackScreenProps<RootStackParamList, 'HomeR'>

const HomeS = ({ navigation }: HomeSProps) => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('SearchR', { unit: '' })}
        // onPress={() => console.warn('first')}
      >
        <Fontisto name="search" size={20} color={'#1B2B85'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <Text style={styles.title}>Go Far</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('SearchR', { unit: '' })}
        >
          <Text style={styles.buttonText}>Explore our solar system</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeS
