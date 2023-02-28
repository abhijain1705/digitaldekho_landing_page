import { motion } from "framer-motion";
import React from "react";
import MenuItems from "./components/menuItem";
import { navHeadLabels, navigationVariants } from "../../../content/navbarVariants";
import { UseSizeContext } from "../../../context/size_contex";
import SideNavigation from "./components/sideNavigation";

const Navbar = () => {
    const { width } = UseSizeContext();

    return (
        <>
            {width <= 820 ? (
                <div className={`navbar ${width <= 820 ? "bg-color-small" : "bg-color-big"}`}>
                    <SideNavigation />
                    <img className='logo' style={{ objectFit: 'contain' }} src={'/assets/images/logo.png'} alt='logo' />
                </div>
            ) : (
                <div className={`navbar ${width <= 820 ? "bg-color-small" : "bg-color-big"}`}>
                    <img className='logo' style={{ objectFit: 'contain' }} src={'/assets/images/logo.png'} alt='logo' />
                    <motion.ul
                        variants={navigationVariants}
                        className="big-screen-navList"
                    >
                        {navHeadLabels.map((item, index) => {
                            return <MenuItems close={() => { }} label={item} index={index} key={index} />;
                        })}
                    </motion.ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
