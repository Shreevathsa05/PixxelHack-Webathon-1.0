"use client";
import { useEffect, useRef, useState } from "react";
import GameCard from "./GameCard";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import Framer Motion

// Sample data
const items = [
  {
    title: "Action",
    games: [{ name: "Crysis 3", image: "wp4705310.jpg", price: 499 }],
  },
  {
    title: "Adventure",
    games: [{ name: "The Elder Scrolls 5", image: "The elder scrolls 5.jpg", price: 499 }],
  },
  {
    title: "Sports",
    games: [{ name: "Fifa 24", image: "fifa 24.jpg", price: 499 }],
  },
  {
    title: "Anime",
    games: [{ name: "Dragon Ball 10", image: "dragon ball 10.png", price: 499 }],
  },
  {
    title: "Racing",
    games: [{ name: "Need For Speed", image: "NFS.jpg", price: 499 }],
  },
];

export default function Accordion() {
  return (
    <div className="mt-8 w-full max-w-2xl space-y-4 relative z-10">
      {items.map((item, index) => (
        <AnimatedAccordion key={index} title={item.title} games={item.games} />
      ))}
    </div>
  );
}

function AnimatedAccordion({ title, games }) {
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
    className="relative text-white rounded-lg overflow-hidden 
  bg-black hover:bg-cyan-700  transition-colors duration-300 ease-in-out 
  shadow-[0_0_10px_rgba(6,182,212,0.8)]"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && games[0]?.image && (
          <motion.div
            key="hover-image"
            className="absolute right-[320px] top-1/2 transform -translate-y-1/2 z-20"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={`/images/${games[0].image}`}
              alt={games[0].name}
              width={80}
              height={80}
              className="rounded-full aspect-square object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-none w-full flex justify-between items-center px-4 py-6 text-left text-lg focus:outline-none"
      >
        {title}
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={contentRef}
        className="px-4 border-t border-gray-700 transition-all duration-300 ease-in-out"
        style={{ height, overflow: "hidden" }}
      >
        <div className="py-2 space-y-3">
          {games.map((game, i) => (
            <GameCard key={i} name={game.name} image={game.image} price={game.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
