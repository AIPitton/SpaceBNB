import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8D9297',
    borderRadius: 30,
    width: Dimensions.get('screen').width - 20,
    marginLeft: 10,
    marginVertical: 10,
    height: Dimensions.get('screen').height * 0.75,
  },
  cardContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E52207',
  },
  detailsImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B1B1B',
  },
  svContainer: {
    top: 0,
    height: Dimensions.get('screen').height * 0.5,
    width: Dimensions.get('screen').width * 0.9,
    position: 'absolute',
  },
  detailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height * 0.3,
  },
  row: {
    flexDirection: 'row',
  },
  cardContaine: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8D9297',
    width: Dimensions.get('screen').width * 0.5,
    borderRadius: 20,
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7F434',
    width: Dimensions.get('screen').width * 0.3,
    borderRadius: 20,
    height: 40,
  },
  pressableText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  membersText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1B1B1B',
  },
  buttonsView: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  membersTitleView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
})

export default styles
