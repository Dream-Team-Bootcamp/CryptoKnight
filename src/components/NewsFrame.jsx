import React, { useState, useEffect } from "react";
import styles from "../assets/styles/News.module.css";
import fetchCryptoPanicData from "../assets/functions/fetchNews.js";
import newsOptionChoices from "../assets/data/newsOptionChoices.js";
import styled from '@emotion/styled'; // Importing a styled-component library
import { motion }  from "framer-motion";
import DrawOptionsContainer from './OptionsContainer';
import { renderNewsItem } from "./RenderNewsItems";

const NewsFrame = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [newsOptions, setNewsOptions] = useState({
    filter: { name: "Hot", description: "Brings articles that are currently popular", value: "hot" },
    kind: { name: "News", description: "Filters your search to bring only news articles", value: "news" },
    currencies: { code: "BTC", name: "Bitcoin", image: "https://cryptoicons.org/api/icon/btc/200" },
    regions: { code: "en", name: "English" },
  });
  const [customCurrency, setCustomCurrency] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoPanicData(newsOptions);
      setNewsItems(data);
    };
    fetchData();
  }, [newsOptions]);

  useEffect(() => {
    setNewsOptions({
      filter: newsOptionChoices.filter[1],
      kind: newsOptionChoices.kind[0],
      currencies: newsOptionChoices.currencies[0],
      regions: newsOptionChoices.regions[0],
    });
  }, []);

  useEffect(() => {
    const defaultCurrency = newsOptionChoices.currencies.find(
      (currency) => currency.code === newsOptions.currencies.code
    );

    if (!defaultCurrency) {
      setNewsOptions({ ...newsOptions, currencies: { code: "BTC", name: "Bitcoin", image: "https://cryptoicons.org/api/icon/btc/200" } });
    }
  }, [newsOptionChoices.currencies]);

  const handleCustomCurrencyChange = (event) => {
    setCustomCurrency(event.target.value);
  };

  const handleCustomCurrencySubmit = (event) => {
    event.preventDefault();
    setNewsOptions({ ...newsOptions, currencies: { code: customCurrency.toUpperCase() } });
    setCustomCurrency("");
  };

  // console.log("newsOptionChoices in NewsFrame after defined: ", newsOptionChoices);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.menu}>
      <DrawOptionsContainer
      setNewsOptions={setNewsOptions}
      newsOptions={newsOptions}
      newsOptionChoices={newsOptionChoices} // Add this line
      customCurrency={customCurrency}
      handleCustomCurrencyChange={handleCustomCurrencyChange}
      handleCustomCurrencySubmit={handleCustomCurrencySubmit}
      />
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
    padding: 10px;
    margin: 10px;
    border: 1px solid  #50ae55;
    border-radius: 10px;
`;