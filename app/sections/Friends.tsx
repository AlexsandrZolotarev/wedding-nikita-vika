"use client";

import { useEffect, useState } from "react";
import { useInView } from "../hooks/use-in-view";
import Calendar from "./Calendar";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div
        style={{
          width: "0.1px",
          height: "120px",
          backgroundColor: "#000000",
          position: "relative",
        }}
      >
        <div
          className="arrow"
          style={{
            top: `${scrollProgress}%`,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21,21H3L12,3Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Friends = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="friends container">
      <ScrollIndicator />
      <h2
        className="friends__title"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        ДОРОГИЕ РОДНЫЕ И ДРУЗЬЯ!
      </h2>

      <p
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}
        className="friends__description"
      >
        Спешим сообщить радостную новость — мы женимся! <br></br> В этот день мы
        очень хотим оказаться в окружении самых близких и дорогих для нас людей.
      </p>
    </section>
  );
};

export default Friends;
