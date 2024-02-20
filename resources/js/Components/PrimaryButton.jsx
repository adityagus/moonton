import React from "react";
import  PropTypes from "prop-types";

const PrimaryButton = function PrimaryButton({ type = 'submit', className = '', variant = 'primary', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && 'opacity-30'} btn-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );

}

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "light-outline", "white-outline"]),
    processing: PropTypes.bool,
    children: PropTypes.node,
}

export default PrimaryButton;