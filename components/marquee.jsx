"use client";
import React from "react";
import Image from "next/image";
import ShinyText from "../Reactbits/ShinyText/ShinyText";
const items = [
  { title: "Crysis 3", img: "wp4705310.jpg" },
  { title: "FIFA 24", img: "fifa 24.jpg" },
  { title: "Need for Speed", img: "NFS.jpg" },
  { title: "Dragon Ball 10", img: "dragon ball 10.png" },
  { title: "Elder Scrolls 5", img: "The elder scrolls 5.jpg" },
];

export default function Marquee() {
  const repeated = [...items, ...items]; // duplicate for seamless scroll

  return (<>
  <ShinyText text="TRENDING" disabled={false} speed={5} className='ml-180 flex justify-center text-cyan-500 text-4xl my-4 font-semibold' />

    <div className="marquee-outer my-12 ">
      <div className="marquee-inner ">
        {repeated.map((item, i) => (
          <div className="marquee-card   shadow-[0_0_10px_rgba(6,182,212,0.8)]  transition-transform duration-400 hover:scale-105" key={i}>
            <Image
              src={`/images/${item.img}`}
              alt={item.title}
              width={200}
              height={200}
              className=" mt-3 object-cover aspect-square rounded-xl"
            />
            <p className="text-white pt-5 text-center font-semibold text-lg">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
</>  );
}

