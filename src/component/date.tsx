import React from 'react';

interface DateProps {
  datetime: { date: string; time: string };
}

const Time: React.FC<DateProps> = ({ datetime }) => {
  const { date, time } = datetime;

  return (
    <>
      {date}
      <br />
      {time}
    </>
  );
};

export default Time;
