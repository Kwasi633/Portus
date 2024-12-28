
import { StyleSheet } from 'react-native';

const WelcomeStyles = (dimensions: { width: number; height: number }) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  
  logo: {
    alignSelf: "center",
    top: 70,
  },

  subContainer: {
    marginTop: 100,
    alignSelf: "center",
    width: dimensions.width * 0.6
 },
 Terms: {
  color: '#000',
  textAlign: 'center'
},
termsBox: {
  flexDirection: 'row',
  width: dimensions.width * 0.75,
},

descriptionContainer: {
    width: dimensions.width * 0.8,
    marginTop: 20,
    alignSelf: 'center'
},
link: {
  color: '#000',
  textDecorationLine: 'underline',
},
 title: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center'
 },
 header: {
  marginLeft: 10,
  marginTop: 40,
  width: dimensions.width * 0.7,
 },
 inputContainer: {
  alignSelf: 'center',
  //backgroundColor: 'red',
  marginTop: 100,
  width: dimensions.width * 0.95,
  marginBottom: 20
},
 input: {
  marginTop: 15,
  borderWidth: 1,
  borderColor: '#525252',
  padding: 10,
  borderRadius: 8,
  height: dimensions.height * 0.06,
  fontFamily: 'Poppins-Regular',
  color: "#000"
},

passwordInput: {
        marginTop: 15,
        borderWidth: 1,
        width: dimensions.width * 0.95,
        borderColor: '#525252',
        padding: 10,
        height: dimensions.height * 0.06,
        borderRadius: 8,
        fontFamily: 'Poppins-Regular',
        color: "#000"
      
},


passwordBox: {
    width: dimensions.width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center'
},

idCardBox: {
    width: dimensions.width * 0.9,
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: "space-between"
},
iconContainer: {
  width: dimensions.width * 0.2,
  height: '80%',
  position: 'absolute',
  right: -20,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center'
},
idTextBox: {
    alignSelf: 'center',
    width: dimensions.width * 0.7
},
idText: {
    color: "#d0d0d0",
    fontSize: 18
},

num: {
  marginTop: 15,
  width: dimensions.width * 0.8,
  backgroundColor: 'red',
  marginBottom: 5,
  height: 60,
  justifyContent: 'center',
},

 desc: {
    color: '#5A5A5A',
    fontSize: 12,
    textAlign: "center"
 },
 footerText: {
  fontSize: 15,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 25,
  color: '#9f9898'
},
footerLink: {
  color: '#000',
},

errorText: {
  color: 'red',
  fontSize: 12,
  marginTop: 5,
  marginLeft: 10,
},

footerBox: {
    position: 'absolute',
    bottom: 10,
    width: dimensions.width * 0.95,
    //marginTop: 10
},
scrollViewContent: {
  backgroundColor: '#121212',
    flexGrow: 1,
    paddingBottom: 50,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
});

export default WelcomeStyles;