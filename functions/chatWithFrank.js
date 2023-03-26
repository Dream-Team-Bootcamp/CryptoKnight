const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const { messages } = JSON.parse(event.body);

    const response = await axios.post('https://crypt0knight.netlify.app/.netlify/functions/chatWithFrank', { messages }, { timeout: 60000 });

    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.data }),
    };
  } catch (error) {
    console.error('Error communicating with the serverless function:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

