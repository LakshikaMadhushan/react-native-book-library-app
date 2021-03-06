import React,{useEffect} from 'react';
import { 
    View,  
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Image,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base'


export default function SignUp({navigation}) {

  


    return (
        <View style={styles.container}>

            
            
                <ScrollView style={{width:'100%'}}>
              <Form>
                 <Item style={styles.textFild}>
                   <Input  placeholder="Full Name" />
                 </Item>
                 <Item style={styles.textFild}>
                   <Input placeholder="Phone Number" />
                 </Item>
                 <Item style={styles.textFild}>
                   <Input placeholder="Email" />
                 </Item>
                 <Item style={styles.textFild}>
                   <Input placeholder="UserName" />
                 </Item>
                 <Item style={styles.textFild}>
                   <Input
                   secureTextEntry = {true}
                   placeholder="Password"/>
                 </Item>
                 <Item style={styles.textFild}>
                   <Input
                   secureTextEntry = {true}
                   placeholder="Confrom Password"/>
                 </Item>
             
            </Form>

            
                <LinearGradient
                colors={['#f39c12','#d35400']}
                style={styles.signIn}
                >
                  <Text style={[styles.textSign,{color:'#fff'}]}>
                    Sign Up
                  </Text>
                </LinearGradient>

                <TouchableOpacity
                
                onPress={() => navigation.navigate('Login')}
                    style={[styles.signIn, {
                        borderColor: '#d35400',
                        borderWidth: 1,
                        marginTop: 15
                }]}
                >
                    <Text
                  style={[styles.textSign,{color:'#d35400'}]}
                  >
                    Go Back
                  </Text>
                 
                </TouchableOpacity>
             
                </ScrollView>
            
        </View>
    )
}

const {height} =Dimensions.get("screen");
const heigth_logo =height* 0.20

const styles =StyleSheet.create({

    container:{
        flex:1,
        backgroundColor : '#fff'
      },
    
      header:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
      },
    
      footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
        paddingVertical:50,
        paddingHorizontal :30,
        justifyContent : 'center',
        alignItems: 'center'
    
      },

      logo:{
        width: heigth_logo,
        height : heigth_logo
      },

      action:{
        flexDirection : 'row',
        marginTop : 1,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 1
      },
      text_footer: {
        color: '#05375a',
        fontSize: 14,
        marginTop : 1,
    },
    textInput: {
      flex: 1,
      color: '#05375a',
    },

  button: {
    alignItems: 'center',
    marginTop: 50
  },

  signIn: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20
},

color_textPrivate: {
  color: 'grey'
},

textSign: {
  fontSize: 18,
  fontWeight: 'bold'
},

textFild:{
    width :'100%',
    height: 52,
  }

});

