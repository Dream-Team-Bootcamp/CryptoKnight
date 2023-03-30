import axios from 'axios';
const cryptoPanicEndpoint = '/api/posts/';

//   auth_token: process.env.CRYPTOPANIC_API_KEY,
// const auth_token = '1d5f85a24c81af8ec3b56e9c8cc71c179af39521';
const auth_token = '5449109ce0aec89c6e9b7fa89d56364affafc3e2';

async function fetchCryptoPanicData(options = {}) {
    try {
        const defaultParams = {
            auth_token: auth_token,
            currencies: options.currencies.code, // update currencies to use code property only
            filter: options.filter.value,
            kind: options.kind.value,
            regions: options.regions.code, // update regions to use code property only
        };

        const response = await axios.get(cryptoPanicEndpoint, { params: defaultParams });
        const newsData = response.data.results;
        console.log("NEWS DATA: " + newsData);
        return newsData;
    } catch (error) {
        console.error('Error fetching CryptoPanic data:', error);
    }
}

export default fetchCryptoPanicData;


//         const params = { ...defaultParams, ...options };
//         console.log(params);
//         const response = await axios.get(cryptoPanicEndpoint, { params });
//         console.log("Response: " + response);
//         console.log(response.data);
//         const newsData = response.data.results;
//         console.log("NEWS DATA: " + newsData);
//         return newsData;
//     } catch (error) {
//         console.error('Error fetching CryptoPanic data:', error);
//     }
// }

// export default fetchCryptoPanicData;

