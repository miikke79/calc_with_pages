import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList} from 'react-native';

export default function History({route}) {

    const{ data } = route.params;

  return (

    <View style={styles.container}>

      <Text>History</Text>
      <FlatList 
      data={data}renderItem={({item}) =><Text>{item.key}</Text>} 
      keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    
  },

});