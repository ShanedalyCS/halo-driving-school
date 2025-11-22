import { motion } from 'framer-motion';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-dark pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    Get in <span className="text-primary">Touch</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Ready to start driving? Have a question? We're here to help.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-secondary/30 p-8 border border-white/5 rounded-sm">
                            <h3 className="text-xl font-serif text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 text-gray-300">
                                    <Phone className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                                        <p>+353 1 234 5678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <Mail className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                                        <p>info@halomotoring.ie</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                                        <p>123 Driving Lane, Dublin, Ireland</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 text-gray-300">
                                    <Clock className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Hours</p>
                                        <p>Mon - Fri: 8am - 8pm</p>
                                        <p>Sat: 9am - 5pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider">First Name</label>
                                <input type="text" className="w-full bg-secondary/50 border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-wider">Last Name</label>
                                <input type="text" className="w-full bg-secondary/50 border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                            <input type="email" className="w-full bg-secondary/50 border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                            <textarea rows="4" className="w-full bg-secondary/50 border border-white/10 p-3 text-white focus:border-primary focus:outline-none transition-colors"></textarea>
                        </div>
                        <Button variant="primary" className="w-full">Send Message</Button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
