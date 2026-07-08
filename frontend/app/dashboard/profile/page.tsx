"use client";

import { ProfileCard } from "@/features/profile/components/profile-card";
import { ProfileStats } from "@/features/profile/components/profile-stats";
import { ProfileInformation } from "@/features/profile/components/profile-information";
import { ProfileActivity } from "@/features/profile/components/profile-activity";
import { EditProfileDialog } from "@/features/profile/components/edit-profile-dialog";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your personal information and account activity.
        </p>
      </div>

      {/* Stats */}
      <ProfileStats />

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8">
          <ProfileCard />
          <EditProfileDialog />
        </div>

        <div className="space-y-8 lg:col-span-2">
          <ProfileInformation />
          <ProfileActivity />
        </div>
      </div>
    </div>
  );
}