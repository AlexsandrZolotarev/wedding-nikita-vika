"use client";

import { useState } from "react";

type FormData = {
  fullName: string;
  attendance: string;
  alcohol: string;
  allergy: string;
  companions: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    attendance: "",
    alcohol: "",
    allergy: "",
    companions: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const attendanceOptions = [
    { value: "", label: "Выберите вариант" },
    { value: "Приду один", label: "Приду один" },
    { value: "Приду с парой", label: "Приду с парой" },
    { value: "Не смогу присутствовать", label: "Не смогу присутствовать" },
  ];

  const alcoholOptions = [
    { value: "", label: "Выберите предпочтения" },
    { value: "Водка", label: "🥃 Водка" },
    { value: "Коньяк", label: "🥃 Коньяк" },
    { value: "Вино белое", label: "🍷 Вино белое" },
    { value: "Вино красное", label: "🍷 Вино красное" },
    { value: "Шампанское", label: "🥂 Шампанское" },
    { value: "Виски", label: "🥃 Виски" },
    { value: "Пиво", label: "🍺 Пиво" },
    { value: "Коктейли", label: "🍸 Коктейли" },
    { value: "Не пью алкоголь", label: "🚫 Не пью алкоголь" },
    { value: "Все равно", label: "🤷 Все равно" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "attendance" && value !== "Приду с кем-то") {
        return {
          ...prev,
          [name]: value,
          companions: "",
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
      setFormData({
        fullName: "",
        attendance: "",
        alcohol: "",
        allergy: "",
        companions: "",
      });

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="feedback">
      <div className="branch-right">
        <img src="/branches/branch_04.png" alt="" />
      </div>
      <div className="branch-left">
        <img src="/branches/branch_06.png" alt="" />
      </div>
      <div className="feedback__body">
        <div className="feedback__container">
          <h2 className="feedback__title">
            Анкета <span className="feedback__title-highlight">гостя</span>
          </h2>
          <p className="feedback__subtitle">
            Пожалуйста, заполните форму — это поможет нам стать ближе
          </p>

          <form onSubmit={handleSubmit} className="feedback__form">
            <div className="feedback__group">
              <label htmlFor="fullName" className="feedback__label">
                ФИО
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Введите ваше полное имя"
                className="feedback__input"
              />
            </div>

            <div className="feedback__row">
              <div className="feedback__group">
                <label htmlFor="attendance" className="feedback__label">
                  Вы придете?
                </label>
                <select
                  id="attendance"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="feedback__select"
                >
                  {attendanceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="feedback__group">
                <label htmlFor="alcohol" className="feedback__label">
                  Ваш выбор? <span className="feedback__label-required">*</span>
                </label>
                <select
                  id="alcohol"
                  name="alcohol"
                  value={formData.alcohol}
                  onChange={handleChange}
                  required
                  className="feedback__select"
                >
                  {alcoholOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {formData.attendance === "Приду с кем-то" && (
              <div className="feedback__group">
                <label htmlFor="companions" className="feedback__label">
                  Если вы приедете с кем-то, введите ФИО гостей
                </label>
                <textarea
                  id="companions"
                  name="companions"
                  value={formData.companions}
                  onChange={handleChange}
                  required
                  placeholder="Например: Анна Иванова, Сергей Петров"
                  rows={3}
                  className="feedback__textarea"
                />
              </div>
            )}
            <div className="feedback__group">
              <label htmlFor="allergy" className="feedback__label">
                Пищевая аллергия
              </label>
              <textarea
                id="allergy"
                name="allergy"
                value={formData.allergy}
                onChange={handleChange}
                placeholder="Укажите, если есть аллергия на какие-либо продукты"
                rows={3}
                className="feedback__textarea"
              />
            </div>

            <button
              type="submit"
              className="feedback__button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "✈️ Отправляем..." : "✉️ Отправить ответ"}
            </button>

            {status === "success" && (
              <div className="feedback__status feedback__status--success">
                <span className="feedback__icon">✅</span>
                Спасибо! Ваш ответ успешно отправлен
              </div>
            )}

            {status === "error" && (
              <div className="feedback__status feedback__status--error">
                <span className="feedback__icon">❌</span>
                Ошибка при отправке. Попробуйте позже
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
