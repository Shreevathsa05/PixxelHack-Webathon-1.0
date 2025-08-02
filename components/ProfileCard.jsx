'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import React from 'react'

const profiles = [
  {
    name: 'Shree',
    image: '/profile1.jpg', // replace with your actual image
    email: 'mailto:shree@example.com',
    github: 'https://github.com/shree',
    linkedin: 'https://linkedin.com/in/shree',
  },
  {
    name: 'Arya',
    image: '/profile2.jpg', // replace with your actual image
    email: 'mailto:arya@example.com',
    github: 'https://github.com/arya',
    linkedin: 'https://linkedin.com/in/arya',
  },
]

function ProfileCard() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 px-4 py-8">
      {profiles.map((profile, idx) => (
        <div
          key={idx}
          className="w-[90%] md:w-[300px] shadow-[0_0_20px_rgba(6,182,212,0.8)] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-6 text-center text-gray-300 hover:scale-[1.02] transition-transform"
        >
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400">
            <Image
              src={profile.image}
              alt={`${profile.name} profile`}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">{profile.name}</h3>
          <div className="mt-4 flex justify-center gap-6 text-cyan-400 text-2xl">
            <a href={profile.email} target="_blank" rel="noopener noreferrer">
              <MdEmail />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileCard

// import Image from 'next/image'
// import React from 'react'

// function ProfileCard() {
//   return (
//     <div className='flex justify-center items-center m-8'>
//         <div 
//         className="md:w-[70%] md:h-[70vh] w-[90%] min-h-[40vh] shadow-[0_0_20px_rgba(6,182,212,0.8)] text-gray-500 md:pl-3 rounded-xl mx-4 flex flex-col justify-center items-center md:grid  md:grid-cols-2 md:justify-items-center "
//         >
//             <div className=" bg-[rgba(255,255,255,0.4)] h-40vh rounded-lg w-auto md:h-[80%] text-black">
//                 <div className='rounded-lg w-2xl h-2xl relative'>
//                     <Image
//                     src='/BATTLE_FIELD.avif'
//                     fill
//                     />
//                 </div>
//             </div>

//         </div>   
//     </div>
//   )
// }

// export default ProfileCard
