// navishka


import React,{useEffect} from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image
} from 'react-native';

export default function Login({navigation}) {

    return(
        <View style={styles.container}>

            
            <View>
                <Image 
                source={require('../assets/image/logo.png')}
                style={styles.logo}
                resizeMode ="stretch"></Image>
            </View>

             
              <View style={styles.action}>
              <TextInput placeholder="Your Email"
              style={styles.textInput}
              />
              </View>
            
              
              <View style={styles.action}>
            
              <TextInput placeholder="Your Password"
              style={styles.textInput}
              secureTextEntry = {true}
              />
            
              </View>
                 <TouchableOpacity  style={styles.appButtonContainer}
                 onPress={() => navigation.navigate('BookDetails')}
                 >
                    <Text style={styles.appButtonText}>Sign</Text>
                 </TouchableOpacity>

                 <TouchableOpacity  style={styles.appButtonContainer}
                 onPress={() => navigation.navigate('Signup')}
                 >
                    <Text style={styles.appButtonText}>Sign-Up</Text>
                 </TouchableOpacity>
              
        </View>
    )
}

const {height} =Dimensions.get("screen");
const heigth_logo =height* 0.28

const styles =StyleSheet.create({

    container:{
        flex:1,
        backgroundColor : '#fff',
        justifyContent:'center',
        alignItems: 'center'
      },

      action:{
        flexDirection : 'row',
        marginTop : 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        width: '90%'
      },
    
 logo:{
    width: heigth_logo,
    height : heigth_logo

  },





textSign: {
  fontSize: 18,
  fontWeight: 'bold'
},

appButtonContainer: {
    
    elevation: 8,
    width : '90%',
    marginTop : 10,
    backgroundColor: "#d35400",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})
