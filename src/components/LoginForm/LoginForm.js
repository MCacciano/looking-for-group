import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { auth, signInWithGoogle } from '../../firebase';

import FormikField from '../FormikField';

const initialValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm = ({ className, onToggleForm }) => {
    const handleToggleForm = () => {
        if (onToggleForm) onToggleForm();
    };

    const handleSubmit = async ({ email, password }) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form
                className={`flex flex-col items-center p-2 justify-between border border-black shadow rounded ${className}`}
            >
                <div className='flex justify-center my-4'>
                    <h1 className='text-3xl font-medium'>Login</h1>
                </div>
                <FormikField
                    label='Email'
                    type='email'
                    name='email'
                    // id='email'
                    className='p-2 mb-2'
                />
                <FormikField
                    label='Password'
                    type='password'
                    // id='password'
                    name='password'
                    className='p-2 mb-2'
                />
                <div className='flex flex-col w-full'>
                    <button
                        type='submit'
                        className='bg-black text-white rounded shadow font-normal p-1 my-1'
                    >
                        Log In
                    </button>
                    <button
                        type='button'
                        onClick={signInWithGoogle}
                        className='text-white border border-black bg-red-700 p-1 my-1 cursor-pointer shadow rounded font-normal'
                    >
                        Sign In With Google
                    </button>
                </div>
                <div className='text-sm'>
                    <p>
                        Need an account?&nbsp;
                        <button
                            type='button'
                            onClick={handleToggleForm}
                            className='outline-none text-blue-600'
                        >
                            Sign up!
                        </button>
                    </p>
                </div>
            </Form>
        </Formik>
    );
};

LoginForm.defaultProps = {
    className: '',
};

LoginForm.propTypes = {
    className: PropTypes.string,
    onToggleForm: PropTypes.func,
};

export default LoginForm;
