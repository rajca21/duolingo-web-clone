export const translate = async (
  text: string,
  sourceLan: string,
  targetLan: string
) => {
  const url: string =
    'https://deep-translate1.p.rapidapi.com/language/translate/v2';
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: text,
      source: sourceLan,
      target: targetLan,
    }),
  };

  try {
    const response: Response = await fetch(url, options);
    const result = await response.json();
    return result.data.translations.translatedText;
  } catch (error) {
    console.error(error);
  }
};
