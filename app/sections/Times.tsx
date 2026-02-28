"use client";

import { useInView } from "../hooks/use-in-view";

const Times = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="times">
      <div className="calendar__back"></div>
      <div className="times__body container">
        <div className="times__container">
          <h3
            className={`times__title ${isInView ? "times__title--visible" : ""}`}
          >
            ТАЙМИНГ
          </h3>
          <div className="times__parts">
            <div
              className={`times__part ${isInView ? "times__part--visible" : ""}`}
            >
              <img src="/rings.png" alt="" />
              <p className="times__part-date">15:30</p>
              <p className="times__part-name">Регистрация</p>
            </div>
            <div
              className={`times__part ${isInView ? "times__part--visible" : ""}`}
            >
              <img src="/champagne.svg" alt="" />
              <p className="times__part-date">16:40</p>
              <p className="times__part-name">Сбор гостей</p>
            </div>
            <div
              className={`times__part ${isInView ? "times__part--visible" : ""}`}
            >
              <img src="stolovye_pribory.svg" alt="" />
              <p className="times__part-date">17:00</p>
              <p className="times__part-name">Банкет</p>
            </div>
            <div
              className={`times__part ${isInView ? "times__part--visible" : ""}`}
            >
              <img src="kabluki.svg" alt="" />
              <p className="times__part-date">22:00</p>
              <p className="times__part-name">Завершение</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Times;
