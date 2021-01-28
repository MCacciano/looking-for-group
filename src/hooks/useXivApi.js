import XIVAPI from 'xivapi-js';

const useXivApi = () => {
  const xiv = new XIVAPI({ private_key: process.env.XIV_API_KEY });

  return { xiv };
};

export default useXivApi;
