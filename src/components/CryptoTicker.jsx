// import React, { useState, useCallback, useEffect, useRef } from 'react'; // import necessary libraries
// import { motion, AnimatePresence } from 'framer-motion';
// import styled from '@emotion/styled';
// const fetch = require('node-fetch');


// const TickerContainer = styled.div` // styled component for the main ticker container
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   font-family: 'Rubik', sans-serif;
//   overflow: visible;
// `;

// const InnerTicker = styled(motion.div)` // styled component for the ticker content
//     display: flex;
//     align-items: center;
//     width: 100%;
// `;

// const CoinsContainer = styled.div` // styled component for the container that holds the coins
//   display: flex;
//   scroll-behavior: smooth;
//   scroll-snap-type: x mandatory;
//   overflow-x: scroll;
//   -webkit-overflow-scrolling: touch;
//   width: 100%;

//   /* hide scrollbar */
//   &::-webkit-scrollbar {
//     display: none;
//   }

//   /* Firefox scrollbar */
//   scrollbar-width: none;
// `;


// const Coin = styled.div` // styled component for the individual coin boxes
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
//     margin: 0 20px;
//     cursor: pointer;
// `;

// const CoinLogo = styled.img` // styled component for the coin logos
//     width: 24px;
//     height: 24px;
//     margin-right: 5px;
// `;

// const CoinName = styled.span` // styled component for the coin name
//     font-size: 14px;
//     font-weight: 500;
//     text-align: center;
//     color: white;
//     white-space: nowrap;
// `;

// const CoinPrice = styled.span` // styled component for the coin price
//     font-size: 14px;
//     font-weight: 500;
//     text-align: center;
//     color: ${(props) => (props.isUp ? 'green' : 'red')}; // change the color of the price based on whether it has increased or decreased
// `;

// const CoinTooltip = styled(motion.div)` // styled component for the tooltip that appears when you hover over a coin
//     display: flex-box;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     background-color: black;
//     color: green;
//     border-radius: 5px;
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//     padding: 10px;
//     width: auto;
//     height: auto;
//     font-size: 12px;
// `;


// const CoinPercentage = styled.span` // styled component for the percentage change in the coin price
//     font-size: 14px;
//     font-weight: 500;
//     text-align: center;
//     color: ${(props) => (props.isUp ? 'green' : 'red')}; // change the color of the percentage based on whether it has increased or decreased
// `;

// const Separator = styled.span` // styled component for the separators between different coin information
//     margin: 0 10px;
// `;

// const CryptoTicker = () => { // the main component that renders the ticker
//     const [coins, setCoins] = useState([]); // state for the list of coins
//     const [activeCoin, setActiveCoin] = useState(null); // state for the currently active coin (i.e. the one being hovered over)
//     const coinsContainerRef = useRef(null); // ref for the container that holds the coins

//     const [tooltipPosition, setTooltipPosition] = useState({
//         top: 0,
//         left: 0,
//         width: 0,
//         height: 'auto',
//     }); // state for the position and dimensions of the tooltip that appears when you hover over a coin

//     const fetchCoins = useCallback(async () => {
//         const response = await fetch('/.netlify/functions/crypto-ticker');
//         const data = await response.json();
//         setCoins(data);
//     }, []);
    

//     useEffect(() => { // effect that fetches the list of coins on mount and sets an interval to fetch them every minute
//         fetchCoins();
//         const interval = setInterval(fetchCoins, 60000);
//         return () => clearInterval(interval);
//     }, [fetchCoins]);

//     useEffect(() => { // effect that scrolls the coin container every 10ms (if no coin is being hovered over)
//         const coinsContainer = coinsContainerRef.current;
//         if (coinsContainer) {
//             const scrollInterval = setInterval(() => {
//                 if (!activeCoin) {
//                     if (coinsContainer.scrollLeft >= coinsContainer.scrollWidth - coinsContainer.clientWidth) {
//                         // Reset scroll position when reaching the end
//                         coinsContainer.scrollLeft = 0;
//                     } else {
//                         coinsContainer.scrollLeft += 20;
//                     }
//                 }
//             }, 10);

