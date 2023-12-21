import axios from 'axios';

const API_KEY = 'AIzaSyDzy3wz5yxKZv9CaxbAHUstxBLvan78zsY';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

export const translateText = async (text, targetLanguage) => {
  const response = await axios.post(
    `${API_URL}?key=${API_KEY}`,
    {
      q: text,
      target: targetLanguage,
    }
  );

  return response.data.data.translations[0].translatedText;
};

