import styles from "../assets/styles/RegionCards.module.css";
import newsOptionChoices from "../assets/data/newsOptionChoices";

// Component that renders the SVG image with a specified viewBox
const FlagImage = ({ svg, viewBox }) => {
  return (
    <svg viewBox={viewBox} className={styles.flags}>
      {svg}
    </svg>
  );
};

const RegionCardMaker = () => {
  return (
    <div className={styles.regionCardsContainer}>
      <div className={`${styles.regionOptionGroup} ${styles.regionCardsContainer}`}>
        {newsOptionChoices.regions.map((option) => (
          <div className={styles.regionCard} key={option.code}>
            <div className={styles.regionCardImage}>
              <FlagImage svg={option.image} viewBox="0 0 64 64" />
            </div>
            <div className={styles.regionCardTitle}>{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionCardMaker;