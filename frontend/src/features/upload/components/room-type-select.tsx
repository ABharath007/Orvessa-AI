"use client";

import { roomTypes } from "../constants/room-types";
import { useUploadStore } from "../store/upload.store";
import { RoomTypeCard } from "./room-type-card";

export function RoomTypeSelect() {
  const {
    roomType,
    setRoomType,
    nextStep,
    previousStep,
  } = useUploadStore();

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold">
          Select Room Type
        </h2>

        <p className="mt-2 text-slate-500">
          Help Orvessa AI understand the type of room you want to redesign.
        </p>
      </div>

      {/* Room Type Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {roomTypes.map((room) => (
          <RoomTypeCard
            key={room.id}
            title={room.title}
            description={room.description}
            icon={room.icon}
            selected={roomType === room.id}
            onClick={() => setRoomType(room.id)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={previousStep}
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
        >
          ← Back
        </button>

        <button
          onClick={nextStep}
          disabled={!roomType}
          className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}