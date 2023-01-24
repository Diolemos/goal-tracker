import { StyleSheet,TextInput, Button, View, Modal } from "react-native"
import { useState } from "react"


export default function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
       };
    function addGoalHandler (){
        props.addGoalHandler(enteredGoalText)
        setEnteredGoalText('')
    }   
    return(

        <Modal visible={props.visible} animationType='slide'><View style={styles.inputContainer} >
        <TextInput style={styles.textInput} placeholder='Your studying goal' 
        onChangeText={goalInputHandler} value={enteredGoalText} />
         <Button title="Add your goal!" onPress={addGoalHandler}/>
        </View></Modal>
    )
}


const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: '#cccc',
        width: '60%',
        marginRight: 8,
        padding: 8,
      },
      inputContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth: 1,}
        
})