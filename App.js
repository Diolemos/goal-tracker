import { useState } from 'react';
import { StyleSheet, Text, View,
  Button, TextInput, 
  ScrollView,FlatList } from 'react-native';

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
      <TextInput style={styles.textInput} placeholder='Your studying goal'
        onChangeText={goalInputHandler}/>
      <Button title="Add your goal!" onPress={addGoalHandler}/>
     </View>
     <View style={styles.gaolsContainer}>
     <FlatList 
     data={userGoals}
     renderItem={(itemData) =>{
      
      return (
        <View  style={styles.goalItem}> 
          <Text style={styles.goalText}>
            {itemData.item.text}
          </Text> 
        </View>
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
  textInput:{
    borderWidth: 1,
    borderColor: '#cccc',
    width: '60%',
    marginRight: 8,
    padding: 8,
  },
  gaolsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding:8,
    borderRadius: 6,
    backgroundColor: 'teal',
    
  },
  goalText:{
    color:'white'
  }

});
