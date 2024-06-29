import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getNews} from '../NewsService';
// react hooks

const HomeScreens = props => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetNews = async () => {
    setLoading(true);
    const news = await getNews();
    setNews(news);
    setLoading(false);
  };

  const renderItem = ({item}) => {};

  return (
    <View>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onRefresh={onGetNews}
        refreshing={loading}
      />
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
