"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton: FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-lg text-gray-500 flex flex-row gap-x-2 hover:font-bold mt-5"
    >
      <FaArrowLeft className="text-sm mt-2" />
      Back
    </button>
  );
};
export default BackButton;
