import { useEffect, useState } from 'react';
import { ReactComponent as CopyIcon } from '../../assets/icons/edit-copy.svg';

import useGlobalContext from '../../hooks/useGlobalContext';

import Modal from '../../components/Modal/Modal';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { user } = useGlobalContext();

  const toggleShow = () => {
    setShow(prev => !prev);
  };

  const handleConnectCharacter = () => {
    toggleShow();
  };

  const handleCopyCode = e => {
    const el = document.createElement('textarea');
    el.value = user.id;
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

  if (!user) return null;

  return !user.character ? (
    <div className='absolute inset-0 flex justify-center items-center'>
      <button
        type='button'
        className='border border-black bg-blue-600 text-white rounded shadow p-2'
        onClick={handleConnectCharacter}
      >
        Connect Character
      </button>
      <Modal className='p-4' show={show} onClose={toggleShow}>
        <p className='my-4 mb-6 font-medium text-xl'>
          Paste this code in your Lodestone character profile
        </p>
        <div className='flex border border-gray-500 rounded shadow hover:bg-blue-600 hover:text-white cursor-pointer'>
          <button type='button' className='flex-1' onClick={handleCopyCode}>
            <h3 className='font-rubik font-medium p-2'>{user.id}</h3>
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
