import React from "react";

const Data = ({ data, onDelete }) => {
  return (
    <div className="list">
    <div className="titles">
      <span>Дата (ДД.ММ.ГГ)</span>
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
              onClick={() => onDelete(item.date)}
            >
              ✘
            </button>
          </span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Data;
