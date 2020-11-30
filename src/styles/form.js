import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  label: {
    width: width / 1.2,
    height: height / 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    padding: 15,
    fontSize: 15,
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: '#372A0B',
    backgroundColor: '#3E721E',
    elevation: 1,
  },
  container: {
    alignSelf: 'center',
  },
  input: {
    color: '#372A0B',
    height: 30,
    width: 300,
    marginHorizontal: 11,
    marginTop: 10,
    marginVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#372A0B',
  },
  Profileimage: {
    width: width / 3,
    height: height / 6,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
});
