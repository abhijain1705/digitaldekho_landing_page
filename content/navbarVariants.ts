import { Variants } from "framer-motion";

const sidebarVariants: Variants = {
    open: {
        clipPath: `circle(1000px at 40px 40px)`,
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        clipPath: `circle(30px at 40px 40px)`,
        transition: {
            duration: 0.4,
            delay: 0.4,
        },
    },
};

const menuItemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
};



const navigationVariants: Variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const navHeadLabels = ['Home', 'About us', 'Services', 'Testimonials', 'Join us'];

export {sidebarVariants, navigationVariants, menuItemVariants, navHeadLabels};