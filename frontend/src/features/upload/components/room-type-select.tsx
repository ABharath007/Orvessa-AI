"use client";

import {
  ArrowLeft,
  ArrowRight,
  Home,
} from "lucide-react";

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
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-indigo-100 p-3 dark:bg-indigo-900/30">
          <Home className="h-7 w-7 text-indigo-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Select Room Type
          </h2>

          <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">
            Help Orvessa AI understand which room you want
            to redesign. This allows the AI to generate
            more accurate and realistic interior designs.
          </p>
        </div>
      </div>

      {/* Cards */}
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

      {/* Footer */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={previousStep}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-6
            py-3
            font-semibold
            transition-all
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
            dark:hover:bg-slate-800
          "
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={!roomType}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-indigo-600
            px-8
            py-3
            font-semibold
            text-white
            transition-all
            hover:bg-indigo-700
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Continue

          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}