import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.modelContainer}>
        <Image  style ={styles.image}source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.inputConatiner}
          placeholder="Goal!"
          onChangeText={props.takeInput}
          value={props.getInput}
        />
        <View style={styles.row}>
          <Button onPress={props.onAddGoal} title="Add Goal"></Button>
          <Button onPress={props.onCancel} title="Cancel"></Button>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  modelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    backgroundColor:'#311b6b'
  },
  inputConatiner: {
    width: '70%',
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    borderWidth: 1,
    marginTop: 16,
    borderColor: 'grey',
    backgroundColor:'white'
  },
  image:{
    height: 100,
    width:100,
  }
});
