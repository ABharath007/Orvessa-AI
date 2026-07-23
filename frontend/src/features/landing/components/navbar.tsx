"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <Image
            src="/logo/orvessa-icon.png"
            alt="Orvessa AI"
            width={52}
            height={52}
            priority
            className="
              h-12
              w-12
              rounded-2xl
              object-cover
              shadow-lg
              transition-all
              duration-300
              group-hover:shadow-xl
            "
          />

          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Orvessa AI
            </h2>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Interior Intelligence
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#features"
            className="text-sm font-medium transition hover:text-indigo-600"
          >
            Features
          </Link>

          <Link
            href="#showcase"
            className="text-sm font-medium transition hover:text-indigo-600"
          >
            Showcase
          </Link>

          

          <Link
            href="#faq"
            className="text-sm font-medium transition hover:text-indigo-600"
          >
            FAQ
          </Link>
        </nav>

        {/* Right */}

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Link href="/auth/login">
            <Button variant="outline">
              Login
            </Button>
          </Link>

          <Link href="/auth/register">
            <Button>
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-5">
            <Link href="#features">Features</Link>

            <Link href="#showcase">Showcase</Link>

            <Link href="#pricing">Pricing</Link>

            <Link href="#faq">FAQ</Link>

            <Link href="/auth/login">Login</Link>

            <Link href="/auth/register">
              <Button className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}