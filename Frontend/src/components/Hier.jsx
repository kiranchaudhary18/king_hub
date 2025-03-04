import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const faqData = [
    {
        question: 'What are the working hours?',
        answer: 'We offer flexible hours—choose shifts that suit your availability, including mornings, evenings, and weekends.',
    },
    {
        question: 'Do I need my own vehicle?',
        answer: 'Yes, you are required to have your own vehicle (bike, scooter, or car) along with a valid driving license.',
    },
    {
        question: 'How much can I earn?',
        answer: 'Your earnings depend on the number of deliveries. We offer competitive pay along with performance-based bonuses.',
    },
];

function Hier() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        vehicleType: '',
        licenseNumber: '',
        experience: '',
    });

    const [openFAQ, setOpenFAQ] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://king-hub-1.onrender.com/api/hier', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            if (response.ok) {
                // Replace alert with toast notification
                toast.success(data.message || 'Application submitted successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    address: '',
                    vehicleType: '',
                    licenseNumber: '',
                    experience: '',
                });
            } else {
                // Replace alert with error toast
                toast.error(data.error || 'Failed to submit application.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Replace alert with error toast
            toast.error('An error occurred while submitting your application.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        setLoading(false);
    };
    

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="bg-gray-50 text-gray-800 pt-15">
            {/* Add ToastContainer at the top level of your component */}
            <ToastContainer position="top-right" />
            
            {/* Hero Section */}
            <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-lg w-full" style={{ height: '500px' }}>
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Join Our Delivery Team!</h1>
                    <p className="text-xl md:text-2xl">
                        Become a delivery boy and enjoy flexible hours, competitive pay, and exciting perks.
                    </p>
                </div>
            </section>

            {/* About the Job Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full py-20 bg-gradient-to-r from-blue-50 to-green-50"
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 mb-8">
                        About the Job
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        As a delivery partner, you'll ensure orders are delivered quickly and efficiently while providing exceptional customer service. Whether you're looking for part-time flexibility or a full-time career, we have exciting opportunities for you.
                    </p>
                </div>
            </motion.div>

            {/* Combined Why Join Us? Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full py-20 bg-gradient-to-r from-blue-100 via-green-100 to-teal-100"
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">Why Join Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <span className="text-5xl">💰</span>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Competitive Pay</h3>
                            <p className="mt-2 text-gray-600">
                                Enjoy weekly payouts and performance-based bonuses.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <span className="text-5xl">⏰</span>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Flexible Hours</h3>
                            <p className="mt-2 text-gray-600">
                                Choose shifts that suit your lifestyle.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <span className="text-5xl">🎁</span>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Exclusive Perks</h3>
                            <p className="mt-2 text-gray-600">
                                Unlock rewards, discounts, and opportunities for bonuses.
                            </p>
                        </div>
                    </div>
                    {/* Modern Benefits Summary */}
                    <div className="w-full px-4 py-8 bg-white shadow-md rounded-lg inline-block">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Perks at a Glance</h3>
                        <p className="text-gray-700">
                            Benefit from competitive pay, flexible scheduling, exclusive discounts, and a supportive team environment that values your growth and success.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Requirements Section */}
            <section className="w-full px-4 py-8 bg-gradient-to-r from-blue-50 to-green-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-semibold text-gray-800 mb-4">Requirements</h2>
                    <p className="text-gray-800 mb-8 text-xl">
                        To apply for this position, you must meet the following requirements:
                    </p>
                    <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <p className="text-gray-800">Valid driving license and own vehicle (bike, scooter, or car).</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <p className="text-gray-800">Good knowledge of local routes and navigation skills.</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <p className="text-gray-800">Ability to work flexible hours, including weekends.</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <p className="text-gray-800">Strong communication and customer service skills.</p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            <p className="text-gray-800">Minimum 1 year of delivery experience (preferred but not mandatory).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full py-20 bg-white"
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
                        Apply Now
                    </h2>
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="vehicleType" className="block text-lg font-medium text-gray-700">
                                    Vehicle Type
                                </label>
                                <select
                                    id="vehicleType"
                                    name="vehicleType"
                                    value={formData.vehicleType}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                >
                                    <option value="">Select Vehicle Type</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Scooter">Scooter</option>
                                    <option value="Car">Car</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="licenseNumber" className="block text-lg font-medium text-gray-700">
                                    Driving License Number
                                </label>
                                <input
                                    type="text"
                                    id="licenseNumber"
                                    name="licenseNumber"
                                    value={formData.licenseNumber}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="experience" className="block text-lg font-medium text-gray-700">
                                Years of Experience
                            </label>
                            <input
                                type="number"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Application'}
                        </motion.button>
                    </form>
                </div>
            </motion.div>

            {/* FAQ Section with Drawer Functionality */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="w-full py-20 bg-gradient-to-r from-blue-100 via-green-100 to-teal-100"
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 ">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto text-lg e space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border-b border-white pb-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left font-bold text-xl focus:outline-none flex justify-between items-center"
                                >
                                    <span>{faq.question}</span>
                                    <span>{openFAQ === index ? '-' : '+'}</span>
                                </button>
                                {openFAQ === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.5 }}
                                        className="mt-2 text-base "
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Hier;