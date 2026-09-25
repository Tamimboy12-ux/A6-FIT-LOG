import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`} className="group">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#171717] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50">

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Categories */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-black uppercase text-white">
            {workout.name}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-gray-400">

            <span className="flex items-center gap-1.5">
              <Clock3 size={16} />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1.5">
              <Flame size={16} />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1.5">
              <Star size={16} className="fill-[#ccff00] text-[#ccff00]" />
              {workout.rating}
            </span>

          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;