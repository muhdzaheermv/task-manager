function EmptyState({ darkMode }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center rounded-[30px] py-20 px-8 transition-all duration-300 ${
        darkMode
          ? "bg-slate-700/40"
          : "bg-gradient-to-br from-emerald-50 to-green-100"
      }`}
    >
      {/* Icon */}
      <div className="w-28 h-28 rounded-full bg-[#C9F6E4] flex items-center justify-center shadow-lg mb-8">
        <span className="text-5xl">📝</span>
      </div>

      {/* Heading */}
      <h2
        className={`text-3xl font-bold mb-3 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        No Tasks Yet
      </h2>

      {/* Description */}
      <p
        className={`max-w-md text-lg leading-7 ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        Stay organized by creating your first task. Plan your day, set
        priorities, and track your progress effortlessly.
      </p>

      {/* Decorative Line */}
      <div className="mt-8 w-24 h-1 rounded-full bg-[#3FBC96]"></div>
    </div>
  );
}

export default EmptyState;