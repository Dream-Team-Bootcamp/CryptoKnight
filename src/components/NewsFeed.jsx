import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/NewsItem.module.css';
import fetchCryptoPanicData from '../assets/functions/fetchNews.js';
import { ReactComponent as FlagEn } from '../assets/images/flags/gb.svg';
import { ReactComponent as FlagDe } from '../assets/images/flags/de.svg';
import { ReactComponent as FlagNl } from '../assets/images/flags/nl.svg';
import { ReactComponent as FlagEs } from '../assets/images/flags/es.svg';
import { ReactComponent as FlagFr } from '../assets/images/flags/fr.svg';
import { ReactComponent as FlagIt } from '../assets/images/flags/it.svg';
import { ReactComponent as FlagPt } from '../assets/images/flags/pt.svg';
import { ReactComponent as FlagRu } from '../assets/images/flags/ru.svg';

const newsOptionChoices = {
  filter: ['rising', 'hot', 'bullish', 'bearish', 'important', 'saved', 'new'],
  currencies: ['BTC', 'ETH', 'USDT', 'BNB', 'USDC', 'XRP', 'ADA', 'STETH', 'DOGE', 'MATIC', 'BUSD', 'SOL', 'DOT', 'LTC', 'SHIB', 'TRX', 'AVAX', 'DAI', 'UNI', 'custom'],
  regions: [
    { code: 'en', name: 'English', flag: <FlagEn /> },
    { code: 'de', name: 'German', flag: <FlagDe /> },
    { code: 'nl', name: 'Dutch', flag: <FlagNl /> },
    { code: 'es', name: 'Spanish', flag: <FlagEs /> },
    { code: 'fr', name: 'French', flag: <FlagFr /> },
    { code: 'it', name: 'Italian', flag: <FlagIt /> },
    { code: 'pt', name: 'Portuguese', flag: <FlagPt /> },
    { code: 'ru', name: 'Russian', flag: <FlagRu /> },
  ],
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
  const [customCurrency, setCustomCurrency] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoPanicData(newsOptions);
      setNewsItems(data);
    };

    fetchData();
  }, [newsOptions]);


// start of options container functions and rendering
const handleCustomCurrencyChange = (event) => {
  setCustomCurrency(event.target.value);
};

const handleCustomCurrencySubmit = (event) => {
  event.preventDefault();
  setNewsOptions({ ...newsOptions, currencies: customCurrency.toUpperCase() });

  setCustomCurrency('');
};

// ---------- Start of section 2 ----------

// Filters and regions section
const renderFilter = () => (
  <div className={styles.option}>
    <span className={styles.optionLabel}>Filter:</span>
    <div className={styles.optionChoices}>
      {newsOptionChoices.filter.map((option, index) => (
        <div key={index} className={`${styles.newsOptionGroup} ${newsOptions.filter === option ? styles.selected : ''}`} onClick={() => setNewsOptions({ ...newsOptions, filter: option })}>
          <span>{option}</span>
        </div>
      ))}
    </div>
  </div>
);

const renderRegions = () => (
  <div className={`${styles.newsOption} ${styles.regions}`}>
    <span className={styles.optionLabel}>Regions:</span>
    <div className={styles.optionChoices}>
      {newsOptionChoices.regions.map((region, index) => (
        <div key={index} className={`${styles.option} ${styles.flags} ${newsOptions.regions.code === region.code ? styles.selected : ''}`} onClick={() => setNewsOptions({ ...newsOptions, regions: region })}>
          {region.flag}
          <span>{region.name}</span>
        </div>
      ))}
    </div>
  </div>
);

// Render kinds and currencies
const renderKind = () => (
  <div className={styles.newsOption}>
    <span className={styles.optionLabel}>Kind:</span>
    <div className={styles.optionChoices}>
      {newsOptionChoices.kind.map((option, index) => (
        <button key={index} className={newsOptions.kind === option ? `${styles.option} ${styles.selected}` : styles.option} onClick={() => setNewsOptions({ ...newsOptions, kind: option })}>
          {option}
        </button>
      ))}
    </div>
  </div>
);

