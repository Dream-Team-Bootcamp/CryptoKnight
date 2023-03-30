import axios from 'axios';
const cryptoPanicEndpoint = 'https://cryptopanic.com/api/v1/posts/';

async function fetchCryptoPanicData(options = {}) {
    try {
        const defaultParams = {
            auth_token: process.env.CRYPTOPANIC_API_KEY,
            format: 'rss',
        };

        const params = { ...defaultParams, ...options };
        const response = await axios.get(cryptoPanicEndpoint, { params });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching CryptoPanic data:', error);
    }
}

module.exports = {
    fetchCryptoPanicData,
};

