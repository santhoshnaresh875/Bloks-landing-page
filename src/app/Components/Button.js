import React from 'react';

const BaseButtonStyle = "py-2 px-4 rounded transition duration-200 ease-in-out cursor-pointer";

const ButtonStyles = {
    primary: `${BaseButtonStyle} bg-blue hover:bg-blue-700 text-white`,
    secondary: `${BaseButtonStyle} bg-gray-500 hover:bg-gray-700 text-white`,
    danger: `${BaseButtonStyle} bg-red-500 hover:bg-red-700 text-white`,
    success: `${BaseButtonStyle} bg-green-500 hover:bg-green-700 text-white`,
    outline: `${BaseButtonStyle} border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`,
    transparent: `${BaseButtonStyle} hover:bg-neutral-700 text-white`,
};




const Button = ({ buttonText, style, onClick }) => {
    return (
        <button
            className={`btn ${style}`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

export default Button;


