import React from "react";
import CardMaker from "./CardMaker";
import RegionCardMaker from './RegionCardMaker';
import CurrencyList from "./CurrencyList"
import CustomCurrency from  "./CustomCurrency"
import styled from '@emotion/styled';
import classNames from 'classnames';
import styles from "../assets/styles/OptionsContainer.module.css";
import { motion } from "framer-motion";

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


// const StyledOptionsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 0.5rem;
// `;

// const RegionCardsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const RegionCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0.5rem;
//   cursor: pointer;
//   border: 1px solid transparent;

//   &.selected {
//     border-color: white;
//   }

//   &:hover {
//     border-color: white;
//   }

//   svg {
//     height: 2rem;
//     margin-bottom: 0.5rem;
//   }
// `;

// const RegionCardTitle = styled.div`
//   color: white;
// `;

// const RegionCardImage = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 2rem;
//   height: 2rem;
//   margin-bottom: 0.5rem;

//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const RegionCardMakerContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const RegionCardMakerTitle = styled.div`
//   color: white;
// `;


// const KindsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const CurrenciesContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const CurrencyCardOption = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0.5rem;
//   cursor: pointer;
//   border: 1px solid transparent;

//   &.selected {
//     border-color: white;
//   }

//   &:hover {
//     border-color: white;
//   }

//   img {
//     height: 2rem;
//     margin-bottom: 0.5rem;
//   }
// `;

// const CustomCurrencyInput = styled.input`
//   margin-left: 8px;
//   padding: 4px;
//   font-size: 16px;
//   background-color: transparent;
//   color: white;
//   border: none;
//   border-bottom: 1px solid white;
// `;

// const CustomCurrencyButton = styled.button`
//   margin-left: 8px;
//   padding: 4px 8px;
//   font-size: 16px;
//   color: white;
//   background-color: #0048ba;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #003c8a;
//   }
// `;
