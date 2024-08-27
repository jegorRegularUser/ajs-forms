import React, { useState } from "react";

const Form = ({ onDataSubmit, setDateInvalid, setDistanceInvalid, dateInvalid, distanceInvalid }) => {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, distance } = form;
    const [day, month, year] = date.split(".").map(Number);

    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12) {
      setDateInvalid(true);
      if (distance === "") {
        setDistanceInvalid(true);
      }
      return;
    }
    
    if (distance === "") {
      setDistanceInvalid(true);
      return;
    }

    const record = { date: [day, month, year], distance: +distance };
    onDataSubmit(record); 
    setForm({ date: "", distance: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDateInvalid(false);
    setDistanceInvalid(false);
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrap">
          <div>Дата (ДД.ММ.ГГ)</div>
          <input
            type="text"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            placeholder="ДД.ММ.ГГ"
          />
          <div className={dateInvalid ? "invalid-text" : "no-display"}>
            Проверьте корректность даты
          </div>
        </div>
        <div className="input-wrap">
          <div>Пройдено км</div>
          <input
            type="text"
            name="distance"
            maxLength={8}
            value={form.distance}
            onChange={handleInputChange}
            placeholder="Км"
          />
          <div className={distanceInvalid ? "invalid-text" : "no-display"}>
            Необходимо ввести дистанцию
          </div>
        </div>
        <button type="submit">OK</button>
      </form>
  );
};

export default Form;
