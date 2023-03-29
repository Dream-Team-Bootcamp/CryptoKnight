import styles from "../assets/styles/RegionCards.module.css";
import React from "react";
import { ReactComponent as FlagEn } from "../assets/images/flags/gb.svg";
import { ReactComponent as FlagDe } from "../assets/images/flags/de.svg";
import { ReactComponent as FlagNl } from "../assets/images/flags/nl.svg";
import { ReactComponent as FlagEs } from "../assets/images/flags/es.svg";
import { ReactComponent as FlagFr } from "../assets/images/flags/fr.svg";
import { ReactComponent as FlagIt } from "../assets/images/flags/it.svg";
import { ReactComponent as FlagPt } from "../assets/images/flags/pt.svg";
import { ReactComponent as FlagRu } from "../assets/images/flags/ru.svg";

const regionOptions = [
    { code: "en", name: "English", flag: <FlagEn /> },
    { code: "de", name: "German", flag: <FlagDe /> },
    { code: "nl", name: "Dutch", flag: <FlagNl /> },
    { code: "es", name: "Spanish", flag: <FlagEs /> },
    { code: "fr", name: "French", flag: <FlagFr /> },
    { code: "it", name: "Italian", flag: <FlagIt /> },
    { code: "pt", name: "Portuguese", flag: <FlagPt /> },
    { code: "ru", name: "Russian", flag: <FlagRu /> },
];

const RegionCardMaker = () => {
    return (
    <div className={`${styles.regionCardsContainer} ${styles.regionCardsContainer}`}>
        {regionOptions.map((option) => (
        <div className="regionCard" key={option.code}>
            <div className="regionCardImage">{option.flag}</div>
            <div className="regionCardTitle">{option.title}</div>
        </div>
        ))}
        </div>
    );
};

export default RegionCardMaker;