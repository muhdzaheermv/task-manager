function ProgressCard({ progress, darkMode }) {
  return (
    <section
      className={`rounded-[36px] overflow-hidden shadow-xl transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-slate-800 to-slate-700"
          : "bg-gradient-to-r from-[#C9F6E4] via-[#DDF8EC] to-[#BDEFD9]"
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-14">
        
        {/* Left Content */}
        <div>
          <span className="inline-block bg-white/70 text-[#3FBC96] px-4 py-2 rounded-full text-sm font-semibold mb-5">
            Productivity Dashboard
          </span>

          <h2
            className={`text-4xl lg:text-5xl font-extrabold leading-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Keep Your <br />
            Tasks Organized
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Stay focused, complete your work on time, and monitor your
            daily productivity with an organized task manager.
          </p>

          {/* Progress */}
          <div className="mt-10">
            <div className="flex justify-between mb-3">
              <span
                className={`font-semibold ${
                  darkMode ? "text-white" : "text-slate-700"
                }`}
              >
                Overall Progress
              </span>

              <span className="font-bold text-[#3FBC96] text-lg">
                {progress}%
              </span>
            </div>

            <div className="w-full h-4 rounded-full bg-white/60 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#3FBC96] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Main Circle */}
            <div className="w-72 h-72 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center shadow-xl">

              <div className="w-56 h-56 rounded-full bg-white flex flex-col items-center justify-center">

                <div className="text-6xl mb-3">📋</div>

                <h3 className="text-5xl font-extrabold text-[#3FBC96]">
                  {progress}%
                </h3>

                <p className="text-gray-500 mt-2">
                  Tasks Completed
                </p>

              </div>

            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-[#F8D96C] px-5 py-3 rounded-2xl shadow-lg">
              <p className="font-semibold text-slate-800">
                🎯 Stay Focused
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 bg-white px-5 py-3 rounded-2xl shadow-lg">
              <p className="font-semibold text-[#3FBC96]">
                ✅ Daily Goals
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ProgressCard;