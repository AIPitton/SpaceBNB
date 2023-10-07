import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, FlatList, Pressable, Image } from 'react-native'
import styles from './styles.js'
import unitData from '../../assets/data/solarsystem.js'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import SearchSItemSeparator from '../../components/SearchSItemSeparator'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/Router'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type SearchSProps = NativeStackScreenProps<RootStackParamList, 'SearchR'>

const SearchS = ({ route }: SearchSProps) => {
  const { unit } = route.params
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [userInput, setUserInput] = useState('')
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    const filteredData = unitData.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    )
    setFilteredData(filteredData)
    setTimeout(() => {
      handleUserInput
    }, 200)
  }, [userInput])

  const handleUserInput = (text) => {
    setUserInput(text)
  }
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate('DetailsR', {
          unit: item,
        })
      }}
    >
      <View style={styles.flContainer}>
        <Text style={styles.flText}>{item.title}</Text>
        <View style={styles.flContaine}>
          <Image style={styles.flImage} source={item.image} />
        </View>
      </View>
    </Pressable>
  )
  return (
    <View style={styles.container}>
      <View style={styles.containe}>
        <View style={styles.contain1}>
          <Pressable onPress={() => setUserInput('')}>
            <FontAwesome6 name="delete-left" size={20} color={'#1B2B85'} />
          </Pressable>
        </View>
        <View style={styles.contain2}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            value={userInput}
            onChangeText={handleUserInput}
          />
        </View>
      </View>
      {userInput !== '' ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.ID}
          ItemSeparatorComponent={SearchSItemSeparator}
          renderItem={renderItem}
          disableScrollViewPanResponder
        />
      ) : null}
      <View style={styles.flFix} />
    </View>
  )
}

export default SearchS
