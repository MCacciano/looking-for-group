import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { auth, signInWithGoogle } from '../../firebase';

import FormikField from '../FormikField';
import Button from '../Button/Button';

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
                    id='email'
                    className='p-2 mb-2'
                />
                <FormikField
                    label='Password'
                    type='password'
                    id='password'
                    name='password'
                    className='p-2 mb-2'
                />
                <div className='flex flex-col w-full'>
                    <Button
                        intent='primary'
                        type='submit'
                        className='shadow font-normal my-1 rounded'
                    >
                        Log In
                    </Button>
                    <Button
                        intent='danger'
                        onClick={signInWithGoogle}
                        className='shadow font-normal my-1 rounded'
                    >
                        Sign In With Google
                    </Button>
                </div>
                <div className='text-sm'>
                    <p>
                        Need an account?&nbsp;
                        <Button
                            intent='transparent'
                            onClick={handleToggleForm}
                            className='outline-none text-blue-600'
                        >
                            Sign up!
                        </Button>
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
