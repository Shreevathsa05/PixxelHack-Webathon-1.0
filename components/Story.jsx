import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Story() {
  const [activeEra, setActiveEra] = useState(0);

  const gamingEras = [
    {
      id: 0,
      era: "1970s - The Birth",
      title: "Arcade Revolution",
      description: "The golden age began with simple pixels and endless possibilities. Pong sparked a revolution that would change entertainment forever.",
      image: "/1970.jpeg",
      highlights: ["Pong (1972)", "Space Invaders (1978)", "Asteroids (1979)"],
      color: "from-yellow-600 to-orange-600"
    },
    {
      id: 1,
      era: "1980s - The Console Wars",
      title: "Home Gaming Explosion",
      description: "Gaming moved from arcades to living rooms. Nintendo and Sega battled for supremacy while creating legendary franchises.",
      image: "/1980.jpeg",
      highlights: ["Super Mario Bros", "The Legend of Zelda", "Sonic the Hedgehog"],
      color: "from-red-600 to-pink-600"
    },
    {
      id: 2,
      era: "1990s - 3D Renaissance",
      title: "Dimension Revolution",
      description: "Polygons replaced pixels as gaming entered the third dimension. PlayStation and N64 brought cinematic experiences to players.",
      image: "/1990.jpeg",
      highlights: ["Super Mario 64", "Final Fantasy VII", "GoldenEye 007"],
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      era: "2000s - Online Connectivity",
      title: "Connected Gaming",
      description: "The internet transformed gaming from a solo experience to a global phenomenon. MMORPGs and online multiplayer redefined social gaming.",
      image: "/2000.jpeg",
      highlights: ["World of Warcraft", "Halo 2", "Counter-Strike"],
      color: "from-green-600 to-teal-600"
    },
    {
      id: 4,
      era: "2010s - Mobile & Indie",
      title: "Gaming for Everyone",
      description: "Smartphones put gaming in everyone's pocket while indie developers created innovative experiences that challenged AAA studios.",
      image: "/2010.jpeg",
      highlights: ["Angry Birds", "Minecraft", "Among Us"],
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 5,
      era: "2020s - The Metaverse",
      title: "Virtual Worlds",
      description: "VR, AR, and cloud gaming push the boundaries of reality. Gaming becomes a platform for social interaction and digital economies.",
      image: "/2020.jpeg",
      highlights: ["Cyberpunk 2077", "Fortnite Concerts", "VR Adventures"],
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          The Evolution of Gaming
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Journey through decades of innovation, from simple arcade cabinets to immersive virtual worlds. 
          Discover how gaming transformed from a niche hobby into the world's most dynamic entertainment medium.
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-black bg-opacity-90 shadow-[0_0_20px_rgba(6,182,212,0.8)] rounded-3xl p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {gamingEras.map((era, index) => (
              <button
                key={era.id}
                onClick={() => setActiveEra(index)}
                className={`p-3 md:p-4 rounded-xl transition-all duration-300 text-center ${
                  activeEra === index
                    ? "text-white bg-cyan-500 bg-opacity-30 shadow-[0_0_15px_rgba(6,182,212,0.8)] border border-cyan-400 border-opacity-50 transform scale-105"
                    : "text-gray-600 hover:text-white hover:bg-gray-800 hover:bg-opacity-50"
                }`}
              >
                <div className="text-xs md:text-sm font-medium whitespace-nowrap">
                  {era.era.split(' - ')[0]}
                </div>
                <div className="text-xs text-gray-400 mt-1 hidden md:block">
                  {era.era.split(' - ')[1]}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-black bg-opacity-90 shadow-[0_0_30px_rgba(6,182,212,0.6)] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-6 md:p-12 flex flex-col justify-center">
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${gamingEras[activeEra].color} text-white`}>
                {gamingEras[activeEra].era}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {gamingEras[activeEra].title}
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {gamingEras[activeEra].description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Iconic Games</h3>
                <div className="grid gap-3">
                  {gamingEras[activeEra].highlights.map((game, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 border-opacity-50">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white font-medium">{game}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${gamingEras[activeEra].color} opacity-30 z-10`}></div>
              <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
              <Image
                src={gamingEras[activeEra].image}
                alt={gamingEras[activeEra].title}
                fill
                className="object-cover object-center z-0"
                quality={85}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-16 bg-black bg-opacity-90 shadow-[0_0_20px_rgba(6,182,212,0.8)] rounded-3xl p-6 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About LootKart Gaming Showcase
            </h3>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-cyan-400">LootKart</strong> is your ultimate destination for gaming excellence, where passion meets innovation.
                We're not just a gaming store – we're curators of digital adventures, bringing you the finest selection of games,
                hardware, and accessories that define each era of gaming.
              </p>
              <p>
                From retro classics that started it all to cutting-edge VR experiences that push the boundaries of reality,
                our showcase celebrates the incredible journey of gaming evolution. We believe every game tells a story,
                every console marks a milestone, and every player deserves access to gaming's greatest treasures.
              </p>
              <p>
                <strong className="text-purple-400">Our mission:</strong> To connect gamers with the experiences that shaped the industry
                and continue to define its future. Whether you're a nostalgic collector, competitive esports athlete,
                or casual player discovering new worlds, LootKart is your trusted companion in the endless quest for epic gaming moments.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] hover:shadow-[0_0_30px_rgba(6,182,212,1)] transform hover:scale-105 transition-all duration-300">
              Explore Our Gaming Collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
