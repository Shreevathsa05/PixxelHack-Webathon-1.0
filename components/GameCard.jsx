"use client";

export default function GameCard({ name, image, price }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg shadow-md">
      <img
          src={`/images/${image}`}
        alt={name}
        className="w-16 h-16 rounded object-cover border border-cyan-500"
      />
      <div className="text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-cyan-100">₹{price}</p>
      </div>
    </div>
  );
}
