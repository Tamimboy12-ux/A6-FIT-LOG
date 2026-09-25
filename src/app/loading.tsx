const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#101010]">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />

        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-gray-400">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;