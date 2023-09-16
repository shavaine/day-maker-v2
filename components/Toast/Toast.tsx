"use client";
import { FC, useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number;
  type: string;
}

const Toast: FC<ToastProps> = ({ message, duration = 3000, type }) => {
  const [show, setShow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(message);

  useEffect(() => {
    setCurrentMessage(message);
    if (message) {
      setShow(true);
      setTimeout(hideToast, duration);
    }
  }, [message, duration]);

  const hideToast = () => {
    setShow(false);
  };

  const toastColor = (type: string) => {
    if (type === "success") {
      return "bg-success";
    } else if (type === "error") {
      return "bg-error";
    } else if (type === "notice") {
      return "bg-notice";
    }
  };

  return (
    <div
      className={`z-50 fixed top-4 left-1/2 transform -translate-x-1/2 text-black font-spaceMono px-4 py-2 rounded opacity-0 transition-opacity ease-in ${
        show ? `opacity-100 ${toastColor(type)}` : ""
      }`}
    >
      {currentMessage}
    </div>
  );
};

export default Toast;
