import { View } from 'react-native'
import React from 'react'
import DetailsC from '../../components/DetailsC'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/Router'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsSProps = NativeStackScreenProps<RootStackParamList, 'DetailsR'>

const DetailsS = ({ route }: DetailsSProps) => {
  const { unit } = route.params
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View>
      <DetailsC unit={unit} />
    </View>
  )
}

export default DetailsS
