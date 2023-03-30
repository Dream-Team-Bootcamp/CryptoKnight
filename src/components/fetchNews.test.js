const { fetchCryptoPanicData } = require('../assets/functions/fetchNews');

describe('fetchCryptoPanicData', () => {
  it('should fetch data with default parameters', async () => {
    const data = await fetchCryptoPanicData();

    // Check if the fetched data is an object (since we expect JSON data)
    expect(typeof data).toBe('object');

    // Optionally, you can add more assertions here to check if the fetched data has the expected structure
  });

  it('should fetch data with custom parameters', async () => {
    const options = {
      filter: 'rising',
      currencies: 'ETH',
      regions: 'en,de',
      kind: 'news',
    };

    const data = await fetchCryptoPanicData(options);

    // Check if the fetched data is an object (since we expect JSON data)
    expect(typeof data).toBe('object');

    // Optionally, you can add more assertions here to check if the fetched data has the expected structure
  });
});
