"use client";

import Image from "next/image";
import {
  Sparkles,
  ImageIcon,
} from "lucide-react";

import type { Project } from "../types/project.types";

interface ProjectImagesProps {
  project: Project;
}

export function ProjectImages({
  project,
}: ProjectImagesProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      {/* Original Room */}
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              shadow-sm
              dark:bg-blue-900/30
            "
          >
            <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
              Original Room
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Uploaded room image
            </p>
          </div>
        </div>

        <div
          className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={1000}
            height={700}
            className="
              h-[460px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* AI Generated Designs */}
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-purple-100
              shadow-sm
              dark:bg-purple-900/30
            "
          >
            <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
              AI Generated Designs
            </h2>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              Multiple AI-generated interior variations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-indigo-300
                hover:shadow-xl
                dark:border-slate-700
                dark:bg-slate-900
                dark:hover:border-indigo-500
              "
            >
              <Image
                src={project.thumbnail}
                alt={`Generated Design ${item}`}
                width={600}
                height={500}
                className="
                  h-52
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}