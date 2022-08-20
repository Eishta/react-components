import React from "react";

const Tab = ({ isSelected, label, onClick, disabled }) => {
    let className = `tab ${isSelected ? "isSelected" : ""} ${disabled ? "disabled" : ""
        }`;

    return (
        <div className={className} onClick={!disabled ? onClick : undefined}>
            {label}
        </div>
    );
};

export default Tab;
