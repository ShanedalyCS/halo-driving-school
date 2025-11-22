import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, recommended = false }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className={`p-8 border ${recommended ? 'border-primary bg-secondary/80' : 'border-white/10 bg-secondary/40'} relative flex flex-col`}
    >
        {recommended && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-dark text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                Most Popular
            </div>
        )}
        <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
        <div className="text-3xl font-bold text-primary mb-6">{price}</div>
        <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <Button variant={recommended ? 'primary' : 'outline'} className="w-full justify-center">Choose Plan</Button>
    </motion.div>
);

const Services = () => {
    const packages = [
        {
            title: "Single Lesson",
            price: "€50",
            features: [
                "1 Hour Duration",
                "Door-to-Door Collection",
                "Full Debrief",
                "Digital Progress Record"
            ]
        },
        {
            title: "Standard Package",
            price: "€280",
            features: [
                "6 Hours Total",
                "Structured Syllabus",
                "Mock Test Included",
                "Theory Test Support",
                "Flexible Scheduling"
            ],
            recommended: true
        },
        {
            title: "Complete EDT",
            price: "€550",
            features: [
                "12 EDT Lessons",
                "Full RSA Syllabus Covered",
                "Logbook Stamped",
                "Pre-Test Assessment",
                "Car Hire for Test Available"
            ]
        }
    ];

    return (
        <div className="bg-dark pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    Our <span className="text-primary">Services</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Transparent pricing with no hidden costs. Choose the package that suits your journey.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <PricingCard key={index} {...pkg} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Car Hire for Driving Test</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Don't have a car for your test? Use our fully insured, dual-controlled vehicle. Includes a 1-hour pre-test warm-up lesson.
                    </p>
                    <div className="text-2xl font-bold text-primary mb-8">€120</div>
                    <Button variant="outline">Enquire Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Services;
