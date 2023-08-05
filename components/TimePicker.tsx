import { formatTime } from "@/lib/helpers";
import { ChangeEvent, FC } from "react";

interface TimePickerProps {
  selectedTime: number; // Time in minutes
  onTimeChange: (newTime: number) => void;
  id: string;
}

const TimePicker: FC<TimePickerProps> = ({
  selectedTime,
  onTimeChange,
  id,
}) => {
  const formattedTime = formatTime(selectedTime);

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [hoursStr, minutesStr] = event.target.value.split(":");
    const newTime = parseInt(hoursStr, 10) * 60 + parseInt(minutesStr, 10);
    onTimeChange(newTime);
  };

  return (
    <input
      className="border w-full"
      type="time"
      value={formattedTime}
      onChange={handleTimeChange}
      id={id}
    />
  );
};

export default TimePicker;
