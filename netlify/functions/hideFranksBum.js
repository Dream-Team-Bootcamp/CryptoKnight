const { Configuration, OpenAIApi } = require('openai');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const body = JSON.parse(event.body);
  const { messages } = body;

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  try {
    const openAIResponse = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: messages,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        response: openAIResponse.data.choices[0].message.content.trim(),
      }),
    };
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    console.error('Error response data:', error.response.data);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error communicating with OpenAI',
      }),
    };
  }
};