//             return () => clearInterval(scrollInterval);
//         }
//     }, [activeCoin]);

//     const isPriceUp = (coin) => { // helper function that checks whether a coin's price has increased in the last 24 hours
//         return coin.price_change_percentage_24h > 0;
//     };

//     const formatPrice = (price) => { // helper function that formats a price into a string with a dollar sign and two decimal places
//         if (price >= 1) {
//             return `$${price.toFixed(2)}`;
//         } else {
//             return `$${price.toFixed(6)}`;
//         }
//     };

//     const openCoinChart = (coinName) => { // function that opens the CoinGecko page for a given coin in a new tab
//         window.open(`https://www.coingecko.com/en/coins/${coinName.toLowerCase()}`, '_blank');
//     };

//     const handleMouseEnter = (coin, e) => { // function that sets the active coin and tooltip position when hovering over a coin
//         setActiveCoin(coin.id);
//         const target = e.target.closest('.coin');
//         if (target) {
//             const viewportWidth = window.innerWidth;
//             const viewportHeight = window.innerHeight;
//             const tooltipWidth = viewportWidth / 2;
//             const tooltipTop = viewportHeight / 2;
//             const tooltipLeft = (viewportWidth - tooltipWidth) / 2;

//             setTooltipPosition({
//                 top: tooltipTop,
//                 left: tooltipLeft,
//                 width: tooltipWidth,
//                 height: 'auto',
//             });
//         }
//     };

//     const handleMouseLeave = () => { // function that clears the active coin when leaving a coin box
//         setActiveCoin(null);
//     };

//     const tooltipAnimation = { // animation for the tooltip appearing and disappearing
//         hidden: { opacity: 0, scaleY: 0.5 },
//         visible: { opacity: 1, scaleY: 1 },
//     };

//     return (
//         // Container for the ticker
//         <TickerContainer>
//             <InnerTicker>
//                 {/* Container for the coins */}
//                 <CoinsContainer ref={coinsContainerRef}>
//                     {/* Map over the coins and create a Coin component for each */}
//                     {coins.map((coin) => (
//                         <Coin
//                             key={coin.id}
//                             onClick={() => openCoinChart(coin.name)}
//                             onMouseEnter={(e) => handleMouseEnter(coin, e)}
//                             onMouseLeave={handleMouseLeave}
//                         >
//                             <CoinLogo src={coin.image} alt={coin.name} />
//                             <CoinName>{coin.name}</CoinName>
//                             <Separator>-</Separator>
//                             <CoinPrice isUp={isPriceUp(coin)}>
//                                 {/* Format and display the current price of the coin */}
//                                 {formatPrice(coin.current_price)}
//                             </CoinPrice>
//                             <Separator>-</Separator>
//                             <CoinPercentage isUp={isPriceUp(coin)}>
//                                 {/* Display the percentage change of the coin */}
//                                 {coin.price_change_percentage_24h.toFixed(2)}%
//                             </CoinPercentage>
//                         </Coin>
//                     ))}
//                 </CoinsContainer>
//             </InnerTicker>
//             {/* Show the tooltip for the active coin */}
//             <AnimatePresence>
//                 {coins.map(
//                     (coin) =>
//                         activeCoin === coin.id && (
//                             <CoinTooltip
//                                 key={coin.id}
//                                 initial="hidden"
//                                 animate="visible"
//                                 exit="hidden"
//                                 variants={tooltipAnimation}
//                                 transition={{ duration: 0.2 }}
//                                 style={{
//                                     top: `${tooltipPosition.top}px`,
//                                     left: `${tooltipPosition.left}px`,
//                                     width: 'auto',
//                                     height: '',
//                                 }}
//                             >
//                                 {/* Display information about the coin in the tooltip */}
//                                 <p>Market Cap: {coin.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
//                                 <p>Total Volume: {coin.total_volume.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
//                                 <p>24h High: {formatPrice(coin.high_24h)}</p>
//                                 <p>24h Low: {formatPrice(coin.low_24h)}</p>
//                                 <p>24h Open: {formatPrice(coin.current_price - coin.price_change_24h)}</p>
//                                 <p>24h Close: {formatPrice(coin.current_price)}</p>
//                                 <p>Market Cap Rank: {coin.market_cap_rank}</p>
//                                 <p>Circulating Supply: {coin.circulating_supply.toLocaleString('en-US')}</p>
//                                 <p>Total Supply: {coin.total_supply ? coin.total_supply.toLocaleString('en-US') : 'N/A'}</p>
//                                 <p>Max Supply: {coin.max_supply ? coin.max_supply.toLocaleString('en-US') : 'N/A'}</p>
//                                 <p>ATH: {formatPrice(coin.ath)}</p>
//                                 <p>ATH Date: {new Date(coin.ath_date).toLocaleDateString()}</p>
//                                 <p>ATL: {formatPrice(coin.atl)}</p>
//                                 <p>ATL Date: {new Date(coin.atl_date).toLocaleDateString()}</p>
//                                 <p>Market Cap Change (24h): {coin.market_cap_change_percentage_24h}%</p>
//                                 <p>All Time High Change (24h): {coin.ath_change_percentage}%</p>
//                                 <p>All Time Low Change (24h): {coin.atl_change_percentage}%</p>
//                                 <p>Last Updated: {new Date(coin.last_updated).toLocaleString()}</p>

