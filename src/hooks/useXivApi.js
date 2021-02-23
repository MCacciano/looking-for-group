import XIVAPI from 'xivapi-js';

const useXivApi = () => {
    const xivapi = new XIVAPI({ private_key: process.env.XIV_API_KEY });

    const verifyCharacter = code => {
        console.log('code :>> ', code);
        console.log(
            'user.characterConnectCode :>> ',
            user.characterConnectCode
        );
        return code === user.characterConnectCode;
    };

    const getCharacter = async form => {
        if (!form) return;

        const { forename, surname, server } = form;
        const characterName = `${forename}+${surname}`;

        try {
            const { Results } = await xivapi.character.search(characterName, {
                server,
            });

            // TODO: handle errors or non existent user
            if (!Results) return;

            const result = Results[0];

            const character = await xivapi.character.get(result.ID);

            const { Character } = character;

            if (verifyCharacter(Character.Bio)) {
                // console.log('character :>> ', character);
                return character;
            }

            return null;
        } catch (err) {
            console.error(err);
        }
    };

    return { xivapi, getCharacter };
};

export default useXivApi;
