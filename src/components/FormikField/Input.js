import PropTypes from 'prop-types';

const Input = ({ control, children, ...props }) => {
    switch (control) {
        case 'text':
            return <input {...props} />;
        case 'select':
            return <select {...props}>{children}</select>;
        default:
            return null;
    }
};

Input.defaultProps = {
    control: 'text',
};

Input.propTypes = {
    control: PropTypes.string,
    children: PropTypes.node,
};

export default Input;
