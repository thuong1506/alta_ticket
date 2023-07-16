import React, { useState } from "react";
import { DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const Date: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: any, dateString: string) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      onChange={handleDateChange}
      format="DD/MM/YY"
      suffixIcon={<CalendarOutlined style={{ color: "#FF993C" }} />} // Biểu tượng lịch với màu #FF993C
    />
  );
};

export default Date;
