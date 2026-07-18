"use client";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { useProfileStore } from "../store/profile.store";

export function ProfileInformation() {
  const profile = useProfileStore(
    (state) => state.profile
  );

  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-8">
        <h2
          className="
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Personal Information
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          Your contact and personal details.
        </p>
      </div>

      <div className="space-y-5">
        {/* Email */}
        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
            transition-all
            duration-300
            hover:shadow-md
            dark:border-slate-700
            dark:bg-slate-800
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-indigo-100
              dark:bg-indigo-900/30
            "
          >
            <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Email
            </p>

            <p
              className="
                mt-1
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {profile.email}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
            transition-all
            duration-300
            hover:shadow-md
            dark:border-slate-700
            dark:bg-slate-800
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-indigo-100
              dark:bg-indigo-900/30
            "
          >
            <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Phone
            </p>

            <p
              className="
                mt-1
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {profile.phone}
            </p>
          </div>
        </div>

        {/* Location */}
        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-slate-50
            p-5
            transition-all
            duration-300
            hover:shadow-md
            dark:border-slate-700
            dark:bg-slate-800
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-indigo-100
              dark:bg-indigo-900/30
            "
          >
            <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>

          <div>
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Location
            </p>

            <p
              className="
                mt-1
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}