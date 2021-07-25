import React, {useState, useEffect} from 'react';

import {ActivityIndicator, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

const LoadingIndicatorView = () => (
  <ActivityIndicator
    color="#ff0000"
    size="large"
    style={styles.ActivityIndicatorStyle}
  />
);

const ArticleScreen = props => {
  const [article, setArticle] = useState('');

  useEffect(() => {
    const article = props.route.params.article;
    setArticle(article);
  }, []);

  return (
    <WebView
      originWhitelist={['*']}
      renderLoading={LoadingIndicatorView}
      source={{uri: article.url}}
      startInLoadingState={true}
    />
  );
};

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  nullUrl: {
    color: 'gray',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ArticleScreen;
