"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Camera,
  Pencil,
} from "lucide-react";

import { useProfileStore } from "../store/profile.store";

interface ProfileCardProps {
  onEdit: () => void;
}

export function ProfileCard({
  onEdit,
}: ProfileCardProps) {
  const profile = useProfileStore(
    (state) => state.profile
  );

  const updateProfileImage = useProfileStore(
    (state) => state.updateProfileImage
  );

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview =
      URL.createObjectURL(file);

    updateProfileImage(preview);
  };

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
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div className="flex flex-col items-center text-center">

        {/* Avatar */}
        <div className="group relative">
          <Image
            src={profile.profileImage}
            alt={profile.fullName}
            width={140}
            height={140}
            className="
              h-36
              w-36
              rounded-full
              border-4
              border-indigo-100
              object-cover
              transition-all
              duration-300
              group-hover:brightness-75
              dark:border-indigo-900
            "
          />

          <button
            type="button"
            onClick={() =>
              fileInputRef.current?.click()
            }
            className="
              absolute
              bottom-2
              right-2
              rounded-full
              bg-indigo-600
              p-2
              text-white
              shadow-lg
              transition-all
              hover:scale-110
              hover:bg-indigo-700
            "
          >
            <Camera className="h-4 w-4" />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Name */}
        <h2
          className="
            mt-6
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          {profile.fullName}
        </h2>

        {/* Bio */}
        <p
          className="
            mt-3
            max-w-xs
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          {profile.bio}
        </p>

        {/* Info */}
        <div
          className="
            mt-6
            w-full
            space-y-4
            rounded-2xl
            bg-slate-50
            p-5
            dark:bg-slate-800
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              text-slate-700
              dark:text-slate-300
            "
          >
            <MapPin className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>{profile.location}</span>
          </div>

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              text-slate-700
              dark:text-slate-300
            "
          >
            <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>
              Joined {profile.joinedDate}
            </span>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          onClick={onEdit}
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-indigo-600
            py-3
            font-semibold
            text-white
            transition-all
            hover:bg-indigo-700
            hover:shadow-lg
          "
        >
          <Pencil className="h-4 w-4" />
          Edit Profile
        </button>
      </div>
    </section>
  );
}