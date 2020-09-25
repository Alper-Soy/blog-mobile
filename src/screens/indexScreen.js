import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BlogContext from './context/BlogContext';

const indexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <FlatList
        keyExtractor={(blogPost) => blogPost.title}
        data={blogPosts}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default indexScreen;
