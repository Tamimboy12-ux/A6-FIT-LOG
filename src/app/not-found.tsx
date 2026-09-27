
import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#101010] px-4 py-16 text-white">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#ccff00] text-black shadow-[0_0_60px_rgba(204,255,0,0.12)]">
          <Dumbbell size={36} />
        </div>

        <p className="text-8xl font-black tracking-tighter text-[#ccff00] sm:text-9xl">
          404
        </p>

        <p className="mt-4 text-sm font-black uppercase tracking-[0.3em] text-white/40">
          WORKOUT NOT FOUND
        </p>

        <h1 className="mt-5 text-3xl font-black uppercase tracking-tight sm:text-5xl">
          THIS PAGE MISSED A SET.
        </h1>

        <p className="mx-auto mt-5 max-w-lg leading-7 text-white/50">
          The page or workout you are looking for does not exist. Head back to
          the library and find your next lift.
        </p>

        <Link
          href="/"
          className="btn mt-8 rounded-full border-0 bg-[#ccff00] px-7 font-black uppercase text-black hover:bg-[#bff000]"
        >
          <ArrowLeft size={18} />
          Back to workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
