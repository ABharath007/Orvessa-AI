"use client";

import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaEnvelope, FaGlobe } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-xl font-bold">
                O
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Orvessa AI
                </h2>

                <p className="text-sm text-slate-400">
                  AI Interior Design Platform
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-md leading-8 text-slate-400">
              Design beautiful interiors with artificial
              intelligence. Generate room designs, discover
              furniture, estimate renovation costs and manage
              your dream projects — all in one place.
            </p>

            {/* Newsletter */}

            <div className="mt-10">

              <h3 className="font-semibold">
                Subscribe to our newsletter
              </h3>

              <div className="mt-4 flex">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-indigo-500"
                />

                <button className="rounded-r-xl bg-indigo-600 px-6 transition hover:bg-indigo-700">
                  <FaEnvelope className="h-5 w-5" />
                </button>

              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-lg font-semibold">
              Product
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">

              <Link href="/">
                Home
              </Link>

              <Link href="#features">
                Features
              </Link>

              <Link href="#pricing">
                Pricing
              </Link>

              <Link href="/auth/login">
                Login
              </Link>

              <Link href="/auth/register">
                Register
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-semibold">
              Resources
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">

              <Link href="#">
                Documentation
              </Link>

              <Link href="#">
                API
              </Link>

              <Link href="#">
                Blog
              </Link>

              <Link href="#">
                Community
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-semibold">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-slate-400">

              <Link href="#">
                About
              </Link>

              <Link href="#">
                Careers
              </Link>

              <Link href="#">
                Privacy
              </Link>

              <Link href="#">
                Terms
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-slate-800 pt-10 md:flex-row">

          <p className="text-slate-500">
            © 2026 Orvessa AI. All rights reserved.
          </p>

          <div className="flex gap-5">

            <button className="rounded-full bg-slate-900 p-3 transition hover:bg-indigo-600">
              <FaGithub className="h-5 w-5" />
            </button>

            <button className="rounded-full bg-slate-900 p-3 transition hover:bg-indigo-600">
              <FaLinkedinIn className="h-5 w-5" />
            </button>

            <button className="rounded-full bg-slate-900 p-3 transition hover:bg-indigo-600">
              <FaGlobe className="h-5 w-5" />
            </button>

            <button className="rounded-full bg-slate-900 p-3 transition hover:bg-indigo-600">
              <FaInstagram className="h-5 w-5" />
            </button>

            <button className="rounded-full bg-slate-900 p-3 transition hover:bg-indigo-600">
              <FaFacebookF className="h-5 w-5" />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}