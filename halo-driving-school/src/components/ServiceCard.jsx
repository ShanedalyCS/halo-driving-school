import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon: Icon, link = '/services' }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-secondary/50 p-8 border border-white/5 hover:border-primary/30 transition-colors group"
        >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {description}
            </p>
            <Link to={link} className="inline-flex items-center text-primary text-sm uppercase tracking-wider font-bold hover:gap-2 transition-all">
                Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
