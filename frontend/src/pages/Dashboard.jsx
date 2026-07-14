import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    due_date: "",
  });

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get("tasks/");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        const currentTask = tasks.find((task) => task.id === editingId);

        await api.put(`tasks/${editingId}/`, {
          ...form,
          completed: currentTask.completed,
        });

        setEditingId(null);
      } else {
        await api.post("tasks/", form);
      }

      setForm({
        title: "",
        description: "",
        priority: "Medium",
        due_date: "",
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const editTask = (task) => {
    setEditingId(task.id);

    setForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      due_date: task.due_date || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await api.delete(`tasks/${id}/`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await api.patch(`tasks/${task.id}/`, {
        completed: !task.completed,
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-slate-900"
          : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <Header
          logout={logout}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Hero / Progress */}
        <div className="mt-8">
          <ProgressCard
            progress={progress}
            darkMode={darkMode}
          />
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

          {/* Left Side */}
          <div className="space-y-6">
            <TaskForm
              form={form}
              editingId={editingId}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              darkMode={darkMode}
            />
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2">

            <div
              className={`rounded-[30px] shadow-xl p-8 transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-white/90 backdrop-blur-lg"
              }`}
            >
              <SearchBar
                search={search}
                setSearch={setSearch}
                darkMode={darkMode}
              />

              <div className="mt-8">

                {filteredTasks.length === 0 ? (
                  <EmptyState darkMode={darkMode} />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {filteredTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        editTask={editTask}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        darkMode={darkMode}
                      />
                    ))}

                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;