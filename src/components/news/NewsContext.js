import React, {createContext, useState} from 'react';

export const NewsContext = createContext();

export const NewsProvider = props => {
  const {children} = props;

  const [news, setNews] = useState([]);
  return (
    <NewsContext.Provider value={{news, setNews}}>
      {children}
    </NewsContext.Provider>
  );
};
