import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const features = [
        "RSA Approved Instructors",
        "Dual Controlled Vehicles",
        "98% Pass Rate",
        "Flexible Scheduling",
        "Door-to-Door Collection",
        "Nervous Pupil Specialists"
    ];

    return (
        <div className="bg-dark pt-24 pb-12">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    About <span className="text-primary">Halo</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Founded on the principles of safety, patience, and excellence. We don't just teach you to pass a test; we teach you to drive for life.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-serif text-white mb-6">Our Philosophy</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            At Halo School of Motoring, we understand that learning to drive can be a daunting experience. That's why we've developed a unique teaching methodology that prioritizes your comfort and confidence.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Our instructors are hand-picked not just for their driving skills, but for their ability to communicate effectively and patiently. We believe that a calm environment is the best classroom.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative h-[400px] bg-secondary/30 rounded-sm border border-white/5 flex items-center justify-center">
                        <span className="text-white/20 font-serif text-4xl">Instructor Image</span>
                    </div>
                </div>

                {/* Instructor Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-serif text-white text-center mb-12">Meet Your Instructor</h2>
                    <div className="max-w-3xl mx-auto bg-secondary/50 p-8 border border-primary/20 rounded-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-32 h-32 rounded-full bg-gray-700 shrink-0 border-2 border-primary" />
                            <div>
                                <h3 className="text-xl text-white font-serif mb-2">John Doe</h3>
                                <p className="text-primary text-sm uppercase tracking-wider mb-4">Senior Instructor & Founder</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    With over 15 years of experience and thousands of successful passes, John brings a wealth of knowledge and a calm, reassuring presence to every lesson. He specializes in helping nervous drivers build confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
