import PropTypes from 'prop-types';

import useIntent from '../../hooks/useIntent';

const Button = ({ intent, type, className, children, onClick }) => {
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
            onClick={onClick}
            className={`cursor-pointer font-normal border border-${borderColor} text-${textColor} bg-${bgColor} hover:bg-${hoverColor} active:bg-${activeColor} focus:outline-none p-1 ${className}`}
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
    onClick: PropTypes.func,
};

export default Button;
