import { useState } from 'react';
import { StyleSheet, View,
 FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [userGoals, setUserGoals] = useState([])
  

  function addGoalHandler(enteredGoalText){
    setUserGoals(prev=>[...prev, 
      {text: enteredGoalText,
      key: Math.random().toString()}
    ])
  };

  function deleteItemHandler(id){
    setUserGoals(previous=>{
      return previous.filter(item=>item.key!== id)
    })
  }

  return (
    <View style={styles.appContainer} >
     
      <GoalInput addGoalHandler={addGoalHandler}/>
     
    
     <View style={styles.gaolsContainer}>
     <FlatList 
     data={userGoals}
     renderItem={(itemData) =>{
      
      return (
        <GoalItem itemData={itemData.item} onDeleteItem={deleteItemHandler}
        id={itemData.item.key}/>
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
 
    
  
  gaolsContainer: {
    flex: 4
  },
  
});