//                             </CoinTooltip>
//                         )
//                 )}
//             </AnimatePresence>
//         </TickerContainer>
//     );
// };

// export default CryptoTicker;



// Import necessary dependencies
import React, { useState, useCallback, useEffect } from 'react';
import '../assets/styles/CryptoTicker.css'; // Import CSS styles

// Define CryptoTicker functional component
const CryptoTicker = () => {
    // Define state variables using useState hook
    const [coins, setCoins] = useState([]); // Array of coins
    const [isDataLoaded, setIsDataLoaded] = useState(false); // Boolean value for data loading
    const [isTickerPaused, setIsTickerPaused] = useState(false); // Boolean value for ticker pause state
    const [activeCoin, setActiveCoin] = useState(null); // Active coin object
    const [tooltipPosition, setTooltipPosition] = useState({
        // Position of the tooltip
        top: 0,
        left: 0,
        width: 0,
        height: 'auto',
    });
    const [timeoutId, setTimeoutId] = useState(null); // ID for the timeout function

    // Fetch coin data from the API using the useCallback hook
    const fetchCoins = useCallback(async () => {
        const response = await fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        const data = await response.json();
        setCoins(data);
        setIsDataLoaded(true);
    }, []);

    // Use useEffect hook to fetch coin data and set an interval to update it
    useEffect(() => {
        fetchCoins();
        const interval = setInterval(fetchCoins, 60000);
        return () => clearInterval(interval);
    }, [fetchCoins]);

    // Determine if a coin's price is up or down
    const isPriceUp = (coin) => {
        return coin.price_change_percentage_24h > 0;
    };

    // Format coin price based on its value
    const formatPrice = (price) => {
        if (price >= 1) {
            return `$${price.toFixed(2)}`;
        } else {
            return `$${price.toFixed(6)}`;
        }
    };

    // Open a new tab to display a coin's chart on coingecko.com
    const openCoinChart = (coinName) => {
        window.open(`https://www.coingecko.com/en/coins/${coinName.toLowerCase()}`, '_blank');
    };

    // Set tooltip position and active coin on mouse enter
    const handleMouseEnter = (coin, e) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setActiveCoin(coin.id);
        setIsTickerPaused(true);
        const target = e.target.closest('.coin');
        const targetRect = target.getBoundingClientRect();
        const tooltipWidth = target.offsetWidth;
        const tooltipLeft = targetRect.left;
        const tooltipTop = targetRect.bottom + window.scrollY;
        setTooltipPosition({
            top: tooltipTop,
            left: tooltipLeft,
            width: tooltipWidth,
            height: 'auto', // reset the height to auto on mouse enter
        });
    };

    // Clear timeout and reset ticker pause and active coin on mouse leave
    const handleMouseLeave = (e) => {
        if (e.relatedTarget && e.relatedTarget.classList && e.relatedTarget.classList.contains('coin-tooltip')) {
            return;
        }
        const id = setTimeout(() => {
            setIsTickerPaused(false);
            setActiveCoin(null);
        }, 500);
        setTimeoutId(id);
    };

    // Return JSX for CryptoTicker component
    return (
        <div className={`crypto-ticker ${isDataLoaded ? 'loaded' : ''}`} onMouseLeave={handleMouseLeave}>
            {/* Render ticker items */}
            <div className="inner-ticker" style={{ animationPlayState: isTickerPaused ? 'paused' : 'running' }}>
                {coins.map((coin) => (
                    <div
                        key={coin.id}
                        className="coin"
                        onClick={() => openCoinChart(coin.name)}
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={(e) => handleMouseEnter(coin, e)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={coin.image} alt={coin.name} className="coin-logo" />
                        <span className="coin-name">{coin.name}</span>
                        <span className={`coin-price ${isPriceUp(coin) ? 'green' : 'red'}`}>
                            {formatPrice(coin.current_price)} ({coin.price_change_percentage_24h.toFixed(2)}%)
                        </span>
                    </div>
                ))}
            </div>
            {/* Render ticker paused overlay */}
            {isTickerPaused && <div className="ticker-paused-overlay">Paused</div>}
            {/* Render tooltip for active coin */}
            {coins.map((coin) => (
                activeCoin === coin.id && (
                    <div
                        key={coin.id}
                        className="coin-tooltip"
                        style={{
                            display: 'block',
                            position: 'absolute',
                            top: tooltipPosition.top,
                            left: tooltipPosition.left,
                            width: tooltipPosition.width,
                            height: tooltipPosition.height, // set the height to the dynamic value
                        }}
                        onMouseEnter={() => {
                            if (timeoutId) {
                                clearTimeout(timeoutId);
                                setTimeoutId(null);
                            }
                            setIsTickerPaused(true);
                        }}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Define tooltip values */}
                        <p>Market Cap: {coin.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <p>Total Volume: {coin.total_volume.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <p>24h High: {formatPrice(coin.high_24h)}</p>
                        <p>24h Low: {formatPrice(coin.low_24h)}</p>
                        <p>24h Open: {formatPrice(coin.current_price - coin.price_change_24h)}</p>
                        <p>24h Close: {formatPrice(coin.current_price)}</p>
                        <p>Market Cap Rank: {coin.market_cap_rank}</p>
                        <p>Circulating Supply: {coin.circulating_supply.toLocaleString('en-US')}</p>
                        <p>Total Supply: {coin.total_supply ? coin.total_supply.toLocaleString('en-US') : 'N/A'}</p>
                        <p>Max Supply: {coin.max_supply ? coin.max_supply.toLocaleString('en-US') : 'N/A'}</p>
                        <p>ATH: {formatPrice(coin.ath)}</p>
                        <p>ATH Date: {new Date(coin.ath_date).toLocaleDateString()}</p>
                        <p>ATL: {formatPrice(coin.atl)}</p>
                        <p>ATL Date: {new Date(coin.atl_date).toLocaleDateString()}</p>
                        <p>Market Cap Change (24h): {coin.market_cap_change_percentage_24h}%</p>
                        <p>All Time High Change (24h): {coin.ath_change_percentage}%</p>
                        <p>All Time Low Change (24h): {coin.atl_change_percentage}%</p>
                        <p>Last Updated: {new Date(coin.last_updated).toLocaleString()}</p>
                    </div>
                )
            ))}
        </div>
    );
};

export default CryptoTicker;