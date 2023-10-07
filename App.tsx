import 'react-native-gesture-handler'
import React from 'react'
import Router from './src/navigation/Router'
import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Remote debugger'])
const isHermes = () => !!global.HermesInternal
const App = () => {
  return <Router />
}
export default App
