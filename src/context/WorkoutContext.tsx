
"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import { Workout } from "@/types/workout";

interface WorkoutContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => boolean;
  removeSaved: (id: number) => void;

  markAsDone: (id: number) => void;
}

const WorkoutContext = createContext<
  WorkoutContextType | undefined
>(undefined);

interface WorkoutProviderProps {
  children: ReactNode;
}

export const WorkoutProvider = ({
  children,
}: WorkoutProviderProps) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  // =========================
  // ADD TO TODAY'S PLAN
  // =========================

  const addToPlan = (workout: Workout) => {
    // Maximum 5 workouts
    if (plan.length >= 5) {
      return false;
    }

    // Prevent duplicate
    const alreadyExists = plan.some(
      (item) => item.id === workout.id,
    );

    if (alreadyExists) {
      return false;
    }

    setPlan((previous) => [
      ...previous,
      workout,
    ]);

    return true;
  };

  // =========================
  // REMOVE FROM PLAN
  // =========================

  const removeFromPlan = (id: number) => {
    setPlan((previous) =>
      previous.filter((item) => item.id !== id),
    );
  };

  // =========================
  // SAVE WORKOUT
  // =========================

  const saveWorkout = (workout: Workout) => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id,
    );

    if (alreadySaved) {
      return false;
    }

    setSaved((previous) => [
      ...previous,
      workout,
    ]);

    return true;
  };

  // =========================
  // REMOVE SAVED
  // =========================

  const removeSaved = (id: number) => {
    setSaved((previous) =>
      previous.filter((item) => item.id !== id),
    );
  };

  // =========================
  // MARK AS DONE
  // =========================

  const markAsDone = (id: number) => {
    setPlan((previous) =>
      previous.filter((item) => item.id !== id),
    );
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

// =========================
// CUSTOM HOOK
// =========================

export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider",
    );
  }

  return context;
}