import { motion } from 'framer-motion';
import { Car, Shield, Award, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const Home = () => {
    const services = [
        {
            title: "Beginner Lessons",
            description: "Start your journey with confidence. Our patient instructors guide you through the basics to test readiness.",
            icon: Car
        },
        {
            title: "Pre-Test Course",
            description: "Fine-tune your skills before the big day. Mock tests and specific route preparation to ensure success.",
            icon: Shield
        },
        {
            title: "Advanced Driving",
            description: "Take your driving to the next level with advanced handling, motorway tuition, and eco-driving techniques.",
            icon: Award
        }
    ];

    return (
        <div className="bg-dark">
            <Hero />

            {/* Introduction Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">About Halo</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                            Driving Excellence Since 2010
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            At Halo School of Motoring, we believe that learning to drive is more than just passing a test—it's a life skill.
                            Our premium approach combines modern teaching techniques with a calm, supportive environment to create
                            safe, confident drivers for life.
                        </p>
                        <Button variant="outline">Read Our Story</Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-sm overflow-hidden border border-white/10 relative z-10">
                            {/* Placeholder for an image - using a gradient for now if no other image available */}
                            <div className="w-full h-full bg-gradient-to-br from-secondary to-black flex items-center justify-center">
                                <span className="text-white/20 font-serif text-6xl">HALO</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-primary z-0" />
                    </motion.div>
                </div>
            </section>

            {/* Services Teaser */}
            <section className="py-24 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-white">Tailored Driving Solutions</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to Start Your Journey?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Book your first lesson today and experience the Halo difference.
                        Limited slots available for new students.
                    </p>
                    <Button variant="primary">Book Now</Button>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
