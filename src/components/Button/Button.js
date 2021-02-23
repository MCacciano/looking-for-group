import PropTypes from 'prop-types';

import useIntent from '../../hooks/useIntent';

const Button = ({ intent, type, className, children, ...props }) => {
    const {
        bgColor,
        hoverColor,
        activeColor,
        borderColor,
        textColor,
    } = useIntent(intent);

    return (
        <button
            type={type}
            className={`cursor-pointer font-normal border border-${borderColor} text-${textColor} bg-${bgColor} hover:bg-${hoverColor} active:bg-${activeColor} focus:outline-none p-1 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    intent: 'none',
    className: '',
};

Button.propTypes = {
    intent: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
