import React, { useState, useEffect } from "react";
// import styles from "../assets/styles/NewsFrame.module.css";
import styles from "../assets/styles/News.module.css";
import fetchCryptoPanicData from "../assets/functions/fetchNews.js";
import classNames from "classnames";
import styled from '@emotion/styled'; // Importing a styled-component library
import { motion }  from "framer-motion";
import DrawOptionsContainer from './OptionsContainer';

const newsOptionChoices = {
    filter: ["rising", "hot", "bullish", "bearish", "important", "new"],
    currencies: ["BTC", "ETH", "USDT","BNB","USDC","XRP","ADA","LINK","STETH",
    "DOGE","MATIC","BUSD","SOL","DOT","LTC","SHIB","TRX","AVAX","DAI","UNI",],
    regions: [
    { code: "en", name: "English"},
    { code: "de", name: "German" },
    { code: "nl", name: "Dutch"},
    { code: "es", name: "Spanish"},
    { code: "fr", name: "French" },
    { code: "it", name: "Italian"},
    { code: "pt", name: "Portuguese"},
    { code: "ru", name: "Russian"},
],
kind: ["news", "media", "all"],
};

const NewsFrame = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [newsOptions, setNewsOptions] = useState({
        filter: "hot",
        kind: "news",
        currencies: "BTC",
        regions: "en",
    });

    const [customCurrency, setCustomCurrency] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        const data = await fetchCryptoPanicData(newsOptions);
        setNewsItems(data);
    };

    fetchData();
    }, [newsOptions]);

    const handleCustomCurrencyChange = (event) => {
        setCustomCurrency(event.target.value);
    };

    const handleCustomCurrencySubmit = (event) => {
        event.preventDefault();
        setNewsOptions({ ...newsOptions, currencies: customCurrency.toUpperCase() });

        setCustomCurrency('');
    };

    const renderNewsItem = (item) => {
      // Reformat the date and time
      const publishedDate = new Date(item.published_at);
      const formattedDate = publishedDate.toLocaleDateString();
      const formattedTime = publishedDate.toLocaleTimeString();
  
      return (
        <motion.div
          className="newsItem"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* First Row - News Title */}
          <div className={styles.newsItemRow}>
            <motion.h3 className={styles.newsTitle}>
              {item.title}
            </motion.h3>
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
            <motion.div
              className={styles.newsDetails}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <p>Type: {item.kind}</p>
              <p>Domain: {item.domain}</p>
              <p>Source: {item.source.title}</p>
            </motion.div>
            <motion.div
              className={styles.fullArticle}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <div className={styles.newsUrl}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.newsUrlButton}
                >
                  <div>
                    <p>Full Article</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
    };
  
    const renderNewsItemCurrencies = (item) => (
      <motion.div className={styles.newsCurrencies}>
        <p>Currencies:</p>
        <motion.div className={styles.currencyCards}>
          {item.currencies.map((currency) => (
            <motion.div key={currency.code} className={styles.currencyCard}>
              <p>{currency.title}</p>
              <p>{currency.code}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      );

    const renderCurrencyList = () => {
      const renderCustomCurrencyInput = () => (
        <motion.div className={styles.newsOption}>
          <form onSubmit={handleCustomCurrencySubmit}>
            <input
              type="text"
              placeholder="Enter custom currency"
              className={styles.customCurrencyInput}
              value={customCurrency}
              onChange={handleCustomCurrencyChange}
            />
            <motion.button type="submit" className={styles.customCurrencyButton} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Add
            </motion.button>
          </form>
        </motion.div>
      );
    
      return (
        <motion.div className={classNames(styles.newsOption, styles.currency)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className={styles.optionLabelContainer}>
            <motion.span className={styles.optionLabel} whileHover={{ scale: 1.1 }}>
              Currencies:
            </motion.span>
            <motion.div className={classNames(styles.optionChoices, styles.currencyRow)}>
              <motion.div className={classNames(styles.currencyOptions, styles.currenciesContainer)}>
                {newsOptionChoices.currencies.map((option, index) => (
                  <motion.div
                    key={index}
                    className={classNames(styles.currencyContainer, {
                      [styles.selected]: newsOptions.currencies.code === option.code,
                    })}
                    onClick={() =>
                      setNewsOptions({ ...newsOptions, currencies: option })
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div className={styles.cardContainer}>
                      <motion.img
                        src={option.image}
                        alt={`${option.name} icon`}
                        className={classNames({
                          [styles.coinImage]: option.kind === "crypto",
                          [styles.billImage]: option.kind !== "crypto",
                        })}
                        whileHover={{ scale: 1.1 }}
                      />
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <motion.span className={styles.currencyCode}>{option.code}</motion.span>
                        <motion.span className={styles.currencyName}>{option.name}</motion.span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
                {renderCustomCurrencyInput()}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    };

    

  return (
    <div className={styles.pageContainer}>
      <div className={styles.menu}>
        <DrawOptionsContainer />
      </div>
      <MainContainer
        drag
        dragConstraints={{ left: -100, right: 0, top: -100, bottom: 0 }}
        className={styles.newsContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.newsContainer}>
          <div className={styles.newsItems}>
            {newsItems && newsItems.map((item) => renderNewsItem(item))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
};


export default NewsFrame;

const MainContainer = styled(motion.div)`
display:
flex;
    flex-direction: column;
    min-height: 100vh;
`;

// Define styled component for the chatbot container
const placehold = styled(motion.div)`
  position: fixed;
  // background-color: rgba(34, 34, 34, 0.9); 
  bottom: ${({ size }) => (size === 'small' ? '0px' : size === 'medium' ? '10%' : '0')};
  right: ${({ size }) => (size === 'small' ? '-7px' : size === 'medium' ? '10%' : '0')};
  width: ${({ size }) => (size === 'small' ? '300px' : size === 'medium' ? '80%' : '100%')};
  height: ${({ size }) => (size === 'small' ? '400px' : size === 'medium' ? '80%' : '100%')};
  border-radius: ${({ size }) => (size === 'small' ? '10px' : '0')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: ${({ size }) => (size === 'maximized' ? '9999' : 'auto')}; 
`;

const NewsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`;

const KindsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CurrenciesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CurrencyCardOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border: 1px solid transparent;

  &.selected {
    border-color: white;
  }

  &:hover {
    border-color: white;
  }

  img {
    height: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const CustomCurrencyInput = styled.input`
  margin-left: 8px;
  padding: 4px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 1px solid white;
`;

const CustomCurrencyButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
  font-size: 16px;
  color: white;
  background-color: #0048ba;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #003c8a;
  }
`;