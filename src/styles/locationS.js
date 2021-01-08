import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainTitle: {
    color: '#372a0c',
    fontSize: 30,
    marginTop: windowHeight * 0.025,
    padding: windowWidth * 0.02,
    paddingBottom: windowHeight * 0.03,
  },
  secondTitle: {
    paddingTop: windowHeight * 0.02,
    color: '#372a0c',
    fontSize: 20,
    paddingLeft: windowWidth * 0.03,
  },
  description: {
    color: '#6da14b',
    marginRight: windowWidth * 0.01,
    fontSize: 15,
    padding: windowWidth * 0.03,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
  },
  section: {
    marginTop: windowHeight * 0.02,
  },
  detailsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth,
  },
  redirectText: {
    color: 'blue',
    padding: windowWidth * 0.02,
    marginLeft: windowWidth * 0.01,
    fontSize: 15,
    marginRight: windowWidth * 0.1,
  },
  sectionIcon: {
    width: windowWidth * 0.09,
    marginLeft: windowWidth * 0.02,
    paddingLeft: windowWidth * 0.03,
  },
  type: {
    paddingTop: windowHeight * 0.02,
    color: '#372a0c',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: windowWidth * 0.03,
  },
});
