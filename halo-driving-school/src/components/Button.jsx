import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
    const variants = {
        primary: "bg-primary text-dark hover:bg-white hover:text-dark shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]",
        outline: "border border-primary text-primary hover:bg-primary hover:text-dark",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
