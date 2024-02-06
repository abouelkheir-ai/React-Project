import {StyleSheet, View, Text, Pressable} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.sectionStyle}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.inputText}>{props.enteredGoalText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  inputText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  sectionStyle: {
    marginTop: 10,
    backgroundColor: '#F6F6F6',
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default GoalItem;
