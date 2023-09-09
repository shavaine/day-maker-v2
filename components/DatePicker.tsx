"use client";
import { ChangeEvent, FC } from "react";

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (newDate: string) => void;
  id: string;
}

const DatePicker: FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  id,
}) => {
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    onDateChange(event.target.value);
  };

  return (
    <input
      className="border rounded-md px-3 py-2 w-full focus:outline-mainColor"
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      id={id}
    />
  );
};

export default DatePicker;
