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