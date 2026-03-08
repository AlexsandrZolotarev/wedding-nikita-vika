"use client";

import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !userInteracted) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
        setUserInteracted(true);
      }
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [userInteracted]);

  return (
    <audio ref={audioRef} loop>
      <source src="/songs/song.mp3" type="audio/mp3" />
    </audio>
  );
};

export default MusicPlayer;
