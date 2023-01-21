
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer} >
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your studying goal'/>
      <Button title="Add your goal!"/>
     </View>
     <View style={styles.gaolsContainer}>
      <Text>Lits of Goals</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,


   
   },
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingBottom:24,
    borderBottomWidth: 1,
    
    
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccc',
    width: '60%',
    marginRight: 8,
    padding: 8,
  },
  gaolsContainer: {
    flex: 3
  }
});
