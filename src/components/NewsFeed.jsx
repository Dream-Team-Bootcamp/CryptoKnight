import React, { useState, useEffect } from 'react';
import fetchCryptoPanicData from '../assets/functions/fetchNews.js';

// Summary of newsOptionChoices:
// Purpose 1: A reference for modifying the front end UI.
// Purpose 2: Store available options that can be passed to the fetchCryptoPanicData function.
// Available filters:     rising, hot, bullish, bearish, important, saved, new
// Available currencies:  BTC, ETH, USDC - Choose up to 50 using the standard currency codes
// Available regions:     en (English), de (Deutsch), nl (Nederlands), es (Español),
//                        fr (Français), it (Italiano), pt (Português), ru (Русский)
// Available kinds:       news, media, all (both news and media)

const newsOptionChoices = {
  filter: ['rising', 'hot', 'bullish', 'bearish', 'important', 'saved', 'new'],
  currencies: ['BTC', 'ETH', 'USDT', 'BNB', 'USDC', 'XRP', 'ADA', 'STETH', 'DOGE', 'MATIC', 'BUSD', 'SOL', 'DOT', 'LTC', 'SHIB', 'TRX', 'AVAX', 'DAI', 'UNI'],
  regions: ['en', 'de', 'nl', 'es', 'fr', 'it', 'pt', 'ru'],
  kind: ['news', 'media', 'all'],
};

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [newsOptions, setNewsOptions] = useState({
    filter: 'rising',
    currencies: 'ETH',
    regions: 'en',
    kind: 'news',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoPanicData(newsOptions);
      setNewsItems(data);
    };

    fetchData();
  }, [newsOptions]);

  const handleOptionChange = (event, optionType) => {
    setNewsOptions({ ...newsOptions, [optionType]: event.target.value });
  };

  // this function will take a the item object as an argument and returns a JSX element with the desired data
  const renderNewsItem = (item) => {
    return (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Kind: {item.kind}</p>
        <p>Domain: {item.domain}</p>
        <p>Source: {item.source.title}</p>
        <p>Published at: {item.published_at}</p>
        <p>URL: <a href={item.url} target="_blank" rel="noreferrer">{item.url}</a></p>
        <p>Currencies:</p>
        <ul>
          {item.currencies.map((currency) => (
            <li key={currency.code}>{currency.title} ({currency.code})</li>
          ))}
        </ul>
        <hr />
      </div>
    );
  };


  return (
    <div>
      <div>
        {Object.keys(newsOptionChoices).map(optionType => (
          <div key={optionType}>
            <label>{optionType}:</label>
            <select value={newsOptions[optionType]} onChange={event => handleOptionChange(event, optionType)}>
              {newsOptionChoices[optionType].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div>
        <h1>    newsfeed placeholder</h1>
        {newsItems && newsItems.map((item) => renderNewsItem(item))}
      {/* {newsItems.results && newsItems.results.map((item) => renderNewsItem(item))} */}
      </div>
      </div>
  );
};

export default NewsFeed;