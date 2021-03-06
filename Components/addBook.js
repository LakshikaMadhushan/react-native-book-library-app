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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



export default function addBook({navigation}) {
    return(
        <View style={styles.container}>
            <Form>
                 <Item style={styles.textFild}>
                   <Input  placeholder="Book ISBM" />
                 </Item>
                 <Item style={styles.textFild}>
                   <Input placeholder="Book Name" />
                 </Item>
                 <Item style={styles.textFild}>
                   <Input placeholder="Publisher" />
                 </Item>
                 <Item style={styles.textFild}>
                   <Input placeholder="Auther" />
                 </Item>
                 
            </Form>

            <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Add New Book')}>
        <LinearGradient
        colors={['#f39c12','#d35400']}
        style={styles.signIn}
        >
        <Text>Add Book</Text>
        <MaterialIcons 
        name="add"
        color="#fff"
        size={20}
        />
        </LinearGradient>
      </TouchableOpacity>
      </View>
        </View>
    )
}


const styles =StyleSheet.create({

    container:{
        flex:1,
        backgroundColor : '#fff',
        justifyContent:'center',
        alignItems: 'center'
      },

    textFild:{
    width :'100%',
    height: 52,
    },

    signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
    },
    
    button: {
    alignItems: 'flex-end',
    paddingTop : 20
    },
    
    textSign: {
    fontSize: 18,
    fontWeight: 'bold'
    }

});
