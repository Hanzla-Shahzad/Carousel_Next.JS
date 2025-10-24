"use client";
import { useEffect, useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

export default function Slides() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://picsum.photos/id/1018/1000/400",
    "https://picsum.photos/id/1025/1000/400",
    "https://picsum.photos/id/1039/1000/400",
  ];
  const nextBtn = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const prevBtn = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <div className="relative w-[800px] h-[400px] mx-auto mt-10 overflow-hidden rounded-xl shadow-lg">
      <button
        onClick={prevBtn}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <FaLessThan />
      </button>

      <img
        src={images[index]}
        alt="Slider"
        className="w-full h-full object-cover rounded-xl"
      />

      <button
        onClick={nextBtn}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <FaGreaterThan />
      </button>
    </div>
  );
}
