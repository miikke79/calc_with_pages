import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList} from 'react-native';

export default function Calculator({ navigation })  {

  const [topNumber, setTopNumber] = useState(0);
  const [bottomNumber, setBottomNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);
  
  const plusButtonPressed = () => { 
    const hist1 = topNumber + ' + ' + bottomNumber + ' = ' + (Number(topNumber)+Number(bottomNumber));
    setResult(hist1);
    setData([...data, {key: hist1}]);
    setTopNumber();
    setBottomNumber();
  };

  const minusButtonPressed = () => { 
    const hist2 = topNumber + ' - ' + bottomNumber + ' = ' + (topNumber-bottomNumber);
    setResult(hist2);
    setData([...data, {key: hist2}]);
    setTopNumber();
    setBottomNumber();
  };

  return (

    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <View>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={topNumber => setTopNumber(topNumber)} value={topNumber}/>
        <TextInput keyboardType='numeric' style={styles.input} onChangeText={bottomNumber => setBottomNumber(bottomNumber)} value={bottomNumber}/>
      </View>
      <View style={styles.buttoncontainer}>
        <View style={styles.button}>
        <Button onPress={plusButtonPressed} title="+" />
        </View>
        <View style={styles.button}>
        <Button onPress={minusButtonPressed} title="-" />
        </View>
        <View style={styles.historyButton}>
      <Button
        title="History"
        onPress={() => navigation.navigate('History',{ data })}
      />
    </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 200,
    alignItems: 'center',
    
  },

  history: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    
  },

  buttoncontainer : {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
    
  },

  button : {
    marginHorizontal:5,
    width:25,
  },

  historyButton : {
    marginHorizontal:5,
    width:95,
  },

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }

});