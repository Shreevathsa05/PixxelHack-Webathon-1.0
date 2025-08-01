'use client'
import { useEffect, useRef, useState } from 'react';

const audioSources = [
  '/bg-music-1.mp3',
  '/bg-music-2.mp3',
  '/bg-music-3.mp3',
];

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [src, setSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const randomSrc = audioSources[Math.floor(Math.random() * audioSources.length)];
    setSrc(randomSrc);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          audio.volume = 0.2;
        })
        .catch((err) => {
          console.log('Audio play failed (likely due to browser restriction):', err);
        });
    }
  };

  return (
    <>
      {src && (
        <audio ref={audioRef} loop preload="auto">
          <source src={src} type="audio/mpeg" />
        </audio>
      )}

      {/* Toggle Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-4 right-4 z-50 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-cyan-600 transition"
      >
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </>
  );
};

export default BackgroundAudio;
