"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-lg text-gray-500 flex flex-row gap-x-2 hover:font-bold self-center"
    >
      <FaArrowLeft className="text-sm self-center" />
      Back
    </button>
  );
};
export default BackButton;
