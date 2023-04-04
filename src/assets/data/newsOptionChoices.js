import React from "react";
import { ReactComponent as FlagEn } from "../images/flags/gb.svg";
import { ReactComponent as FlagDe } from "../images/flags/de.svg";
import { ReactComponent as FlagNl } from "../images/flags/nl.svg";
import { ReactComponent as FlagEs } from "../images/flags/es.svg";
import { ReactComponent as FlagFr } from "../images/flags/fr.svg";
import { ReactComponent as FlagIt } from "../images/flags/it.svg";
import { ReactComponent as FlagPt } from "../images/flags/pt.svg";
import { ReactComponent as FlagRu } from "../images/flags/ru.svg";

const newsOptionChoices = {
    kind: [
        { name: "News", description: "Filters your search to bring only news articles", value: "news" },
        { name: "Media", description: "Filters your search to bring only media articles", value: "media" },
        { name: "All", description: "Brings all results for your search query", value: "all" },
    ],
    filter: [
        { name: "Rising", description: "Brings articles that are rapidly gaining popularity", value: "rising" },
        { name: "Hot", description: "Brings articles that are currently popular", value: "hot" },
        { name: "Bullish", description: "Brings articles that are positive on a currency or market", value: "bullish" },
        { name: "Bearish", description: "Brings articles that are negative on a currency or market", value: "bearish" },
        { name: "Important", description: "Brings articles that are deemed important by the source", value: "important" },
        { name: "New", description: "Brings articles that are recently published", value: "new" },
    ],
    currencies: [
        { code: "BTC", name: "Bitcoin", image: "https://cryptoicons.org/api/icon/btc/64", kind: "crypto" },
        { code: "ETH", name: "Ethereum", image: "https://cryptoicons.org/api/icon/eth/64", kind: "crypto" },
        { code: "USDT", name: "Tether", image: "https://cryptoicons.org/api/icon/usdt/64", kind: "crypto" },
        { code: "BNB", name: "Binance Coin", image: "https://cryptoicons.org/api/icon/bnb/64", kind: "crypto" },
        { code: "USDC", name: "USD Coin", image: "https://cryptoicons.org/api/icon/usdc/64", kind: "crypto" },
        { code: "XRP", name: "XRP", image: "https://cryptoicons.org/api/icon/xrp/64", kind: "crypto" },
        { code: "ADA", name: "Cardano", image: "https://cryptoicons.org/api/icon/ada/64", kind: "crypto" },
        { code: "LINK", name: "Chainlink", image: "https://cryptoicons.org/api/icon/link/64", kind: "crypto" },
        { code: "DOGE", name: "Dogecoin", image: "https://cryptoicons.org/api/icon/doge/64", kind: "crypto" },
        { code: "LTC", name: "Litecoin", image: "https://cryptoicons.org/api/icon/ltc/64", kind: "crypto" },
        { code: "TRX", name: "Tron", image: "https://cryptoicons.org/api/icon/trx/64", kind: "crypto" },
        { code: "MKR", name: "Maker", image: "https://cryptoicons.org/api/icon/mkr/64", kind: "crypto" },

    ],
    regions: [
        { code: "en", name: "English", image: <FlagEn /> },
        { code: "de", name: "German", image: <FlagDe /> },
        { code: "es", name: "Spanish", image: <FlagEs /> },
        { code: "fr", name: "French", image: <FlagFr /> },
        { code: "it", name: "Italian", image:  <FlagIt /> },
        { code: "pt", name: "Portuguese", image: <FlagPt /> },
        { code: "ru", name: "Russian", image: <FlagRu /> },
        { code: "nl", name: "Dutch", image: <FlagNl /> },
    ],
};

export default newsOptionChoices;


// { code: "MATIC", name: "Polygon", image: "https://cryptoicons.org/api/icon/matic/64", kind: "crypto" },
// { code: "BUSD", name: "Binance USD", image: "https://cryptoicons.org/api/icon/busd/64", kind: "crypto" },
// { code: "SOL", name: "Solana", image: "https://cryptoicons.org/api/icon/sol/64", kind: "crypto" },
// { code: "DOT", name: "Polkadot", image: "https://cryptoicons.org/api/icon/dot/64", kind: "crypto" },
// { code: "UNI", name: "Uniswap", image: "https://cryptoicons.org/api/icon/uni/64", kind: "crypto" },
// { code:" SHIB", name: "Shiba Inu", image: "https://cryptoicons.org/api/icon/shib/64", kind: "crypto" },
// { code: "AVAX", name: "Avalanche", image: "https://cryptoicons.org/api/icon/avax/64", kind: "crypto" },
// { code: "AAVE", name: "Aave", image: "https://cryptoicons.org/api/icon/aave/64", kind: "crypto" },
// { code: "COMP", name: "Compound", image: "https://cryptoicons.org/api/icon/comp/64", kind: "crypto" },
// { code: "SNX", name: "Synthetix", image: "https://cryptoicons.org/api/icon/snx/64", kind: "crypto" },
// { code: "FTT", name: "FTX Token", image: "https://cryptoicons.org/api/icon/ftt/64", kind: "crypto" },
        // { code: "ATOM", name: "Cosmos", image: "https://cryptoicons.org/api/icon/atom/64", kind: "crypto" },
        // { code: "SUSHI", name: "SushiSwap", image: "https://cryptoicons.org/api/icon/sushi/64", kind: "crypto" },
        // { code: "FTM", name: "Fantom", image: "https://cryptoicons.org/api/icon/ftm/64", kind: "crypto" },
        // { code: "SNX", name: "Synthetix", image: "https://cryptoicons.org/api/icon/snx/64", kind: "crypto" },
