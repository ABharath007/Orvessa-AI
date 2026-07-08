"use client";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { profileData } from "../mock/profile.mock";

export function ProfileInformation() {
  const { profile } = profileData;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Personal Information
      </h2>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Mail className="h-5 w-5 text-indigo-600" />

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p>{profile.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="h-5 w-5 text-indigo-600" />

          <div>
            <p className="text-sm text-slate-500">
              Phone
            </p>

            <p>{profile.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="h-5 w-5 text-indigo-600" />

          <div>
            <p className="text-sm text-slate-500">
              Location
            </p>

            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}