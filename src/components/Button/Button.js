import PropTypes from 'prop-types';

const Button = ({ type, className, children, ...props }) => {
    // TODO: Write a useIntent hook that will color the button based on the intent
    // ex: "none" -> gray
    //          "default": 300
    //          "hover": 400
    //          "active": 400
    //          "border": 400
    //          "text": black
    //     "primary" -> blue
    //     "success" -> green
    //     "failure" -> red

    return (
        <button
            type={type}
            className={`cursor-pointer shadow rounded font-normal focus:outline-none p-1 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    className: '',
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
};

export default Button;
