"use client";

import { useState } from "react";

import { ProfileCard } from "@/features/profile/components/profile-card";
import { ProfileStats } from "@/features/profile/components/profile-stats";
import { ProfileInformation } from "@/features/profile/components/profile-information";
import { ProfileActivity } from "@/features/profile/components/profile-activity";
import { EditProfileDialog } from "@/features/profile/components/edit-profile-dialog";

export default function ProfilePage() {
  const [isEditOpen, setIsEditOpen] =
    useState(false);

  return (
    <>
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Header */}
        <section className="space-y-3">
          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            My Profile
          </h1>

          <p
            className="
              max-w-3xl
              text-lg
              leading-7
              text-slate-500
              dark:text-slate-400
            "
          >
            Manage your personal information, account settings,
            AI-generated designs, and activity history all in one place.
          </p>
        </section>

        {/* Statistics */}
        <ProfileStats />

        {/* Main Content */}
        <section className="grid gap-8 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-8">
            <ProfileCard
              onEdit={() =>
                setIsEditOpen(true)
              }
            />
          </div>

          {/* Right */}
          <div className="space-y-8 lg:col-span-2">
            <ProfileInformation />

            <ProfileActivity />
          </div>
        </section>
      </div>

      {/* Edit Profile Dialog */}
      <EditProfileDialog
        open={isEditOpen}
        onClose={() =>
          setIsEditOpen(false)
        }
      />
    </>
  );
}