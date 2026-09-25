"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarCheck,
  Clock3,
  Flame,
  Dumbbell,
} from "lucide-react";

import { useWorkout } from "@/context/WorkoutContext";
import PlanCard from "@/components/plan/PlanCard";

type Tab = "plan" | "saved";

const MyPlanPage = () => {
  const { plan, saved } = useWorkout();
  const [activeTab, setActiveTab] = useState<Tab>("plan");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-screen bg-[#101010] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white/50 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={17} />
          Back to workouts
        </Link>

        {/* Header */}
        <section className="mb-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#ccff00]">
            YOUR WORKOUTS
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
            MY PLAN
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* Metrics */}
        <section className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ccff00] text-black">
              <Dumbbell size={21} />
            </div>

            <p className="text-xs font-black uppercase tracking-widest text-white/40">
              Exercises
            </p>

            <p className="mt-2 text-4xl font-black">
              {plan.length}
              <span className="ml-2 text-lg text-white/30">/ 5</span>
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <Clock3 size={21} />
            </div>

            <p className="text-xs font-black uppercase tracking-widest text-white/40">
              Minutes
            </p>

            <p className="mt-2 text-4xl font-black">{totalMinutes}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <Flame size={21} />
            </div>

            <p className="text-xs font-black uppercase tracking-widest text-white/40">
              Calories
            </p>

            <p className="mt-2 text-4xl font-black">{totalCalories}</p>
          </div>
        </section>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-3 border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`btn rounded-full px-6 font-black uppercase ${
              activeTab === "plan"
                ? "border-0 bg-[#ccff00] text-black hover:bg-[#bff000]"
                : "border border-white/15 bg-transparent text-white/60 hover:border-[#ccff00] hover:text-white"
            }`}
          >
            <CalendarCheck size={17} />
            Today's Plan
            <span className="badge border-0 bg-black/10">
              {plan.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`btn rounded-full px-6 font-black uppercase ${
              activeTab === "saved"
                ? "border-0 bg-[#ccff00] text-black hover:bg-[#bff000]"
                : "border border-white/15 bg-transparent text-white/60 hover:border-[#ccff00] hover:text-white"
            }`}
          >
            Saved
            <span className="badge border-0 bg-black/10">
              {saved.length}
            </span>
          </button>
        </div>

        {/* Workout List */}
        {currentWorkouts.length > 0 ? (
          <section className="space-y-5">
            {currentWorkouts.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                type={activeTab}
              />
            ))}
          </section>
        ) : (
          /* Empty State */
          <section className="flex min-h-[420px] items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#141414] px-6 text-center">
            <div className="max-w-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#ccff00]/10 text-[#ccff00]">
                <Dumbbell size={28} />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ccff00]">
                NOTHING HERE YET
              </p>

              <p className="mt-4 leading-7 text-white/50">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="btn mt-7 rounded-full border-0 bg-[#ccff00] px-7 font-black uppercase text-black hover:bg-[#bff000]"
              >
                Go to workouts
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;