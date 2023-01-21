import { StyleSheet,View, Text } from "react-native"
export default function GoalItem(props){


    return (<View  style={styles.goalItem}> 
        <Text style={styles.goalText}>
          {props.itemData}
        </Text> 
      </View>)
}

const styles = StyleSheet.create({
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