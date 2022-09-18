import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList} from 'react-native';

export default function History({route}) {

    const{ data } = route.params;

  return (

    <View style={styles.container}>
      <View style={styles.history}>
      <Text>History</Text>
      <FlatList 
      data={data}renderItem={({item}) =><Text>{item.key}</Text>} 
      keyExtractor={(item, index) => index.toString()}
      />
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

  container2: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
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
    marginHorizontal:20,
    width:25,
  },

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }

});