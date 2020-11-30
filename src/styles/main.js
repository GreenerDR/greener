import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#372A0B',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    paddingBottom: 20,
    color: '#CE9F20',
  },
  button: {
    backgroundColor: '#372A0B',
    justifyContent: 'center',
    width: width / 1.1,
    height: 60,
    borderColor: '#3E721E',
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 50,
    fontSize: 18,
  },
  iconsGuide: {
    width: 30,
    height: 30,
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
  cardView: {
    width: width / 1.1,
    height: height / 5.3,
    margin: 20,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#1F6A39',
    opacity: 0.9,
  },
  image: {
    width: width / 1.1,
    height: height / 5.3,
    borderRadius: 8,
    backgroundColor: '#1F6A39',
    opacity: 0.5,
  },
  ImageText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    left: 50,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: -30,
    marginHorizontal: 10,
    marginVertical: -80,
  },
});
