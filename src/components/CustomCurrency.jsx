import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../assets/styles/CustomCurrency.module.css";

export default function CustomCurrency({
  customCurrency,
  handleCustomCurrencyChange,
  handleCustomCurrencySubmit,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div className={styles.customCurrency}>
      <motion.div
        className={styles.customCurrencyHeader}
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <p>Enter your own</p>
        {isOpen ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </motion.div>

      {isOpen && (
        <form onSubmit={handleCustomCurrencySubmit}>
          <motion.input
            type="text"
            placeholder="Enter short code (e.g. BTC)"
            className={styles.customCurrencyInput}
            value={customCurrency}
            onChange={handleCustomCurrencyChange}
            whileFocus={{ borderColor: "#50ae55", boxShadow: "0 0 0 2px rgba(80, 174, 85, 0.3)" }}
          />
          <motion.button
            type="submit"
            className={styles.customCurrencyButton}
            whileHover={{ backgroundColor: "#3d8f47" }}
            whileTap={{ scale: 0.9 }}
          >
            Filter News
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
