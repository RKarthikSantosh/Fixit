'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutDevelopers() {
    const developers = [
        {
            name: "Nikhil",
            role: "Frontend Developer",
            bio: "Passionate about creating user-friendly interfaces.",
            image: "/nikhil.jpg",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com/johndoe"
        },
        {
            name: "Vishal",
            role: "Backend Developer",
            bio: "Loves building scalable and efficient server-side applications.",
            image: "/vishal.jpeg",
            linkedin: "https://linkedin.com/in/vishalkarnati",
            github: "https://github.com/Vishal-05y"
        },
        {
            name: "Santosh",
            role: "UI/UX Designer",
            bio: "Focused on designing beautiful and intuitive user experiences.",
            image: "/santosh.jpeg",
            linkedin: "https://linkedin.com/in/ramineni-karthik-santosh-1b6272322/",
            github: "https://github.com/RKarthikSantosh"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Project Overview */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto mb-20 text-center"
            >
                <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Meet Our Team
                </h1>
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700/30 shadow-xl">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-100">About FixIt</h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        We are students from CVR College of Engineering, united by a vision to create FixIt - an innovative service booking platform that simplifies finding reliable service providers.
                    </p>
                    <p className="text-gray-300 mb-8">
                        FixIt connects users with verified professionals for services like home repairs, electronics maintenance, plumbing, and electrical work, offering a seamless experience from booking to completion.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Easy Booking", desc: "Schedule services effortlessly with our intuitive interface" },
                            { title: "Verified Providers", desc: "All professionals are thoroughly vetted for your peace of mind" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-6 rounded-lg border border-gray-600/30"
                            >
                                <h3 className="font-semibold text-blue-400 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Developers Grid */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {developers.map((dev, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                    >
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <Image 
                                src={dev.image} 
                                alt={dev.name} 
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full border-4 border-gray-600/50 hover:border-blue-500/50 transition-colors duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white text-center">{dev.name}</h2>
                        <h3 className="text-blue-400 text-lg text-center mb-4">{dev.role}</h3>
                        <p className="text-gray-300 text-center mb-6 px-2">{dev.bio}</p>
                        <div className="flex justify-center gap-6">
                            <motion.a 
                                href={dev.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </motion.a>
                            <motion.a 
                                href={dev.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}