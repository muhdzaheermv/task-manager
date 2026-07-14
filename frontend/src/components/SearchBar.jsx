import { Search } from "lucide-react";

function SearchBar({ search, setSearch, darkMode }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">

      {/* Left Side */}
      <div>
        <h2
          className={`text-3xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          My Tasks
        </h2>

        <p
          className={`mt-2 ${
            darkMode ? "text-slate-300" : "text-slate-500"
          }`}
        >
          Search, manage and complete your daily tasks.
        </p>
      </div>

      {/* Search Box */}
      <div className="relative w-full lg:w-96">

        <Search
          size={20}
          className={`absolute left-5 top-1/2 -translate-y-1/2 ${
            darkMode ? "text-slate-400" : "text-slate-400"
          }`}
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className={`w-full pl-14 pr-5 py-4 rounded-full border transition-all duration-300 outline-none ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-[#3FBC96]"
              : "bg-white border-gray-200 text-slate-800 placeholder:text-slate-400 focus:border-[#3FBC96]"
          } focus:ring-4 focus:ring-[#3FBC96]/20 shadow-sm`}
        />

      </div>

    </div>
  );
}

export default SearchBar;