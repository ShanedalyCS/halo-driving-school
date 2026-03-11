import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
    const hayleyPortrait = "/images/hayley-kennedy.jpeg";
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
                            Learning to drive can be daunting, but it does not have to be. At Halo School of Motoring, the focus is on a relaxed, easy-going approach that still delivers the right amount of instruction.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Because everyone learns differently, each lesson is adapted to meet you where you are, so you understand and remember what you have learned.
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

                    <div className="relative h-[400px] bg-secondary/30 rounded-sm border border-white/5 overflow-hidden">
                        <img
                            src={hayleyPortrait}
                            alt="Hayley Kennedy, driving instructor"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Instructor Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-serif text-white text-center mb-12">Meet Your Instructor</h2>
                    <div className="max-w-3xl mx-auto bg-secondary/50 p-8 border border-primary/20 rounded-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-32 h-32 rounded-full bg-gray-700 shrink-0 border-2 border-primary overflow-hidden">
                                <img
                                    src={hayleyPortrait}
                                    alt="Hayley Kennedy"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl text-white font-serif mb-2">Hayley Kennedy</h3>
                                <p className="text-primary text-sm uppercase tracking-wider mb-4">Instructor & Founder</p>
                                <div className="text-gray-400 text-sm leading-relaxed space-y-4">
                                    <p>
                                        My name is Hayley. I am from Kilcock. Born and reared, I never ventured too far, so you could say I am a bit of a home bird. I became a mammy at 22, and my daughter, now almost 10, has always been my biggest motivation to be the best I can be.
                                    </p>
                                    <p>
                                        In addition to my driving instructor qualification, I hold a QQI Level 6 in Training, Delivery and Evaluation. This helps me adapt my teaching methods to meet each learner where they are, so lessons are clear, memorable, and suited to different learning styles.
                                    </p>
                                    <p>
                                        The sense of fulfillment I receive from seeing someone go from "Hayley, I haven't got a clue" to "Oh my god Hayley, I passed my test" is priceless. Helping people and having a positive impact on their lives is my ultimate goal as a driving instructor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
