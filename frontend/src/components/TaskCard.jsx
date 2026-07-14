import {
  Calendar,
  CheckCircle,
  Clock,
  Pencil,
  Trash2,
  Flag,
} from "lucide-react";

function TaskCard({
  task,
  editTask,
  deleteTask,
  toggleComplete,
  darkMode,
}) {
  const priorityStyle = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <div
      className={`rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-gray-100 shadow-md"
      }`}
    >
      <div className="p-7">

        {/* Top */}
        <div className="flex justify-between items-start">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-[#C9F6E4] flex items-center justify-center">
              <Flag className="text-[#3FBC96]" size={22} />
            </div>

            <div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {task.title}
              </h3>

              <p
                className={`text-sm mt-1 ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Task Details
              </p>
            </div>

          </div>

          <span
            className={`px-4 py-2 rounded-full text-xs font-semibold ${
              priorityStyle[task.priority]
            }`}
          >
            {task.priority}
          </span>

        </div>

        {/* Description */}

        <p
          className={`mt-6 leading-7 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {task.description || "No description provided."}
        </p>

        {/* Due Date */}

        <div
          className={`flex items-center gap-3 mt-6 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <Calendar size={18} className="text-[#3FBC96]" />

          <span>
            {task.due_date || "No Due Date"}
          </span>
        </div>

        {/* Status */}

        <div className="mt-5">

          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.completed ? (
              <>
                <CheckCircle size={16} />
                Completed
              </>
            ) : (
              <>
                <Clock size={16} />
                Pending
              </>
            )}
          </span>

        </div>

        {/* Divider */}

        <div
          className={`my-7 border-t ${
            darkMode ? "border-slate-700" : "border-gray-100"
          }`}
        />

        {/* Buttons */}

        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={() => editTask(task)}
            className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#3FBC96] text-[#3FBC96] hover:bg-[#3FBC96] hover:text-white transition"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={() => toggleComplete(task)}
            className={`flex items-center justify-center gap-2 py-3 rounded-full text-white transition ${
              task.completed
                ? "bg-slate-500 hover:bg-slate-600"
                : "bg-[#3FBC96] hover:bg-[#2fa881]"
            }`}
          >
            <CheckCircle size={16} />
            {task.completed ? "Undo" : "Done"}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="flex items-center justify-center gap-2 py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            <Trash2 size={16} />
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default TaskCard;