"use client";

import { useInView } from "../hooks/use-in-view";

const Calendar = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="calendar">
      <div className="calendar__back"></div>
      <div className="calendar__body container">
        <div className="calendar__container">
          <h3
            className={`calendar__title ${isInView ? "calendar__title--visible" : ""}`}
          >
            МЫ ЖДЁМ ВАС
          </h3>
          <h4
            className={`calendar__subtitle ${isInView ? "calendar__subtitle--visible" : ""}`}
          >
            АВГУСТ
          </h4>
          <table className="calendar__table">
            <thead>
              <tr>
                <th>ПН</th>
                <th>ВТ</th>
                <th>СР</th>
                <th>ЧТ</th>
                <th>ПТ</th>
                <th>СБ</th>
                <th>ВС</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td className="calendar-date">8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
              <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
              </tr>
              <tr>
                <td>29</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
          <p
            className={`calendar__note ${isInView ? "calendar__note--visible" : ""}`}
          >
            Не пропустите важное событие этого лета - день нашей свадьбы!
          </p>
        </div>
        <p
          className={`calendar__date ${isInView ? "calendar__date--visible" : ""}`}
        >
          08 / 08 / 26
        </p>
      </div>
    </section>
  );
};

export default Calendar;
