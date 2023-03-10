import { StyleSheet,View, Text, Pressable } from "react-native"
export default function GoalItem(props){


    return (
      <View style={styles.goalItem}>
      <Pressable android_ripple={{color: "#dddddd"}} onPress={props.onDeleteItem.bind(this, props.id)}>
      
        <Text style={styles.goalText}>{props.itemData.text}</Text>
     
    </Pressable>
    </View>)
    
   
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
       
        borderRadius: 6,
        backgroundColor: 'teal',
        
      },
      goalText:{ padding:8,
        color:'white'
      }
    
});