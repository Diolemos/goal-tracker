import { useState } from 'react';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [userGoals, setUserGoals] = useState([])
  function goalInputHandler(enteredText){
   setEnteredGoalText(prev=>enteredText)
  };

  function addGoalHandler(){
    setUserGoals(prev=>[...userGoals, enteredGoalText])
  };

  return (
    <View style={styles.appContainer} >
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your studying goal'
        onChangeText={goalInputHandler}/>
      <Button title="Add your goal!" onPress={addGoalHandler}/>
     </View>
     <View style={styles.gaolsContainer}>
     {userGoals.map((goal)=><Text key={goal}>{goal}</Text>)}
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
    marginBottom:24,
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
    flex: 4
  }
});
