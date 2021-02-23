const useIntent = (intent = 'none') => {
    switch (intent.toLowerCase()) {
        case 'none':
            return {
                bgColor: 'gray-400',
                hoverColor: 'gray-500',
                activeColor: 'gray-400',
                borderColor: 'black',
                textColor: 'white',
            };
        case 'transparent':
            return {
                bgColor: 'white',
                hoverColor: 'white',
                activeColor: 'white',
                borderColor: 'none',
                textColor: 'gray-900',
            };
        case 'primary':
            return {
                bgColor: 'blue-600',
                hoverColor: 'blue-700',
                activeColor: 'blue-600',
                borderColor: 'black',
                textColor: 'white',
            };
        case 'success':
            return {
                bgColor: 'green-500',
                hoverColor: 'green-600',
                activeColor: 'green-500',
                borderColor: 'black',
                textColor: 'white',
            };
        case 'warning':
            return {
                bgColor: 'yellow-400',
                hoverColor: 'yellow-500',
                activeColor: 'yellow-400',
                borderColor: 'black',
                textColor: 'white',
            };
        case 'danger':
            return {
                bgColor: 'red-600',
                hoverColor: 'red-700',
                activeColor: 'red-600',
                borderColor: 'black',
                textColor: 'white',
            };
        default:
            return {
                bgColor: '',
                hoverColor: '',
                activeColor: '',
                borderColor: '',
                textColor: '',
            };
    }
};

export default useIntent;
