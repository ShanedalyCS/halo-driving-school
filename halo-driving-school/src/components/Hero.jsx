import { motion } from 'framer-motion';
import Button from './Button';
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h2 className="text-primary uppercase tracking-[0.2em] text-sm md:text-base font-bold">
                        Excellence in Driver Education
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight">
                        Master the <span className="text-primary">Road</span>
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Experience premium driving tuition tailored to your needs.
                        Join the elite circle of safe, confident, and skilled drivers.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary">Book a Lesson</Button>
                        <Button variant="outline">View Services</Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero;
