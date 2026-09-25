
"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

interface WorkoutGridProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const copiedWorkouts = [...workouts];

    if (sortBy === "duration") {
      return copiedWorkouts.sort(
        (a, b) => a.duration - b.duration
      );
    }

    if (sortBy === "calories") {
      return copiedWorkouts.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      return copiedWorkouts.sort(
        (a, b) => b.rating - a.rating
      );
    }

    return copiedWorkouts;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
              THE LIBRARY
            </h2>

            <p className="mt-4 text-white/50">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Sort */}
          <div className="relative w-full md:w-56">
            <label
              htmlFor="sort-workouts"
              className="mb-2 block text-xs font-black uppercase tracking-widest text-white/40"
            >
              Sort by
            </label>

            <div className="relative">
              <select
                id="sort-workouts"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="select w-full appearance-none rounded-full border border-white/15 bg-[#171717] px-5 font-bold text-white outline-none focus:border-[#ccff00]"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/50"
              />
            </div>
          </div>
        </div>

        {/* Workout Grid */}
        {sortedWorkouts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center">
            <p className="text-lg font-bold text-white/50">
              No workouts found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutGrid;
