import XIVAPI from 'xivapi-js';

const useXivApi = () => {
  const xivapi = new XIVAPI({ private_key: process.env.XIV_API_KEY });

  return { xivapi };
};

export default useXivApi;
