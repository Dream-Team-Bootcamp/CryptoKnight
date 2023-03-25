import React, { useState } from 'react';
import styles from '../assets/styles/CryptoDisplay.module.css';

const CryptoDisplay = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximized = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div className={styles.cryptoDisplay}>
      <div className={styles.header}>
        <h1>Crypto Display</h1>
        <button onClick={toggleMaximized}>{isMaximized ? 'Minimize' : 'Maximize'}</button>
      </div>
      <div className={`${styles.tickerContainer} ${isMaximized ? styles.maximized : ''}`}>
        <div className={styles.tickerTape}>
          {/* Paste in TradingView ticker tape iframe widgets here */}
        </div>
        <div className={styles.advancedChart}>
          <div className="tradingview-widget-container">
            <div id="tradingview_52599"></div>
            <div className="tradingview-widget-container__widget"></div>
            <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
            <script type="text/javascript">
              new TradingView.widget(
                
                  "autosize": true,
                  "symbol": "BITSTAMP:BTCUSD",
                  "interval": "D",
                  "timezone": "Europe/London",
                  "theme": "dark",
                  "style": "3",
                  "locale": "en",
                  "toolbar_bg": "#f1f3f6",
                  "enable_publishing": false,
                  "allow_symbol_change": true,
                  "studies": [
                    "STD;Bollinger_Bands"
                  ],
                  "show_popup_button": true,
                  "popup_width": "1000",
                  "popup_height": "650",
                  "container_id": "tradingview_52599"
                
              );
            </script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDisplay;
