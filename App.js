import { useState } from 'react';
import { StyleSheet, View,
  Button, TextInput,FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [userGoals, setUserGoals] = useState([])
  function goalInputHandler(enteredText){
   setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    setUserGoals(prev=>[...prev, 
      {text: enteredGoalText,
      key: Math.random().toString()}
    ])
  };

  return (
    <View style={styles.appContainer} >
     <View style={styles.inputContainer}>
      <GoalInput goalInputHandler={goalInputHandler}/>
      <Button title="Add your goal!" onPress={addGoalHandler}/>
     </View>
     <View style={styles.gaolsContainer}>
     <FlatList 
     data={userGoals}
     renderItem={(itemData) =>{
      
      return (
        <GoalItem itemData={itemData.item.text}/>
      )
     }} />
    
         
  
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
  
  gaolsContainer: {
    flex: 4
  },
  
});
