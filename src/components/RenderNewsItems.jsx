import { motion }  from "framer-motion";
import styles from "../assets/styles/RenderNewsItems.module.css";

export const renderNewsItem = (item) => {
  // Reformat the date and time
  const publishedDate = new Date(item.published_at);
  const formattedDate = publishedDate.toLocaleDateString();
  const formattedTime = publishedDate.toLocaleTimeString();

  return (
    <div className={styles.newsItems}>
    <motion.div
      className={styles.newsItem}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* First Row - News Title */}
      <div className={styles.newsTitleRow}>
        <motion.h3 className={styles.newsTitle}>
          {item.title}
        </motion.h3>
      </div>

      {/* Second Row - Currencies and Published Date */}
      <div className={styles.newsItemMiddleRow}>
      <div className={styles.newsCurrencies}>
  <p>Coins: {Object.values(item.currencies).map(currency => `${currency.title} (${currency.code})`).join(', ')}</p>
  </div>

  <div className={styles.publishedAt}>
    <p>Published at:</p>
    <div className={styles.publishedDateTime}>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>

  </div>
</div>
</div>

      {/* Third Row - Type, Domain, Source, and Full Article Link */}
      <div className={styles.newsItemBottomRow}>
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
    </div>
  );
};