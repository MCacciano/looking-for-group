import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

// TODO: Add click outside to close functionality

const Modal = ({ show, onClose, className, children }) => {
  const DOM = (
    <div className='absolute inset-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center'>
      <div
        className={`relative bg-white border border-black rounded shadow-md`}
      >
        <div className={`mt-6 ${className}`}>{children}</div>
        <div className='absolute right-2 top-2 flex items-start'>
          <div className='m-1 rounded cursor-pointer border hover:shadow hover:border-black'>
            <button
              type='button'
              onClick={onClose}
              className='text-lg px-2 font-medium font-rubik hover:text-red-600 opacity-70 hover:opacity-100'
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return show ? createPortal(DOM, document.getElementById('modal')) : null;
};

Modal.defaultProps = {
  width: '',
  height: '',
  className: '',
  show: false
};

Modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  show: PropTypes.bool
};

export default Modal;
