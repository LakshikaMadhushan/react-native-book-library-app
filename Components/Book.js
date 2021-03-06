import React, {useState} from 'react';
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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LottieView from 'lottie-react-native';


export default function Book({navigation}) {

    const [bookState, setBookState] = useState({

        tableHead: ['ISBM', 'Name', 'Publi', 'Author','Delete'],
        tableData: [
        ['1', '2', '3', '4', '5'],
        ['1', '2', '3', '4', '5'],
        ['1', '2', '3', '4', '5'],
        ['1', '2', '3', '4', '5'],
        ]
    });

    const state = bookState;
    const deleteElement = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={tableStyles.btn}>
          <Text style={tableStyles.btnText}>Delete</Text>
        </View>
      </TouchableOpacity>
    )

    const updateElement = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={tableStyles.btn}>
          <Text style={tableStyles.btnText}>Update</Text>
        </View>
      </TouchableOpacity>
    )

     return (
        <View style={styles.container}>
            
        <StatusBar backgroundColor='#fff' barStyle="light-content"/>
        

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


          <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={bookState.tableHead} style={tableStyles.head} textStyle={tableStyles.text}/>
          {
            bookState.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={tableStyles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? deleteElement(cellData, index) : cellData} textStyle={tableStyles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
          <View style={{justifyContent:'center',alignItems: 'center'}}>
           <LottieView source={require('../assets/image/34490-book-animation.json')} autoPlay loop style={{height: 250, alignItems: 'center'}}/>
          </View>
        </View>
     )
}


// export default book;

const styles =StyleSheet.create({

      container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff',
         
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
    paddingBottom : 15
    },
    
    textSign: {
    fontSize: 18,
    fontWeight: 'bold'
    }
    });


  const tableStyles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});