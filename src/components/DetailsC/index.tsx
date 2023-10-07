import { View, ScrollView, Text, Image, Pressable, Alert } from 'react-native'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RootStackParamList } from '../../navigation/Router'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsCProps = PropsWithChildren<{ unit: string }>
const DetailsC = ({ unit }: DetailsCProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const [crewMembers, setCrewMembers] = useState(0)
  const [tickets, setTickets] = useState('')
  useEffect(() => {
    crewMembers == 1 ? setTickets('ticket') : setTickets('tickets')
  }, [crewMembers])
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cardContainer}>
          <Text style={styles.titleText}>{unit.title}</Text>
          <Image style={styles.detailsImage} source={unit.image} />
        </View>
        <View style={styles.cardContaine}>
          <View style={styles.membersTitleView}>
            <Text style={styles.membersText}>How many</Text>
          </View>
          <View style={styles.membersTitleView}>
            <Text style={styles.membersText}> crew members?</Text>
          </View>

          <View style={styles.row}>
            <Pressable
              onPress={() => setCrewMembers(Math.max(0, crewMembers - 1))}
            >
              <View style={styles.buttonsView}>
                <AntDesign name="minuscircle" size={20} color={'#000'} />
              </View>
            </Pressable>
            <View style={styles.buttonsView}>
              <Text style={styles.membersText}>{crewMembers}</Text>
            </View>
            <Pressable onPress={() => setCrewMembers(crewMembers + 1)}>
              <View style={styles.buttonsView}>
                <AntDesign name="pluscircle" size={20} color={'#000'} />
              </View>
            </Pressable>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.membersText}>
              Total price: $ {crewMembers * 36000}
            </Text>
          </View>
          <Pressable
            onPress={() => {
              Alert.alert(
                `${crewMembers} ${tickets} reserved for ${unit.title}`,
                `You have reserved ${crewMembers} ${tickets} for $ ${
                  crewMembers * 36000
                }`,
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'Agree',
                    onPress: () => {
                      navigation.navigate('HomeR', { unit: '' })
                    },
                    style: 'cancel',
                  },
                ]
              )
            }}
          >
            <View style={styles.pressable}>
              <Text style={styles.pressableText}>Reserve</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <ScrollView style={styles.svContainer}>
          <View>
            <Text style={styles.detailsText}>{unit.desc}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default DetailsC