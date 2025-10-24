"use client";
import { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

export default function MulSlides() {
  const [current] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHi4pwNGsaZPNG3O9hfZL04KI57ZDs6vakA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gMX7XveNMS8Fd5veZVNmtrnA4IAr8YxmQQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTB3Oo5BVYS9VNVto0V1tZT0feM7O93c85Jw&s",
    "https://img.freepik.com/premium-psd/flying-macaw-parrot-isolated-transparent-background-png-psd_888962-1748.jpg?semt=ais_hybrid&w=740&q=80",
    "https://purepng.com/public/uploads/thumbnail//google-stadia-logo-hd4.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7Ruc3aDfDuCbY_FFQ-23U1on7qndeh-dNw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjdGVSmJzD-fI28rwWMyBK5Q3TJd4ViK7cw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY17vxf3hsgPIWxEFspTpcMJvXBRPWny3Dfg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRItFetpErOD-smkzTzbAOkN-ykM7wWz2Mg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5v6L_mqG7owToGQzSE1151b2WfFlt4kGxA&s",
  ]);

  const [index, setIndex] = useState(0);

  const nextBtn = () => setIndex((prev) => Math.min(prev + 1));
  const prevBtn = () => setIndex((prev) => Math.max(prev - 1));
  const translateX = -(index * 308);

  return (
    <div
      className="relative mx-auto h-60 bg-gray-100 rounded-xl shadow-lg overflow-hidden flex items-center"
      style={{ width: `904px` }}
    >
      {/* PREV */}
      <button
        onClick={prevBtn}
        disabled={index === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-40"
      >
        <FaLessThan />
      </button>

      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(${translateX}px)`,
          gap: `20px`,
        }}
      >
        {current.map((src, i) => (
          <div
            key={i}
            style={{
              width: `288px`,
              height: "192px",
              flexShrink: 0,
            }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* NEXT */}
      <button
        onClick={nextBtn}
        disabled={index === current.length - 3}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-40"
      >
        <FaGreaterThan />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: current.length - 2 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>

      {/* DEBUG */}
      <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
        {index}/{current.length - 3}
      </div>
    </div>
  );
}
