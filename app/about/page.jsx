'use client'
import { motion, scale, useInView } from 'framer-motion';
import ProfileCard from "../../components/ProfileCard";
import { useRef } from 'react';
import Story from '../../components/Story';

export default function About() {
  const firstRef = useRef(null);
    const secondRef = useRef(null);

    const isFirstInView = useInView(firstRef, { once: true });
    const isSecondInView = useInView(secondRef, { once: true });
  return (
    <>
    <motion.div 
    className='flex justify-around items-center mt-14'
      ref={firstRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
    <Story/>
    </motion.div>

    <motion.div 
      ref={firstRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <ProfileCard/>
    </motion.div>

    </>
  );
}
