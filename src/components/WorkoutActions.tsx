
"use client";

import { Bookmark, Check } from "lucide-react";
import { useState } from "react";

import { Workout } from "@/types/workout";
import { useWorkout } from "@/context/WorkoutContext";

interface WorkoutActionsProps {
  workout: Workout;
}

const WorkoutActions = ({
  workout,
}: WorkoutActionsProps) => {
  const {
    addToPlan,
    saveWorkout,
  } = useWorkout();

  const [message, setMessage] = useState("");

  const showMessage = (text: string) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleAddToPlan = () => {
    const added = addToPlan(workout);

    if (added) {
      showMessage("Added to today's plan");
    } else {
      showMessage(
        "Workout already added or plan is full",
      );
    }
  };

  const handleSave = () => {
    const saved = saveWorkout(workout);

    if (saved) {
      showMessage("Workout saved for later");
    } else {
      showMessage("Workout is already saved");
    }
  };

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">

        {/* Add To Plan */}
        <button
          type="button"
          onClick={handleAddToPlan}
          className="btn h-14 rounded-full border-0 bg-[#ccff00] text-sm font-black uppercase text-black hover:bg-[#bff000]"
        >
          <Check size={19} />

          Add to today&apos;s plan
        </button>

        {/* Save */}
        <button
          type="button"
          onClick={handleSave}
          className="btn h-14 rounded-full border border-white/20 bg-transparent text-sm font-black uppercase text-white hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black"
        >
          <Bookmark size={19} />

          Save for later
        </button>
      </div>

      {/* Simple Toast */}
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

export default WorkoutActions;
