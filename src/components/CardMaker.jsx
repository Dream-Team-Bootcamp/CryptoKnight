import styles from "../assets/styles/CardMaker.module.css";
import React from "react";
import { motion } from "framer-motion";

const cardOptions = {
    filter: ["Rising", "Hot", "Bullish", "Bearish", "Important", "New"],
    kind: ["News", "Media", "All"],
    currencies: ["BTC", "ETH", "USDT","BNB","USDC","XRP","ADA","LINK",
    "DOGE","MATIC","SOL","LTC","SHIB","TRX","AVAX","UNI",],
};

const CardMaker = ({ cardType, setNewsOptions, newsOptions }) => {
    let cardTitle = "";
    let cardOptionsList = [];

    switch (cardType) {
        case "filter":
            cardTitle = "Filter";
            cardOptionsList = cardOptions.filter;
            break;
        case "kind":
            cardTitle = "Kind";
            cardOptionsList = cardOptions.kind;
            break;
        case "currencies":
            cardTitle = "Currencies";
            cardOptionsList = cardOptions.currencies;
            break;
            default:
            break;
    }

    const cardVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={styles.cardWrapper}>
        <motion.div
          className={`${styles.globalCardsContainer} ${styles.cardOptionChoices}`}
          initial="hidden"
          animate="visible"
        >
          {cardOptionsList.map((option) => (
            <motion.div
              className={styles.optionCardWrapper}
              key={option}
              onClick={() =>
                setNewsOptions({ ...newsOptions, [cardType]: option })
              }
              variants={cardVariants}
            >
              <motion.div className={`${styles.optionCard}`}>
                <motion.div className={`${styles.regionCardTitle}`}>{option}</motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      );
    };

export default CardMaker;