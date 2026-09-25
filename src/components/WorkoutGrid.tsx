import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/types/workout";

interface WorkoutGridProps {
  workouts: Workout[];
}

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
  return (
    <section id="library" className="bg-[#101010] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <p className="text-sm font-black tracking-[0.25em] text-[#ccff00]">
            EXPLORE
          </p>

          <h2 className="mt-2 text-4xl font-black uppercase sm:text-5xl">
            The Library
          </h2>

          <p className="mt-3 text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutGrid;