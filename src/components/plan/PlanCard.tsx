"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Clock3, Flame, X } from "lucide-react";
import { useState } from "react";

import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";

interface PlanCardProps {
  workout: Workout;
  type: "plan" | "saved";
}

const PlanCard = ({ workout, type }: PlanCardProps) => {
  const { markAsDone, removeFromPlan, removeSaved } = useWorkout();
  const [message, setMessage] = useState("");

  const showMessage = (text: string) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2200);
  };

  const handleDone = () => {
    markAsDone(workout.id);
    showMessage("Workout marked as done");
  };

  const handleRemove = () => {
    if (type === "plan") {
      removeFromPlan(workout.id);
      showMessage("Workout removed from today's plan");
    } else {
      removeSaved(workout.id);
      showMessage("Workout removed from saved");
    }
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#171717] transition duration-300 hover:-translate-y-1 hover:border-white/20">
        <div className="grid md:grid-cols-[220px_1fr]">
          {/* Image */}
          <div className="relative h-56 md:h-full">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 220px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-5 sm:p-6">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full border border-[#ccff00]/20 bg-[#ccff00]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#ccff00]"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight">
                {workout.name}
              </h3>

              <p className="mt-2 text-sm text-white/55">
                {workout.equipment}
              </p>

              {/* Stats */}
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <Clock3 size={17} />
                  {workout.duration} min
                </span>

                <span className="flex items-center gap-2">
                  <Flame size={17} />
                  {workout.caloriesBurned} cal
                </span>

                <span>
                  {workout.sets} sets × {workout.reps}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/workout/${workout.id}`}
                className="btn rounded-full border border-white/15 bg-transparent px-5 text-xs font-black uppercase text-white hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black"
              >
                View Details
              </Link>

              {type === "plan" && (
                <button
                  type="button"
                  onClick={handleDone}
                  className="btn rounded-full border-0 bg-[#ccff00] px-5 text-xs font-black uppercase text-black hover:bg-[#bff000]"
                >
                  <Check size={16} />
                  Mark as Done
                </button>
              )}

              <button
                type="button"
                onClick={handleRemove}
                className="btn btn-circle border border-white/10 bg-white/5 text-white/60 hover:border-red-400 hover:bg-red-400/10 hover:text-red-400"
                aria-label="Remove workout"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {message && (
        <div className="toast toast-end toast-bottom z-50">
          <div className="alert border border-[#ccff00] bg-[#171717] text-white shadow-xl">
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default PlanCard;