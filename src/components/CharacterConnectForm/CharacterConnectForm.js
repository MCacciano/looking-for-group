import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import useGlobalContext from '../../hooks/useGlobalContext';

import FormikField from '../FormikField/';
import Button from '../Button';

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

const CharacterConnectForm = ({ onSubmit, className = '' }) => {
    const { servers } = useGlobalContext();

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form className={`flex flex-col ${className}`}>
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
    );
};

export default CharacterConnectForm;
