import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as CopyIcon } from '../../assets/icons/edit-copy.svg';

import useGlobalContext from '../../hooks/useGlobalContext';

import FormikField from '../FormikField/';
import Button from '../Button';
import useUserContext from '../../hooks/useUserContext';

const initialValues = {
    forename: '',
    surname: '',
    server: '',
};

const validationSchema = Yup.object().shape({
    forename: Yup.string().required('Forename is required'),
    surname: Yup.string().required('Surname is required'),
    server: Yup.string().required('Server is required'),
});

const CharacterConnectForm = ({ onSubmit, className, formClassName }) => {
    const { user } = useUserContext();
    const { servers } = useGlobalContext();

    const [isCopied, setIsCopied] = useState(false);

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

    return (
        <div className={className}>
            <ul className='flex flex-col text-sm font-light font-rubik list-decimal p-3'>
                <li className='mb-1'>
                    Copy the code at the bottom into your Lodestone Character
                    Profile
                </li>
                <li className='mb-1'>
                    Enter your character Forename, Surname, and select your
                    Server
                </li>
                <li className='mb-1'>Connect!</li>
            </ul>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className={`flex flex-col ${formClassName}`}>
                    <FormikField
                        label='Forename'
                        id='forename'
                        name='forename'
                        className='w-full'
                    />
                    <FormikField
                        label='Surname'
                        id='surname'
                        name='surname'
                        className='w-full'
                    />
                    <FormikField
                        control='select'
                        label='Server'
                        id='server'
                        name='server'
                        className='w-full'
                    >
                        <option value=''>Select Server</option>
                        {servers.map(server => (
                            <option key={server} value={server}>
                                {server}
                            </option>
                        ))}
                    </FormikField>
                    <Button
                        type='submit'
                        className='border border-black bg-blue-600 text-white font-medium rounded shadow my-2 py-1 px-2'
                    >
                        Connect
                    </Button>
                </Form>
            </Formik>
            <div className='w-full mt-3'>
                <div className='flex border border-gray-500 rounded shadow hover:bg-blue-600 hover:text-white cursor-pointer'>
                    <Button
                        intent='primary'
                        className='flex-1'
                        onClick={handleCopyCode}
                    >
                        <h3 className='font-rubik font-medium p-2'>
                            {user.characterConnectCode}
                        </h3>
                    </Button>
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
        </div>
    );
};

CharacterConnectForm.defaultProps = {
    className: '',
    formClassName: '',
};

CharacterConnectForm.propTypes = {
    className: PropTypes.string,
    formClassName: PropTypes.string,
    onSubmit: PropTypes.func,
};

export default CharacterConnectForm;
