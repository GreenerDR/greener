import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    // flex: 1,
    marginTop: -30,
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#372A0B',
    alignSelf: 'flex-start',
  },
  subtitle: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 21,
    color: '#8AC53E',
    textAlign: 'center',
  },
  contactContainer: {
    alignItems: 'flex-start',
  },
  contact: {
    color: '#372A0B',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  contactEmail: {
    color: '#372A0B',
    fontSize: 15,
    marginLeft: 40,
    marginTop: -29,
  },
  button: {
    width: 300,
    height: 50,
    borderColor: '#372A0B',
    borderRadius: 8,
    marginTop: 60,
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#372A0B',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 9,
    fontSize: 18,
  },
  iconGuide: {
    marginBottom: -28,
    alignSelf: 'flex-end',
    marginVertical: -28,
  },
});
