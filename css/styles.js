import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 340,
    height: 60,
    borderColor: '#3E721E',
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#372A0B',
    fontWeight: 'bold',
    marginHorizontal: 60,
    fontSize: 18,
  },
  seeAll: {
    fontSize: 18,
    textAlign: 'right',
    marginHorizontal: 30,
    color: '#CE9F20',
    marginBottom: 150,
  },
  iconsGuide: {
    width: 30,
    height: 30,
    tintColor: '#8BC63F',
    // marginTop: -30,
    marginBottom: -28,
    marginHorizontal: 15,
    marginVertical: -28,
    resizeMode: 'contain',
  },
  iconGuide: {
    width: 30,
    height: 30,
    marginBottom: -28,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    marginVertical: -28,
  },
});
