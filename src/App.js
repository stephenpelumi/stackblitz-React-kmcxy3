import React, { useState } from 'react';

const useDate = () => {
  const [date, setDate] = useState(new Date());

  const getDay = () => {
    return date.getDate();
  };

  const getMonth = () => {
    return date.getMonth() + 1; 
  };

  const addDay = (numberOfDays) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numberOfDays);
    setDate(newDate);
  };

  const addMonth = (numberOfMonths) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + numberOfMonths);
    setDate(newDate);
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default function App() {
  const { date, getDay, getMonth, addDay, addMonth } = useDate();

  return (
    <div>
      <div>
        Date: {date.toString()}
        <br />
        Day: {getDay()}
        <br />
        Month: {getMonth()}
        <br />
        <button onClick={() => addDay(1)}>Add Day</button>
        <button onClick={() => addMonth(1)}>Add Month</button>
      </div>
    </div>
  );
}