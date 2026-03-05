"use client";

import { useInView } from "../hooks/use-in-view";

const Location = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="location">
      <div className="branch-right">
        <img
          loading="lazy"
          decoding="async"
          src="/branches/branch_04.png"
          alt=""
        />
      </div>
      <div className="branch-left">
        <img
          loading="lazy"
          decoding="async"
          src="/branches/branch_06.png"
          alt=""
        />
      </div>
      <div className="location__body">
        <div className="location__part">
          <h3
            className={`location__title ${isInView ? "location__title--visible" : ""}`}
          >
            ЛОКАЦИЯ
          </h3>
          <h4
            className={`location__subtitle ${isInView ? "location__subtitle--visible" : ""}`}
          >
            ЗАГС
          </h4>
          <p
            className={`location__location ${isInView ? "location__location--visible" : ""}`}
          >
            Набережная Брюгге, 5, Йошкар-Ола
          </p>
          <img
            className={`location__image ${isInView ? "location__image--visible" : ""}`}
            src="/location.jpeg"
            loading="lazy"
            decoding="async"
            alt="Место свадьбы"
          />
          <a
            className={`location__link ${isInView ? "location__link--visible" : ""}`}
            href="https://yandex.com/maps/org/department_of_the_civil_registry_office_of_the_administration_of_the_city_district_of_yoshkar_ola_of_the_republic_mari_el/1465489360/?ll=47.909124%2C56.632839&mode=search&sll=47.909124%2C56.632839&source=serp_navig&text=республика%20марий%20эл%20йошкар-ола%20набережная%20брюгге%205%20отдел%20загс%20администрации%20городского%20округа%20город%20йошкар-ола%20республики%20марий%20эл&z=15"
          >
            Посмотреть на карте
          </a>
          <div className="location__stick"></div>
        </div>
        <div className="location__part">
          <h4
            className={`location__title ${isInView ? "location__title--visible" : ""}`}
          >
            Ресторан Сейвори Хауз
          </h4>

          <p
            className={`location__location ${isInView ? "location__location--visible" : ""}`}
          >
            Йошкар-Ола, ул. 70-летия Вооружённых Сил СССР, 20 1
          </p>
          <img
            className={`location__image ${isInView ? "location__image--visible" : ""}`}
            src="/Savory.webp"
            alt="Место жрачки"
            loading="lazy"
            decoding="async"
          />
          <a
            className={`location__link ${isInView ? "location__link--visible" : ""}`}
            href="https://yandex.com/maps/org/savory_house/47297709142/?ll=47.891712%2C56.621479&z=16"
          >
            Посмотреть на карте
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
