"use client";

import {
  IndianRupee,
  Wallet,
} from "lucide-react";

import { mockCost } from "../mock/cost.mock";
import type { Project } from "../types/project.types";

interface ProjectCostProps {
  project: Project;
}

export function ProjectCost({
  project,
}: ProjectCostProps) {
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
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-green-100
            shadow-sm
            dark:bg-green-900/30
          "
        >
          <Wallet className="h-7 w-7 text-green-600 dark:text-green-400" />
        </div>

        <div>
          <h2
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Estimated Project Cost
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            AI-estimated renovation budget
          </p>
        </div>
      </div>

      {/* Project Name */}
      <p
        className="
          mt-6
          text-slate-600
          dark:text-slate-300
        "
      >
        Budget estimation for{" "}
        <span
          className="
            font-semibold
            text-slate-900
            dark:text-white
          "
        >
          {project.title}
        </span>
      </p>

      {/* Cost Breakdown */}
      <div className="mt-8 space-y-4">
        {mockCost.items.map((item) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-indigo-300
              hover:shadow-lg
              dark:border-slate-700
              dark:bg-slate-800
              dark:hover:border-indigo-500
            "
          >
            <span
              className="
                font-medium
                text-slate-700
                dark:text-slate-200
              "
            >
              {item.category}
            </span>

            <span
              className="
                flex
                items-center
                gap-1
                text-lg
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              <IndianRupee className="h-5 w-5 text-green-600 dark:text-green-400" />
              {item.amount.toLocaleString("en-IN")}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div
        className="
          mt-8
          rounded-3xl
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-pink-600
          p-6
          text-white
          shadow-xl
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="
                text-sm
                font-medium
                text-white/80
              "
            >
              Estimated Total
            </p>

            <h3 className="mt-2 text-4xl font-bold">
              ₹{mockCost.total.toLocaleString("en-IN")}
            </h3>
          </div>

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white/20
              backdrop-blur-md
            "
          >
            <IndianRupee className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}