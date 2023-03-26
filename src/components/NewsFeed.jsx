import React, { useState, useEffect } from 'react';
import { fetchCryptoPanicData } from '..functions/fetchNews.js';

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newsOptions = {
        filter: 'rising',
        currencies: 'ETH',
        regions: 'en,de',
        kind: 'news',
      };

      const data = await fetchCryptoPanicData(newsOptions);
      setNewsItems(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {newsItems.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
