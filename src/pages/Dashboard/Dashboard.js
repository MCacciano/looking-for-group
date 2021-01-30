import { useEffect, useState } from 'react';
import { ReactComponent as CopyIcon } from '../../assets/icons/edit-copy.svg';

import useXivApi from '../../hooks/useXivApi';
import useGlobalContext from '../../hooks/useGlobalContext';

import Modal from '../../components/Modal/Modal';
import CharacterConnectForm from '../../components/CharacterConnectForm/CharacterConnectForm';

const Dashboard = () => {
  const { xivapi } = useXivApi();
  const { user } = useGlobalContext();

  const [show, setShow] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleShow = () => {
    setShow(prev => !prev);
  };

  const handleConnectCharacter = () => {
    toggleShow();
  };

  const handleCopyCode = e => {
    const el = document.createElement('textarea');
    el.value = user.characterConnectCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [isCopied]);

  const verifyCharacter = code => {
    console.log('code :>> ', code);
    console.log('user.characterConnectCode :>> ', user.characterConnectCode);
    return code === user.characterConnectCode;
  };

  const getCharacter = async character => {
    if (!character) return;

    const { forename, surname, server } = character;
    const characterName = `${forename}+${surname}`;

    try {
      const { Results } = await xivapi.character.search(characterName, {
        server
      });

      // TODO: handle errors or non existent user
      if (!Results) return;

      const result = Results[0];

      const character = await xivapi.character.get(result.ID);

      const { Character } = character;

      if (verifyCharacter(Character.Bio)) {
        console.log('character :>> ', character);
        return character;
      }

      return null;
    } catch (err) {
      console.error(err);
    }
  };

  // TODO: Add the character data to user in firestore
  const handleOnSubmit = async values => {
    const character = await getCharacter(values);
    console.log('submit :>> ', character);
    // console.log('values :>> ', values);
  };

  if (!user) return null;

  return !user.character ? (
    <div className='absolute inset-0 flex justify-center items-center p-2'>
      <button
        type='button'
        className='border border-black bg-blue-600 text-white rounded shadow p-2'
        onClick={handleConnectCharacter}
      >
        Connect Character
      </button>
      <Modal className='p-4 max-w-screen-sm' show={show} onClose={toggleShow}>
        <ul className='flex flex-col text-sm font-light font-rubik list-decimal p-3'>
          <li className='mb-1'>
            Copy the code at the bottom into your Lodestone Character Profile
          </li>
          <li className='mb-1'>
            Enter your character Forename, Surname, and select your Server
          </li>
          <li className='mb-1'>Connect!</li>
        </ul>
        <CharacterConnectForm onSubmit={handleOnSubmit} />
        <div className='w-full mt-3'>
          <div className='flex border border-gray-500 rounded shadow hover:bg-blue-600 hover:text-white cursor-pointer'>
            <button type='button' className='flex-1' onClick={handleCopyCode}>
              <h3 className='font-rubik font-medium p-2'>
                {user.characterConnectCode}
              </h3>
            </button>
            <div className='h-full w-5 mx-4 my-auto'>
              <CopyIcon className='fill-current' />
            </div>
          </div>
          <div className='flex justify-center'>
            {isCopied ? (
              <h4 className='text-blue-600 font-medium'>Copied!</h4>
            ) : (
              <h4>Click to copy!</h4>
            )}
          </div>
        </div>
      </Modal>
    </div>
  ) : (
    <div className='flex h-10'>
      <div className='flex flex-col bg-red-100'>
        <div classname='w-12 h-1'>
          <img src={user.avatar} alt='avatar' />
        </div>
      </div>
      <div className='flex-1 bg-blue-100'></div>
    </div>
  );
};

export default Dashboard;
