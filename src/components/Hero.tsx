import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import BannerImg from "@/assets/banner.png"

const Hero = () => {
  return (
    <section className="border-b border-white/10 bg-[#101010]">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Content */}
        <div>
          <p className="mb-5 text-sm font-black tracking-[0.3em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <span className="block text-[#ccff00]">
              LOG EVERY SET.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3.5 text-sm font-black uppercase text-black transition hover:scale-105"
          >
            Browse Workouts
            <ArrowDownRight size={19} />
          </Link>
        </div>

        {/* Image */}
        <div className="relative h-[400px] overflow-hidden rounded-3xl border border-white/10 sm:h-[500px]">
          <Image
            src={BannerImg}
            alt="FitLog workout"
            width={400}
            height={300}
            className="mx-auto mt-5"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6">
            <p className="text-xs font-bold tracking-widest text-[#ccff00]">
              FITLOG
            </p>
            <p className="mt-1 text-2xl font-black uppercase">
              Train. Track. Repeat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;