import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundGuides: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
         opacity: 0.7,
      },
      title: {
        // flex: 1,
        marginTop: 15,
        textAlign: 'justify',
        fontWeight: 'bold',
        fontSize: 23,
        color: '#372A0B',
        alignSelf: 'center',
      },
      img: {
        width: 330,
        height: 200,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 8,
        // borderColor: '#3E721E',
        // borderWidth: 3,
      },
      containerGuides: {
        paddingStart: 20,
        paddingEnd: 20,
      },
      containerTandF: {
        paddingHorizontal: 15,
        marginTop: -30,
        borderRadius: 8,
        borderColor: '#3E721E',
        borderWidth: 3,
        elevation: 9,
        backgroundColor: '#fff',
      },
      // step: {
      //   marginTop: 30,
      //   fontWeight: 'bold',
      //   fontSize: 23,
      //   color: '#8AC53E',
      //   alignSelf: 'flex-start',
      // },
      stepText: {
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 10,
        marginTop: 20,
        marginHorizontal: -15,
        fontSize: 15,
        color: '#372A0B',
        // color: '#fff',
        alignSelf: 'center',
        textAlign: 'justify',
        borderRadius: 8,
        borderColor: '#3E721E',
        borderWidth: 3,
        backgroundColor: '#fff',
        elevation: 9,
      },
      link: {
          fontSize: 15,
        //   color: '#8cc63f',
        color: '#fff',
          fontWeight: 'bold',
          borderRadius: 8,
          borderColor: '#3E721E',
          borderWidth: 3,
          backgroundColor: '#3E721E',
          elevation: 9,
          marginTop: 20,
          paddingBottom: 10,
          paddingTop: 10,
          textAlign: 'center',
      }
});
