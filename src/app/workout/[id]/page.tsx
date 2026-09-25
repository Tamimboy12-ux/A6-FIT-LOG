
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  Check,
  Clock3,
  Dumbbell,
  Flame,
  Gauge,
  ListChecks,
  Star,
} from "lucide-react";

import { getWorkout } from "@/lib/api";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-[#101010] px-4">
        <div className="text-center">
          <h1 className="text-5xl font-black text-white">404</h1>

          <p className="mt-3 text-gray-400">
            Workout not found.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"
          >
            Back to workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#101010]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-400 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={18} />
          Back to library
        </Link>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ================= IMAGE ================= */}
          <div className="relative min-h-[450px] overflow-hidden rounded-3xl border border-white/10 bg-[#171717] lg:min-h-[700px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
                FITLOG WORKOUT
              </p>

              <p className="mt-2 text-2xl font-black uppercase text-white">
                {workout.name}
              </p>
            </div>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-black uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* ================= SPECS ================= */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#171717]">

              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <Gauge
                    size={18}
                    className="text-[#ccff00]"
                  />

                  <h2 className="text-sm font-black uppercase tracking-widest">
                    Key Specs
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <SpecItem
                  label="Equipment"
                  value={workout.equipment}
                  icon={<Dumbbell size={16} />}
                />

                <SpecItem
                  label="Difficulty"
                  value={workout.difficulty}
                  icon={<Gauge size={16} />}
                />

                <SpecItem
                  label="Sets"
                  value={String(workout.sets)}
                  icon={<ListChecks size={16} />}
                />

                <SpecItem
                  label="Reps"
                  value={workout.reps}
                  icon={<Check size={16} />}
                />

                <SpecItem
                  label="Duration"
                  value={`${workout.duration} min`}
                  icon={<Clock3 size={16} />}
                />

                <SpecItem
                  label="Calories"
                  value={`${workout.caloriesBurned} kcal`}
                  icon={<Flame size={16} />}
                />

                <SpecItem
                  label="Rating"
                  value={String(workout.rating)}
                  icon={<Star size={16} />}
                />
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-8">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#ccff00]">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={`${instruction}-${index}`}
                      className="flex gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-sm leading-6 text-gray-400">
                        {instruction}
                      </p>
                    </li>
                  ),
                )}
              </ol>
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">

              <button
                type="button"
                className="btn h-14 rounded-full border-0 bg-[#ccff00] text-sm font-black uppercase text-black hover:bg-[#bff000]"
              >
                <Check size={19} />
                Add to today&apos;s plan
              </button>

              <button
                type="button"
                className="btn h-14 rounded-full border border-white/20 bg-transparent text-sm font-black uppercase text-white hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black"
              >
                <Bookmark size={19} />
                Save for later
              </button>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* ================= SPEC ITEM ================= */

interface SpecItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const SpecItem = ({
  label,
  value,
  icon,
}: SpecItemProps) => {
  return (
    <div className="border-b border-r border-white/10 p-4">
      <div className="flex items-center gap-2 text-gray-500">
        {icon}

        <span className="text-[10px] font-black uppercase tracking-wider">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-bold text-white">
        {value}
      </p>
    </div>
  );
};

export default WorkoutDetailsPage;