const renderCurrencies = () => {
  const firstHalfCurrencies = newsOptionChoices.currencies.slice(0, Math.ceil(newsOptionChoices.currencies.length / 2));
  const secondHalfCurrencies = newsOptionChoices.currencies.slice(Math.ceil(newsOptionChoices.currencies.length / 2));

  return (
    <div className={styles.newsOption}>
      <span className={styles.optionLabel}>Currencies:</span>
      <div className={styles.optionChoices}>
        <div className={styles.currencyOptions}>
          {firstHalfCurrencies.map((option, index) => (
            <button key={index} className={newsOptions.currencies === option ? `${styles.option} ${styles.selected}` : styles.option} onClick={() => setNewsOptions({ ...newsOptions, currencies: option })}>
              {option}
            </button>
          ))}
        </div>
        <div className={styles.currencyOptions}>
          {secondHalfCurrencies.map((option, index) => (
            <button key={index} className={newsOptions.currencies === option ? `${styles.option} ${styles.selected}` : styles.option} onClick={() => setNewsOptions({ ...newsOptions, currencies: option })}>
              {option}
            </button>
          ))}
          {renderCustomCurrencyInput()}
        </div>
      </div>
    </div>
  );
};

const renderCustomCurrencyInput = () => (
  <div className={styles.newsOption}>
    <form onSubmit={handleCustomCurrencySubmit}>
      <input type="text" placeholder="Enter custom currency" className={styles.customCurrencyInput} value={customCurrency} onChange={handleCustomCurrencyChange}/>
      <button type="submit" className={styles.customCurrencyButton}>
        Add
      </button>
    </form>
  </div>
);

// ---------- Start of section 3 ----------

const renderOptionsContainer = () => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsOptions}>

        <div className={styles.filterAndRegions}>
          <div className={`${styles.filters} ${styles.filterRow} ${styles.filter}`}>{renderFilter()}</div>
          <div className={`${styles.regions} ${styles.regionRow} ${styles.region}`}>{renderRegions()}</div>
        </div>

        <div className={styles.kindAndCurrencies}>
          <div className={`${styles.kinds} ${styles.kindRow} ${styles.kind}`}>{renderKind()}</div>
          <div className={`${styles.currencies} ${styles.currencyRow} ${styles.currency}`}>{renderCurrencies()}</div>
        </div>

      </div>
    </div>
    );
};


const renderNewsItemCurrencies = (item) => (
  <div className={styles.newsCurrencies}>
    <p>Currencies:</p>
    <div className={styles.currencyCards}>
      {item.currencies.map((currency) => (
        <div key={currency.code} className={styles.currencyCard}>
          <p>{currency.title}</p>
          <p>{currency.code}</p>
        </div>
      ))}
    </div>
  </div>
);

const renderNewsItem = (item) => {
  // Reformat the date and time
  const publishedDate = new Date(item.published_at);
  const formattedDate = publishedDate.toLocaleDateString();
  const formattedTime = publishedDate.toLocaleTimeString();

  return (
    <div className='newsItem'>
      {/* First Row - News Title */}>
      <div className={styles.newsItemRow}>
        <h3 className={styles.newsTitle}>{item.title}</h3>
      </div>

      {/* Second Row - Currencies and Published Date */}
      <div className={styles.newsItemRow}>
        {renderNewsItemCurrencies(item)}

        <div className={styles.publishedAt}>
          <p>Published at:</p>
          <div className={styles.publishedDateTime}>
            <p>{formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
        </div>
      </div>

      {/* Third Row - Type, Domain, Source, and Full Article Link */}
      <div className={styles.newsItemRow}>
        <div className={styles.newsDetails}>
          <p>Type: {item.kind}</p>
          <p>Domain: {item.domain}</p>
          <p>Source: {item.source.title}</p>
        </div>
        <div className={styles.fullArticle}>
          <div className={styles.newsUrl}>
            <a href={item.url} target="_blank" rel="noreferrer" className={styles.newsUrlButton}>
              <div>
                <p>Full Article</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

return (
  <div className={styles.newsContainer}>
    {renderOptionsContainer()}
    <div className={styles.newsFeeditems}>
      <div className={styles.newsItems}>
        {newsItems && newsItems.map((item) => renderNewsItem(item))}
      </div>
    </div>
  </div>
);

}

export default NewsFeed;
