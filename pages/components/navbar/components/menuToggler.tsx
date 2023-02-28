import React from 'react';

interface MenuTogglerProp {
    isOpen: boolean;
    toggle: () => void;
}

const MenuToggler = ({ toggle, isOpen }: MenuTogglerProp) => {

    return (
        <button onClick={toggle} className={`toggleBtn hamburger hamburger--elastic ${isOpen ? 'is-active' : ''}`} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
};

export default MenuToggler;