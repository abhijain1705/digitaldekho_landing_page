import React, { useState } from 'react'
import MenuItems from './menuItem';
import { motion } from "framer-motion";
import { sidebarVariants, navigationVariants, navHeadLabels } from '../../../../content/navbarVariants';
import MenuToggler from './menuToggler';


const SideNavigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
            <motion.div className="background" variants={sidebarVariants} />
            <MenuToggler isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            <nav className='sideNavbar'>
                <motion.ul variants={navigationVariants} className='navList'>
                    {
                        navHeadLabels.map((item, index) => {
                            return <MenuItems close={() => setIsOpen(false)} label={item} index={index} key={index} />
                        })
                    }
                </motion.ul>
            </nav>
        </motion.nav>
    )
}

export default SideNavigation