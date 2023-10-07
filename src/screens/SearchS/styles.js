import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containe: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contain1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
  },
  contain2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingHorizontal: '2.5%',
  },
  textInput: {
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: '#BFDEFF',
  },
  flText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E52207',
  },
  flImage: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  flFix: {
    height: 100,
  },
  flContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width - 20,
    backgroundColor: '#8D9297',
    borderRadius: 30,
  },
  flContaine: {
    paddingVertical: 5,
  },
})

export default styles
