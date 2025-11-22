import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="block w-fit">
                            <img src={logo} alt="Halo School of Motoring" className="h-16 w-auto object-contain" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Setting the standard in driver education. Experience premium tuition with a focus on safety, confidence, and excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-primary font-serif text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-primary font-serif text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm">123 Driving Lane, Dublin, Ireland</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm">+353 1 234 5678</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm">info@halomotoring.ie</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-xs uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Halo School of Motoring. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
