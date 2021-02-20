import PropTypes from 'prop-types';
import { useField, ErrorMessage } from 'formik';

import Input from './Input';

const FormikField = ({
    control,
    label,
    wrapperClassName,
    className,
    children,
    name,
    ...props
}) => {
    const [field, meta] = useField(name);

    const classes = `border rounded shadow p-1 focus:outline-none border-${
        meta.error ? 'red-600' : 'black'
    } ${className}`;

    return (
        <label
            htmlFor={props.id}
            className={`flex flex-col items-start mb-2 font-roboto ${wrapperClassName}`}
        >
            <span className='text-lg'>{label}</span>
            <Input
                {...field}
                {...props}
                control={control}
                name={name}
                className={classes}
            >
                {children}
            </Input>
            <ErrorMessage name={name}>
                {msg => <p className='text-xs text-red-600'>{msg}</p>}
            </ErrorMessage>
        </label>
    );
};

FormikField.defaultProps = {
    className: '',
    label: '',
    wrapperClassName: '',
    control: 'text',
};

FormikField.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    wrapperClassName: PropTypes.string,
    control: PropTypes.string,
    children: PropTypes.node,
};

export default FormikField;
