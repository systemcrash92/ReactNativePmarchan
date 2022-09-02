import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  containerInput:{
    marginTop : 50,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    
  },
  input:{
    width:'80%',
    borderBottomColor: '#4A306D',
    borderBottomWidth:1,
    height:40,
    color: '#212121',
    marginHorizontal:10
  },
 
});


export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.containerInput}>
        <TextInput placeholder='new task' style= {styles.input}/>
        <Button  title ='add' onPress={()=> console.warn('hola')}/>
      </View>
    </View>
  );
}

