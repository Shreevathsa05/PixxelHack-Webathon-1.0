'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import React from 'react'

const profiles = [
  {
    name: 'Shreevathsa',
    image: '/Shree.jpg', // replace with your actual image
    email: 'bhatshreevathsa17@gmail.com',
    github: 'https://github.com/Shreevathsa05',
    linkedin: 'https://www.linkedin.com/in/shreevathsa-bhat-228157235/',
  },
  {
    name: 'Jai',
    image: '/Jai.jpg', // replace with your actual image
    email: 'anjariajai@gmail.com',
    github: 'https://github.com/JaiAnjaria',
    linkedin: 'https://www.linkedin.com/in/jai-anjaria-25582527b/',
  },
]

function ProfileCard() {
  return (
    <div className='flex justify-center items-center  my-[7vh]'>
      <div className="flex flex-wrap justify-center items-center w-[80%] md:w-[50%] rounded-xl gap-8 py-14 p-8 shadow-[0_0_20px_rgba(6,182,212,0.8)]">
      {profiles.map((profile, idx) => (
        <div
          key={idx}
          className="w-[90%] md:w-[300px] shadow-[0_0_20px_rgba(200,180,255,0.8)] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-6 text-center text-gray-300 hover:scale-[1.02] transition-transform"
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
          <div className="mt-4 flex flex-col justify-center text-cyan-400 text-2xl">
            
            <div className='text-sm overflow-auto'>{profile.email}</div>
            <br />
            <div className="flex justify-around items-center">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
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
