import React from "react";
import CardMaker from "./CardMaker";
import RegionCardMaker from './RegionCardMaker';
import CurrencyList from "./CurrencyList"
import CustomCurrency from  "./CustomCurrency"
import styled from '@emotion/styled';
import styles from "../assets/styles/OptionsContainer.module.css";

const StyledOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export default function DrawOptionsContainer({
  setNewsOptions,
  newsOptions,
  newsOptionChoices,
  customCurrency,
  handleCustomCurrencyChange,
  handleCustomCurrencySubmit
}) {
  // console.log("newsOptionChoices at optionscontainer start: ", newsOptionChoices)
  return (

    <StyledOptionsContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className={styles.topContainer}>
      <div className={styles.filtersContainer}>
        <CardMaker cardType="filter" setNewsOptions={setNewsOptions} newsOptions={newsOptions} />
        </div>
        <div className={styles.kindsContainer}>
          <CardMaker cardType="kind" setNewsOptions={setNewsOptions} newsOptions={newsOptions} />
        </div>
        <div className={styles.regionsContainer}>
          <RegionCardMaker />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.currenciesContainer}>
        <CurrencyList
            newsOptionChoices={newsOptionChoices}
            newsOptions={newsOptions}
            setNewsOptions={setNewsOptions}
            customCurrency={customCurrency}
            handleCustomCurrencyChange={handleCustomCurrencyChange}
            handleCustomCurrencySubmit={handleCustomCurrencySubmit}
          />
          <CustomCurrency
            customCurrency={customCurrency}
            handleCustomCurrencyChange={handleCustomCurrencyChange}
            handleCustomCurrencySubmit={handleCustomCurrencySubmit}
          />

        </div>
      </div>
  </StyledOptionsContainer>
);
}