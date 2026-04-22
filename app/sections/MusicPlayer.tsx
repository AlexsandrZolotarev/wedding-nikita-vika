"use client";

import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  useEffect(() => {
    function findMaxConsecutiveOnes(nums: number[]): number {
      let count = 0;
      let maxCount = 0;

      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
          count++;
          maxCount = Math.max(maxCount, count);
        } else {
          count = 0;
        }
      }

      return maxCount;
    }
    console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
    console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
    console.log(findMaxConsecutiveOnes([0, 0, 0]));
    console.log(findMaxConsecutiveOnes([1]));
  }, []);
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
