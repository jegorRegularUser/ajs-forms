import React, { useState } from "react";
import Form from "./Form"; 
import Data from "./Data"; 
import "../../App.css";

const Steps = () => {
  const [data, setData] = useState([]);
  const [dateInvalid, setDateInvalid] = useState(false);
  const [distanceInvalid, setDistanceInvalid] = useState(false);

  const handleDataSubmit = (newRecord) => {
    const index = data.findIndex(
      (el) => el.date.join() === newRecord.date.join()
    );

    const updatedData = [...data];

    if (index === -1) {
      updatedData.push(newRecord);
    } else {
      const updatedRecord = {
        ...updatedData[index],
        distance: updatedData[index].distance + newRecord.distance,
      };
      updatedData[index] = updatedRecord;
    }

    setData(updatedData.sort((a, b) => {
      const [dayA, monthA, yearA] = a.date;
      const [dayB, monthB, yearB] = b.date;

      if (yearA !== yearB) return yearB - yearA;
      if (monthA !== monthB) return monthB - monthA;
      return dayB - dayA;
    }));
  };

  const handleDelete = (dateToDelete) => {
    setData((prevData) =>
      prevData.filter((item) => item.date.join() !== dateToDelete.join())
    );
  };

  return (
    <div className="steps">
      <Form 
        onDataSubmit={handleDataSubmit}
        setDateInvalid={setDateInvalid}
        setDistanceInvalid={setDistanceInvalid}
        distanceInvalid={distanceInvalid}
        dateInvalid={dateInvalid}
      />
      <Data data={data} onDelete={handleDelete} />
    </div>
  );
};

export default Steps;
