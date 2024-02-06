import {useState, useEffect} from 'react';
import {Alert, Button, FlatList, StyleSheet, View} from 'react-native';
import GoalItem from '../widgets/GoalItem';
import GoalInput from '../widgets/GoalInput';
import DummyData from '../dummy_data/DummyData';
import {StatusBar} from 'expo-status-bar';
export default function App() {
  const [getInput, setInput] = useState('');
  const [modalIsVisible, setModalVisible] = useState(false);
  const [getGoalsList, setGoals] = useState(DummyData);

  function takeInput(enteredText) {
    setInput(enteredText);
  }
  function showModelSheet() {
    setModalVisible(true);
  }
  function hideModelSheet() {
    setModalVisible(false);
  }
  useEffect(() => {
    console.log(getGoalsList.length);
  }, [getGoalsList]);

  function addToList() {
    if (getInput.length != 0) {
      let newItem = {title: getInput, key: Math.random().toString()};
      setGoals(currentList => [...currentList, newItem]);
      setInput('');
      setModalVisible(false);
    } else {
      Alert.alert('Fill input');
    }
  }
  const Separator = () => <View style={styles.separator} />;
  function deleteItem(id) {
    setGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.key !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" onPress={showModelSheet} />
        {modalIsVisible && (
          <GoalInput
            takeInput={takeInput}
            getInput={getInput}
            onAddGoal={addToList}
            onCancel={hideModelSheet}
            visible={modalIsVisible}
          />
        )}
      <FlatList
        style={styles.appContainer}
        data={getGoalsList}
        renderItem={({item}) => (
          <GoalItem
            enteredGoalText={item.title}
            id={item.key}
            onDeleteItem={deleteItem}
          />
        )}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={Separator}
        alwaysBounceVertical="true"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  sText: {
    marginTop: 50,
  },
  sectionStyle: {
    backgroundColor: '#F6F6F6',
    alignContent: 'center',
  },
  separator: {
    marginTop: 10,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});
