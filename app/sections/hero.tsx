"use client";
const Hero = () => {
  return (
    <section className="hero">
      <div className="carnaval-flags" aria-hidden="true">
        <img src="/carnaval-flags.png" alt="" />
      </div>
      <div className="stars" aria-hidden="true">
        <img src="/stars.png" alt="" />
      </div>
      <div className="hero__background" aria-hidden="true">
        <img src="/Hero.jpeg" alt="" />
      </div>

      <h1 className="hero__title">Вика Никита</h1>
      <div className="hero__tili text">
        <p className="">тили - тили теста</p>
      </div>
      <div className="hero__groom text">
        <p className="">жених и невеста!</p>
      </div>
      <div className="hero__vika photo">
        <img src="/Nikita.webp" alt="Девочка Вика" />
        <p className="photo__title">- им буду я 💝</p>
      </div>
      <div className="hero__nikita photo">
        <img src="/Vika.jpeg" alt="Мальчик Никита" aria-hidden="true" />
        <p className="photo__title">
          - интересно, кто будет моим мужем, когда я вырасту?
        </p>
      </div>
    </section>
  );
};

export default Hero;
