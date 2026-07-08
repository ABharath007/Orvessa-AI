"use client";

import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";

import { profileData } from "../mock/profile.mock";

export function ProfileCard() {
  const { profile } = profileData;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <Image
          src={profile.profileImage}
          alt={profile.fullName}
          width={120}
          height={120}
          className="rounded-full border-4 border-indigo-100 object-cover"
        />

        <h2 className="mt-5 text-2xl font-bold">
          {profile.fullName}
        </h2>

        <p className="mt-2 text-slate-500">
          {profile.bio}
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm text-slate-600">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </div>

          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            Joined {profile.joinedDate}
          </div>
        </div>

        <button className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
}