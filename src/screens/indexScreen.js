import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View style={{ flex: 1 }}>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        keyExtractor={(blogPost) => blogPost.title}
        data={state}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => console.log(item.id)}>
                <Feather style={styles.icon} name='trash-2' />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
});
export default IndexScreen;
