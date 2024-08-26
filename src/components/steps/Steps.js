import React, { useState } from "react";
import "../../App.css";

function Steps() {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, distance } = form;
    const [day, month, year] = date.split(".").map(Number);

    if (
      isNaN(day) ||
      isNaN(month) ||
      isNaN(year) ||
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      distance === ""
    ) {
      console.log("Пожалуйста, введите корректную дату (ДД.ММ.ГГГГ).");
      return;
    }
    
    const record = { date: [day, month, year], distance: +distance };

    setData((prevData) => {
      const index = prevData.findIndex(el => el.date.join() === record.date.join());
      let updatedData;

      if (index === -1) {
        updatedData = [...prevData, record];
      } else {
        prevData[index].distance += record.distance;
        updatedData = [...prevData];
      }

      // Сортировка данных
      return updatedData.sort((a, b) => {
        const [dayA, monthA, yearA] = a.date;
        const [dayB, monthB, yearB] = b.date;

        if (yearA !== yearB) return yearB - yearA;
        if (monthA !== monthB) return monthB - monthA;
        return dayB - dayA;
      });
    });

    setForm({ date: "", distance: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleDelete = (dateToDelete) => {
    setData((prevData) => prevData.filter(item => item.date.join() !== dateToDelete.join()));
  };

  return (
    <div className="steps">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <div>Дата (ДД.ММ.ГГ)</div>
          <input
            type="text"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            placeholder="ДД.ММ.ГГ"
          />
        </div>
        <div>
          <div>Пройдено км</div>
          <input
            type="text"
            name="distance"
            maxLength={8}
            value={form.distance}
            onChange={handleInputChange}
            placeholder="Км"
          />
        </div>
        <button type="submit">OK</button>
      </form>
      <div className="list">
        <div className="titles">
          <span>Дата (ДД.ММ.ГГГГ)</span>
          <span>Пройдено км</span>
          <span>Действия</span>
        </div>
        <ul>
          {data.map((item) => (
            <li key={item.date.join(".")}>
              <span>{item.date.join(".")}</span>
              <span>{item.distance.toFixed(1)}</span>
              <span>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.date)}
                >
                  ✘
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Steps;