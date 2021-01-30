import { Field } from 'formik';

const FormikInput = ({
  label = '',
  id = '',
  className = '',
  children,
  ...props
}) => {
  return (
    <label htmlFor={id} className='flex flex-col items-start'>
      <span className='text-lg font-rubik'>{label}</span>
      <Field
        id={id}
        className={`border border-black rounded shadow p-1 ${className}`}
        {...props}
      >
        {children}
      </Field>
    </label>
  );
};

export default FormikInput;
