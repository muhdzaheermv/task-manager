import { Moon, Sun, LogOut, CheckSquare } from "lucide-react";

function Header({ logout, darkMode, setDarkMode }) {
  return (
    <header
      className={`rounded-[32px] px-8 py-5 shadow-lg transition-all duration-300 ${
        darkMode
          ? "bg-slate-800"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-[#3FBC96] flex items-center justify-center shadow-md">
            <CheckSquare className="text-white" size={28} />
          </div>

          <div>
            <h1
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              TaskFlow
            </h1>

            <p
              className={`text-sm ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Organize • Track • Complete
            </p>
          </div>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition ${
              darkMode
                ? "bg-yellow-400 hover:bg-yellow-300"
                : "bg-slate-900 hover:bg-slate-700"
            }`}
          >
            {darkMode ? (
              <Sun size={20} className="text-black" />
            ) : (
              <Moon size={20} className="text-white" />
            )}
          </button>

          {/* Logout */}

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-[#F8D96C] hover:bg-[#FFD84D] text-slate-900 font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;