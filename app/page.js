import Marquee from "../components/marquee";
import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white text-center mt-4">
     <div >
      <Hero/>
     </div>
     <div className="mt-[10vh]">
      <div className="text-3xl pb-16 md:text-4xl text-center text-purple-300">Trending</div>
      <Marquee/>
     </div>
    </div>
  );
}
