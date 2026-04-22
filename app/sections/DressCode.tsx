"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/use-in-view";

const dressCodeData = [
  {
    id: 1,
    color: "Мятный",
    images: [
      "/dress-code/girls/mint1_compressed.jpeg",
      "/dress-code/girls/mint2_compressed.jpeg",
      "/dress-code/girls/mint3_compressed.jpeg",
      "/dress-code/girls/mint4_compressed.jpeg",
    ],
  },

  {
    id: 4,
    color: "Светло-серый",
    images: [
      "/dress-code/girls/light-grey1_compressed.jpeg",
      "/dress-code/girls/light-grey2.png",
      "/dress-code/girls/light-grey3_compressed.jpeg",
      "/dress-code/girls/light-grey4_compressed.jpeg",
    ],
  },

  {
    id: 6,
    color: "Бежевый",
    images: [
      "/dress-code/girls/beige1.jpg",
      "/dress-code/girls/beige2.png",
      "/dress-code/girls/beige3.jpeg",
      "/dress-code/girls/beige4_compressed.jpeg",
    ],
  },
  {
    id: 7,
    color: "Темно коричневый",
    images: [
      "/dress-code/girls/light-brown1.jpeg",
      "/dress-code/girls/light-brown2.jpg",
      "/dress-code/girls/light-brown3.jpg",
      "/dress-code/girls/light-brown4.jfif",
    ],
  },
  {
    id: 8,
    color: "Мятный (муж.)",
    images: [
      "/dress-code/mens/mint.jpg",
      "/dress-code/mens/mint1.jpg",
      "/dress-code/mens/mint2.jpg",
      "/dress-code/mens/mint3.jpeg",
    ],
  },
  {
    id: 9,
    color: "Светло-серый (муж.)",
    images: [
      "/dress-code/mens/light-gray.jpg",
      "/dress-code/mens/light-gray1.jpeg",
      "/dress-code/mens/light-gray2.jpg",
      "/dress-code/mens/light-gray3.jpeg",
    ],
  },
  {
    id: 10,
    color: "Светло-зеленый  (муж.)",
    images: [
      "/dress-code/mens/light-green.jpg",
      "/dress-code/mens/light-green1.jpg",
      "/dress-code/mens/light-green2.jpeg",
      "/dress-code/mens/light-green3.jpg",
    ],
  },
  {
    id: 11,
    color: "Светло-коричневый (муж.)",
    images: [
      "/dress-code/mens/light-brown1.jpg",
      "/dress-code/mens/light-brown2.jpg",
      "/dress-code/mens/light-brown3.jpg",
      "/dress-code/mens/light-brown4.jpg",
    ],
  },
  {
    id: 12,
    color: "Темно коричневый (муж.)",
    images: [
      "/dress-code/mens/light-brown1.jpg",
      "/dress-code/mens/light-brown2.jpg",
      "/dress-code/mens/light-brown3.jpg",
      "/dress-code/mens/light-brown4.jpg",
    ],
  },
];

const DressCode = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const totalSlides = dressCodeData.length;

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
      className="dress-code container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dress-code__container">
        <h2
          className={`dress-code__title ${isInView ? "dress-code__title--visible" : ""}`}
        >
          ДРЕСС-КОД
        </h2>

        <p
          className={`dress-code__text ${isInView ? "dress-code__text--visible" : ""}`}
        >
          Будем рады видеть вас в красивом наряде в палитре нашей свадьбы
        </p>
      </div>

      <div className="dress-code__colors">
        <div
          className={`dress-code__colors-item ${isInView ? "dress-code__colors-item--visible" : ""}`}
        >
          <p>Мятный</p>
        </div>
        <div
          className={`dress-code__colors-item ${isInView ? "dress-code__colors-item--visible" : ""}`}
        >
          <p>Светло-зеленый</p>
        </div>
        <div
          className={`dress-code__colors-item ${isInView ? "dress-code__colors-item--visible" : ""}`}
        >
          {/* <img src="/dress-code.jpg" alt="" /> */}
          <p>Светло-коричневый</p>
        </div>

        <div
          className={`dress-code__colors-item ${isInView ? "dress-code__colors-item--visible" : ""}`}
        >
          <p>Бежевый</p>
        </div>
        <div
          className={`dress-code__colors-item ${isInView ? "dress-code__colors-item--visible" : ""}`}
        >
          <p>Светло-серый</p>
        </div>
        <div
          className={`dress-code__colors-item ${isInView ? "dress-code__colors-item--visible" : ""}`}
        >
          {/* <img src="/dress-code.jpg" alt="" /> */}
          <p>Темно-коричневый</p>
        </div>
      </div>

      <div className="dress-code__slider">
        <div className="dress-code__track">
          <div
            className="dress-code__list"
            style={{
              display: "flex",
              transition: "transform 0.3s ease",
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {dressCodeData.map((item) => (
              <div
                key={item.id}
                className="dress-code__slide"
                style={{ flex: "0 0 100%" }}
              >
                <div className="dress-code__color-info">
                  <h3>{item.color}</h3>
                </div>
                <div className="dress-code__images-grid">
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="dress-code__image">
                      <img
                        src={image}
                        alt={`${item.color} ${imgIndex + 1}`}
                        loading="lazy"
                        decoding="async"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dress-code__actions">
          <button
            className="dress-code__button dress-code__button--prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Предыдущий цвет"
          >
            ←
          </button>

          <div className="dress-code__dots">
            {dressCodeData.map((_, index) => (
              <button
                key={index}
                className={`dress-code__dot ${index === currentSlide ? "dress-code__dot--active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к цвету ${index + 1}`}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  background: index === currentSlide ? "#000" : "#ccc",
                  margin: "0 5px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          <button
            className="dress-code__button dress-code__button--next"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Следующий цвет"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
