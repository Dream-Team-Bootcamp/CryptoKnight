import React from "react";
import CardMaker from "./CardMaker";
import RegionCardMaker from './RegionCardMaker';
import styled from '@emotion/styled';
import classNames from 'classnames';
import styles from "../assets/styles/OptionsContainer.module.css";
import { motion } from "framer-motion";

const StyledOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;

  .topContainer {
    ${classNames(styles.topContainer)}
  }

  .bottomContainer {
    ${classNames(styles.bottomContainer)}
  }

  .currenciesContainer {
    gap: 10px;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .filtersContainer {
    ${classNames(styles.filtersContainer)}
  }

  .kindsContainer {
    ${classNames(styles.kindsContainer)}
  }

  .regionsContainer {
    ${classNames(styles.regionsContainer)}
  }

  span {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    color: #333;
  }

  .selected {
    background-color: #4c4cff;
    color: white;
    border-radius: 0.5rem;
  }

  input[type="text"] {
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }

  button[type="submit"] {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #4c4cff;
    color: white;
    cursor: pointer;
  }
`;



export default function DrawOptionsContainer({
  setNewsOptions,
  newsOptions,
  newsOptionChoices,
  customCurrency,
  handleCustomCurrencyChange,
  handleCustomCurrencySubmit
}) {
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
          <CardMaker cardType="currencies" setNewsOptions={setNewsOptions} newsOptions={newsOptions} />
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
