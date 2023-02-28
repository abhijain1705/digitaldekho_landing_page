import React from "react";
import { motion } from "framer-motion";
import { navHeadLabels } from "../../../../content/navbarVariants";
import { menuItemVariants } from "../../../../content/navbarVariants";
import FormIcon from "../../../../content/icons/form";

interface MenuItemsProp {
    label: string;
    index: number;
    close: () => void;
}

const MenuItems = ({ label, index, close }: MenuItemsProp) => {

    const lastItem = index === navHeadLabels.length - 1;

    return (
        <motion.li variants={menuItemVariants} className="navRow">
            <a onClick={close} href={`${index === 0 ? '#home' : index === 1 ? '#aboutus' : index === 2 ? '#services' : index === 3 ? '#testimonials' : '/components/form/form'}`}
                className={`${lastItem ? 'last-placeholder' : 'text-placeholder'}`}
            >
                <span>{label}</span>
                {lastItem ? <FormIcon /> : <></>}
            </a>
        </motion.li>
    );
};

export default MenuItems;
