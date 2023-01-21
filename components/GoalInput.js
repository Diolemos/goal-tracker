import { StyleSheet,TextInput } from "react-native"
export default function GoalInput(props){

    return(<TextInput style={styles.textInput} placeholder='Your studying goal'
    onChangeText={props.goalInputHandler}/>)
}


const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: '#cccc',
        width: '60%',
        marginRight: 8,
        padding: 8,
      },
})