"use client";

import { useEffect, useState } from "react";
import { Save, X } from "lucide-react";

import { useProfileStore } from "../store/profile.store";

interface EditProfileDialogProps {
  open: boolean;
  onClose: () => void;
}

export function EditProfileDialog({
  open,
  onClose,
}: EditProfileDialogProps) {
  const profile = useProfileStore(
    (state) => state.profile
  );

  const updateProfile = useProfileStore(
    (state) => state.updateProfile
  );

  const [form, setForm] = useState(profile);

  useEffect(() => {
    setForm(profile);
  }, [profile]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateProfile(form);

    console.log("✅ Profile Updated");

    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        p-6
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          transition-all
          duration-300
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            p-6
            dark:border-slate-700
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Edit Profile
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2
              transition-all
              hover:bg-slate-100
              dark:text-white
              dark:hover:bg-slate-800
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          {/* Full Name */}
          <div>
            <label
              className="
                mb-2
                block
                font-medium
                text-slate-900
                dark:text-white
              "
            >
              Full Name
            </label>

            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                p-3
                text-slate-900
                outline-none
                transition-all
                focus:border-indigo-500
                focus:ring-2
                focus:ring-indigo-500/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="
                mb-2
                block
                font-medium
                text-slate-900
                dark:text-white
              "
            >
              Email
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                p-3
                text-slate-900
                outline-none
                transition-all
                focus:border-indigo-500
                focus:ring-2
                focus:ring-indigo-500/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className="
                mb-2
                block
                font-medium
                text-slate-900
                dark:text-white
              "
            >
              Phone
            </label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                p-3
                text-slate-900
                outline-none
                transition-all
                focus:border-indigo-500
                focus:ring-2
                focus:ring-indigo-500/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />
          </div>

          {/* Location */}
          <div>
            <label
              className="
                mb-2
                block
                font-medium
                text-slate-900
                dark:text-white
              "
            >
              Location
            </label>

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                p-3
                text-slate-900
                outline-none
                transition-all
                focus:border-indigo-500
                focus:ring-2
                focus:ring-indigo-500/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />
          </div>

          {/* Bio */}
          <div>
            <label
              className="
                mb-2
                block
                font-medium
                text-slate-900
                dark:text-white
              "
            >
              Bio
            </label>

            <textarea
              rows={4}
              name="bio"
              value={form.bio}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white
                p-3
                text-slate-900
                outline-none
                transition-all
                focus:border-indigo-500
                focus:ring-2
                focus:ring-indigo-500/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            flex
            justify-end
            gap-3
            border-t
            border-slate-200
            p-6
            dark:border-slate-700
          "
        >
          <button
            onClick={onClose}
            className="
              rounded-xl
              border
              border-slate-300
              bg-white
              px-5
              py-3
              font-medium
              text-slate-700
              transition-all
              hover:bg-slate-100
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              dark:hover:bg-slate-700
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-indigo-600
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              hover:bg-indigo-700
              hover:shadow-lg
            "
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}