"use client";
import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  duration?: number; // Optional duration in milliseconds
  type: string;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, type }) => {
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

  return (
    <div
      className={`z-50 fixed top-4 left-1/2 transform -translate-x-1/2 bg-${type} text-black font-spaceMono px-4 py-2 rounded opacity-0 transition-opacity ease-in ${
        show ? "opacity-100" : ""
      }`}
    >
      {currentMessage}
    </div>
  );
};

export default Toast;
