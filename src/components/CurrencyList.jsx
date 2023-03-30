import { motion } from "framer-motion";
import classNames from "classnames";
import styles from "../assets/styles/CurrencyList.module.css";
import newsOptionChoices from "../assets/data/newsOptionChoices";

const CurrencyList = ({
  newsOptions,
  setNewsOptions,
  customCurrency,
  handleCustomCurrencyChange,
  handleCustomCurrencySubmit,
}) => {
  return (
    <motion.div
      className={classNames(styles.newsOption, styles.currency)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className={styles.optionLabelContainer}>
        <motion.div className={classNames(styles.optionChoices, styles.currencyRow)}>
          <motion.div className={classNames(styles.currencyOptions, styles.currenciesContainer)}>
            {Array.isArray(newsOptionChoices.currencies) && newsOptionChoices.currencies.map((option, index) => (
              <motion.div
                key={index}
                className={classNames(styles.currencyContainer, {
                  [styles.selected]: newsOptionChoices.currencies.code === option.code,
                })}
                onClick={() => setNewsOptions({ ...newsOptions, currencies: { code: option.code, name: option.name, image: option.image }})}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div className={styles.cardContainer}>
                  <img
                    src={option.image}
                    alt={`${option.code}`}
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <span className={styles.currencyName}>{option.code}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CurrencyList;

