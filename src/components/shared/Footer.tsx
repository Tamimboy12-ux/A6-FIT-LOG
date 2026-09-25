
import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ccff00] text-black">
            <Dumbbell size={21} />
          </div>

          <span className="text-xl font-black tracking-widest">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/45">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
