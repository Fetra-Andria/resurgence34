import React from 'react';
import '../Styles/Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn-wide'];


export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonStyle) ? buttonStyle : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}onClick={onclick} type={type}>{children}</button>
    )
}