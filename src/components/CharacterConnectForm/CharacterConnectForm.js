import { Formik, Form } from 'formik';

import FormikInput from '../FormikInput';
import useGlobalContext from '../../hooks/useGlobalContext';

const CharacterConnectForm = ({ onSubmit, className = '' }) => {
  const { servers } = useGlobalContext();

  return (
    <Formik
      initialValues={{
        forename: '',
        surname: '',
        server: ''
      }}
      onSubmit={onSubmit}
    >
      <Form className={`flex flex-col ${className}`}>
        <FormikInput
          label='Forename'
          id='forename'
          name='forename'
          className='border border-black rounded shadow mb-2 w-full'
        />
        <FormikInput
          label='Surname'
          id='surname'
          name='surname'
          className='border border-black rounded shadow mb-2 w-full'
        />
        <FormikInput
          label='Server'
          as='select'
          id='server'
          name='server'
          className='border border-black rounded shadow mb-2 w-full'
        >
          <option value=''>Select Server</option>
          {servers.map(server => (
            <option key={server} value={server}>
              {server}
            </option>
          ))}
        </FormikInput>
        <button
          type='submit'
          className='border border-black bg-blue-600 text-white font-medium rounded shadow my-2 py-1 px-2'
        >
          Connect
        </button>
      </Form>
    </Formik>
  );
};

export default CharacterConnectForm;
