import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/NewsFeed.module.css';
import fetchCryptoPanicData from '../assets/functions/fetchNews.js';
import classNames from 'classnames';
import { ReactComponent as FlagEn } from '../assets/images/flags/gb.svg';
import { ReactComponent as FlagDe } from '../assets/images/flags/de.svg';
import { ReactComponent as FlagNl } from '../assets/images/flags/nl.svg';
import { ReactComponent as FlagEs } from '../assets/images/flags/es.svg';
import { ReactComponent as FlagFr } from '../assets/images/flags/fr.svg';
import { ReactComponent as FlagIt } from '../assets/images/flags/it.svg';
import { ReactComponent as FlagPt } from '../assets/images/flags/pt.svg';
import { ReactComponent as FlagRu } from '../assets/images/flags/ru.svg';

const newsOptionChoices = {
  filter: ['rising', 'hot', 'bullish', 'bearish', 'important', 'new'],
  currencies: ['BTC', 'ETH', 'USDT', 'BNB', 'USDC', 'XRP', 'ADA','LINK','STETH','DOGE', 'MATIC', 'BUSD', 'SOL', 'DOT', 'LTC', 'SHIB', 'TRX', 'AVAX', 'DAI', 'UNI'],
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

// removed 'saved' fro newsOptionChoices.filter as it's not available on free account

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
{/* <div className={`${styles.filterCardImage}`}>{newsOptionChoices.filterIcons[index]}</div> */}

const renderFilter = () => (
  <div className={`${styles.newsOption} ${styles.filter}`}>
    <div className={`${styles.optionLabelContainer}`}>
      <span className={`${styles.optionLabel}`}>Filter:</span>
      <div className={`${styles.optionChoices} ${styles.filterRow} ${styles.filterCardsContainer}`}>
        {newsOptionChoices.filter.map((option, index) => (
        <div
        key={option} className={`${styles.newsOptionGroup}
        ${newsOptions.filter === option ? styles.selected : ''}`}
        onClick={() => setNewsOptions({ ...newsOptions, filter: option })}>
          <div className={`${styles.filterCard}`}>
          <div className={`${styles.filterCardTitle}`}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
  </div>
);


const renderRegions = () => (
  <div className={styles.newsOption}>
    <div className={styles.optionLabelContainer}>
      <span className={styles.optionLabel}>Regions:</span>
    </div>
    <div className={`${styles.regionOptionsContainer} ${styles.regionOptionGroup}`}>
      <div className={styles.newsOptionChoices}>
        {newsOptionChoices.regions.map((region) => (
          <div
          key={region.code} className={`${styles.newsOptionGroup}
          ${styles.flags} ${newsOptions.regions.code === region.code ? styles.selected : ''}`}
          onClick={() => setNewsOptions(
            { ...newsOptions, regions: region })}>
              {region.flag}
              <span>
                {region.code}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);


const renderKinds = () => (
  <div className={styles.newsOption}>
    <div className={styles.optionLabelContainer}>
      <span className={styles.optionLabel}>Kind:</span>
      <div className={styles.newsOptionChoices}>
        {newsOptionChoices.kind.map((option, index) => (
          <button key={index} className={`${styles.newsOptionGroup} ${newsOptions.kind === option ? styles.selected : ''}`} onClick={() => setNewsOptions({ ...newsOptions, kind: option })}>
            {option}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const renderCurrencies = () => {
  return (
    <div className={classNames(styles.newsOption, styles.currency)}>
      <div className={styles.optionLabelContainer}>
        <span className={styles.optionLabel}>Currencies:</span>
        <div className={classNames(styles.optionChoices, styles.currencyRow)}>
          <div className={classNames(styles.currencyOptions, styles.currenciesContainer)}>
            {newsOptionChoices.currencies.map((option, index) => (
              <div key={index} className={classNames(styles.currencyContainer, {[styles.selected]: newsOptions.currencies.code === option.code})} onClick={() => setNewsOptions({ ...newsOptions, currencies: option })}>
                <div className={styles.cardContainer}>
                  <img src={option.image} alt={`${option.name} icon`} className={classNames({[styles.coinImage]: option.kind === 'crypto', [styles.billImage]: option.kind !== 'crypto'})} />
                  <div>
                    <span className={styles.currencyCode}>{option.code}</span>
                    <span className={styles.currencyName}>{option.name}</span>
                  </div>
                </div>
              </div>
            ))}
            {renderCustomCurrencyInput()}
          </div>
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
    <section className={styles.pageContainer}>
    <div className={styles.newsFeedOptionsBar}>
        <div className={styles.filterRegionContainer}>
          <div className={styles.filterContainer}>
              {renderFilter()}
          </div>
          <div className={styles.regionContainer}>
            {renderRegions()}
          </div>
        </div>
        <div className={styles.kindsAndCurrenciesContainer}>
          <div className={styles.kindsContainer}>
            {renderKinds()}
          </div>
          <div className={styles.currenciesContainer}>
            {renderCurrencies()}
          </div>
        </div>
    </div>
    </section>
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
      {/* First Row - News Title */}
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
