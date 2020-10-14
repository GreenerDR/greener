import { StyleSheet , Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        width: windowWidth,
        height: windowHeight,
      },
      mapStyle: {
        width: windowWidth,
        height: windowHeight,
      },
      actionComponents: {
        alignItems: 'center',
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        marginTop: windowHeight * 0.1,
      },
      list: {
        position: 'absolute',
        margin: windowHeight * 0.055,
        width: '100%',
      },
      item: {
        padding: 10,
        marginRight: windowWidth * 0.01,
        marginTop: windowHeight * 0.015,
        backgroundColor: '#00BCD4',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#372a0c',
        height: windowHeight * 0.06,
        marginLeft: windowWidth * 0.01,
      },
      listButttonView: {
        alignItems: 'center',
        position: 'absolute',
        bottom: windowHeight * 0.005,
        height: windowWidth * 0.15,
        left: windowWidth * 0.48,
      },
      touchableView: {
        flexDirection: 'row',
      },
      imgMenuList: {
        marginRight: windowWidth * 0.03,
      },
      listButtton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 2,
        borderColor: '#372a0c',
        borderRadius: 15,
      },
      selectedOption: { color: '#fff' },
      notSelectedOption: { color: '#000000' },
      noInternetScreen: {
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
      noInternetContainer: {
        marginTop: windowHeight * 0.35,
        marginBottom: windowHeight * 0.35,
        marginRight: windowWidth * 0.05,
        marginLeft: windowWidth * 0.05,
      },
      bottomSheet: {
        backgroundColor: 'white',
        width: windowWidth,
        height: windowHeight*0.50,
        padding: windowWidth*0.016,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imgCloseMenuList:{
        justifyContent: 'center',
        alignItems: 'center',
      }
    });