"use client";

import { useState, useEffect, useCallback } from "react";
import { useInView } from "../hooks/use-in-view";

const wishesData = [
  {
    id: 1,
    quote:
      "Мы очень любим детей, но хотим, чтобы вы отдохнули в этот вечер без забот. Приходите, пожалуйста, без детей",
  },
  {
    id: 2,
    quote:
      "Не дарите нам, пожалуйста, живые цветы, мы не успеем насладиться их красотой до отъезда.",
  },
  {
    id: 3,
    quote: `При желании возьмите вместо них  
бутылочку Вашего любимого  
алкогольногобезалкогольного напитка  
с пожеланием, на какой повод  
нам ее открыть.`,
  },
  {
    id: 4,
    quote: "Благодарим, что вы с нами в этот важный день!",
  },
];

const Wishes = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const totalSlides = wishesData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  return (
    <section
      ref={ref}
      className="wishes"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="wishes__back"></div>
      <div className="wishes__container">
        <h2
          className={`wishes__title ${isInView ? "wishes__title--visible" : ""}`}
        >
          ДЛЯ НАШИХ ГОСТЕЙ
        </h2>

        <p className="wishes__text">
          Лучшая поддержка для нас - ваши искренние пожелания и лучезарные
          улыбки,
          <span className="wishes__text-highlight">
            остальное можно поместить в конверт
          </span>
        </p>

        <div className="wishes__slider">
          <div className="wishes__track">
            <div
              className="wishes__list"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {wishesData.map((wish) => (
                <div key={wish.id} className="wishes__slide">
                  <div className="wishes__card">
                    <p className="wishes__quote">{wish.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="wishes__actions">
            <button
              className="wishes__button wishes__button--prev"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Предыдущее пожелание"
            >
              <img src="/arrow-sm-left.svg" alt="" />
            </button>
            <div className="wishes__dots">
              {wishesData.map((_, index) => (
                <button
                  key={index}
                  className={`wishes__dot ${index === currentSlide ? "wishes__dot--active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="wishes__button wishes__button--next"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              aria-label="Следующее пожелание"
            >
              <img src="/arrow-sm-right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
