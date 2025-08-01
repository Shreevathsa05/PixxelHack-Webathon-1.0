'use client';
import React, { useEffect, useRef } from 'react';
import { motion, scale, useInView } from 'framer-motion';
import Image from 'next/image';

function Hero() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    const isFirstInView = useInView(firstRef, { once: true });
    const isSecondInView = useInView(secondRef, { once: true });

    useEffect(() => {
        console.log(firstRef, secondRef)
    }, [firstRef, secondRef])

    return (
        <>
            {/* First section - animates on load */}
            <motion.div
                ref={firstRef}
                className="flex flex-col justify-center items-center mt-[3vh] mb-[10vh]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <div>
                    <h1 className="text-cyan-400 text-xl py-8">Featured</h1>
                </div>

                <motion.div
                    className="md:w-[70%] md:h-[70vh] w-[90%] min-h-[40vh] shadow-[0_0_20px_rgba(6,182,212,0.8)] text-gray-500 md:pl-3 rounded-xl mx-4 flex flex-col justify-center items-center md:grid  md:grid-cols-2 md:justify-items-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Game Trailer */}
                    <div className="relative md:w-full w-[90%] md:h-[95%] h-[50vh] sm:p-0 pt-2.5 rounded-xl overflow-hidden">
                        {/* Video */}
                        <video
                            src="/The_Age_of_Bhaarat_trailer.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                            className="inset-0 w-full h-full object-cover"
                        ></video>

                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex items-end p-4 justify-start">
                            <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-md text">
                                The <br />Age of <br /> Bhaarat
                            </h2>
                        </div>
                    </div>

                    {/* Genre Show */}
                    <div className='w-full flex flex-col items-center gap-4 py-4 sm:px-14 md:h-full md:justify-center'>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="relative w-[90%] h-[30vh] rounded-xl overflow-hidden sm:bg-none bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-white/20">
                            <Image
                                src="/Action_Adventure_Hero.png"
                                alt="Action Adventure Genre Image"
                                fill
                                className="object-contain p-2"
                            />
                        </motion.div>
                        {/* <div className="h-[45%] relative w-[95%] p-1"> */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="relative w-[90%] h-[30vh] rounded-xl overflow-hidden bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-white/20">
                            <Image
                                src="/Horror_Hero.png"
                                alt="Action Adventure Genre Image"
                                fill
                                className="object-contain p-2"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>



            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="flex justify-center items-center"
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 1 }}
                    className="md:w-[70%] md:h-[70vh] w-[90%] min-h-[60vh] shadow-[0_0_20px_rgba(6,182,212,0.8)] text-gray-500 px-4 rounded-xl mx-4 mt-8 mb-[5vh] grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* LEFT SECTION - Two stacked images */}
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <div className="relative w-full h-[25vh] md:h-[30vh] rounded-xl overflow-hidden">
                            <Image
                                src="/RDR.jpg"
                                alt="Early Gaming"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative w-full h-[25vh] md:h-[30vh] rounded-xl overflow-hidden">
                            <Image
                                src="/BATTLE_FIELD.avif"
                                alt="Console Era"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT SECTION - Slider */}
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-xl">
                            {/* Basic slider using Tailwind and animation */}
                            <div className="w-full h-full flex animate-slide gap-2">
                                <div className="relative min-w-full h-full">
                                    <Image src="/GTA.jpg" alt="Slide 1" fill className="object-cover" />
                                </div>
                                <div className="relative min-w-full h-full">
                                    <Image src="/TITAN_QUEST.avif" alt="Slide 2" fill className="object-cover" />
                                </div>
                                <div className="relative min-w-full h-full">
                                    <Image src="/GENSHIN.avif" alt="Slide 3" fill className="object-cover" />
                                </div>
                                <div className="relative min-w-full h-full">
                                    <Image src="/WITCH_HUNT.avif" alt="Slide 3" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

        </>
    );
}

export default Hero;
