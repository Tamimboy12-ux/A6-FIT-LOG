
"use client";

import Link from "next/link";
import { Dumbbell, Bookmark, ClipboardList } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Workout",
      href: "/",
    },
    {
      name: "My Plan",
      href: "/my-plan",
    },
  ];

  // Temporary values.
  // পরে Context API থেকে dynamic value আসবে।
  const planCount = 0;
  const savedCount = 0;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ccff00] text-black">
            <Dumbbell size={22} strokeWidth={2.5} />
          </div>

          <span className="text-xl font-black tracking-wider text-white">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
                  isActive
                    ? "bg-[#ccff00] text-black"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Badges */}
        <div className="flex items-center gap-2">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-2 text-xs font-black text-black transition hover:scale-105"
          >
            <ClipboardList size={15} />
            <span>Plan</span>
            <span className="ml-0.5 rounded-full bg-black/15 px-1.5 py-0.5">
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full border border-[#ccff00] px-3 py-2 text-xs font-black text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
          >
            <Bookmark size={15} />
            <span>Saved</span>
            <span className="ml-0.5 rounded-full border border-current px-1.5 py-0.5">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-white/10 md:hidden">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide transition ${
                  isActive
                    ? "bg-[#ccff00] text-black"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;