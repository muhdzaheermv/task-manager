import {
  ClipboardList,
  FileText,
  Flag,
  Calendar,
  Plus,
  Edit,
} from "lucide-react";

function TaskForm({
  form,
  editingId,
  handleChange,
  handleSubmit,
  darkMode,
}) {
  return (
    <div
      className={`rounded-[32px] shadow-xl overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-slate-800"
          : "bg-white"
      }`}
    >
      {/* Header */}
      <div
        className={`p-8 ${
          darkMode
            ? "bg-slate-700"
            : "bg-gradient-to-r from-[#C9F6E4] to-[#E8FBF4]"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#3FBC96] text-white flex items-center justify-center shadow-lg">
            <ClipboardList size={28} />
          </div>

          <div>
            <h2
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {editingId ? "Edit Task" : "Create Task"}
            </h2>

            <p
              className={`mt-1 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Organize your work and stay productive.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="p-8 space-y-6"
      >
        {/* Title */}
        <div>
          <label
            className={`mb-2 flex items-center gap-2 font-semibold ${
              darkMode ? "text-white" : "text-slate-700"
            }`}
          >
            <ClipboardList size={18} />
            Task Title
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
            className={`w-full rounded-2xl px-5 py-4 border outline-none transition ${
              darkMode
                ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                : "bg-gray-50 border-gray-200"
            } focus:ring-4 focus:ring-[#3FBC96]/20 focus:border-[#3FBC96]`}
          />
        </div>

        {/* Description */}
        <div>
          <label
            className={`mb-2 flex items-center gap-2 font-semibold ${
              darkMode ? "text-white" : "text-slate-700"
            }`}
          >
            <FileText size={18} />
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write task description..."
            className={`w-full rounded-2xl px-5 py-4 border resize-none outline-none transition ${
              darkMode
                ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                : "bg-gray-50 border-gray-200"
            } focus:ring-4 focus:ring-[#3FBC96]/20 focus:border-[#3FBC96]`}
          />
        </div>

        {/* Priority */}
        <div>
          <label
            className={`mb-2 flex items-center gap-2 font-semibold ${
              darkMode ? "text-white" : "text-slate-700"
            }`}
          >
            <Flag size={18} />
            Priority
          </label>

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className={`w-full rounded-2xl px-5 py-4 border outline-none transition ${
              darkMode
                ? "bg-slate-700 border-slate-600 text-white"
                : "bg-gray-50 border-gray-200"
            } focus:ring-4 focus:ring-[#3FBC96]/20 focus:border-[#3FBC96]`}
          >
            <option value="Low">🟢 Low Priority</option>
            <option value="Medium">🟡 Medium Priority</option>
            <option value="High">🔴 High Priority</option>
          </select>
        </div>

        {/* Due Date */}
        <div>
          <label
            className={`mb-2 flex items-center gap-2 font-semibold ${
              darkMode ? "text-white" : "text-slate-700"
            }`}
          >
            <Calendar size={18} />
            Due Date
          </label>

          <input
            type="date"
            name="due_date"
            value={form.due_date}
            onChange={handleChange}
            className={`w-full rounded-2xl px-5 py-4 border outline-none transition ${
              darkMode
                ? "bg-slate-700 border-slate-600 text-white"
                : "bg-gray-50 border-gray-200"
            } focus:ring-4 focus:ring-[#3FBC96]/20 focus:border-[#3FBC96]`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 bg-[#F8D96C] hover:bg-[#FFD84D] text-slate-900 font-bold py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          {editingId ? (
            <>
              <Edit size={20} />
              Update Task
            </>
          ) : (
            <>
              <Plus size={20} />
              Create Task
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;