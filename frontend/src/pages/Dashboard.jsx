import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });

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
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

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

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Task Manager</h2>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">

          <h4 className="mb-3">
            {editingId ? "Edit Task" : "Add Task"}
          </h4>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Task Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />

            <textarea
              className="form-control mb-3"
              placeholder="Description"
              rows="3"
              name="description"
              value={form.description}
              onChange={handleChange}
            ></textarea>

            <select
              className="form-select mb-3"
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <button
              type="submit"
              className="btn btn-success w-100"
            >
              {editingId ? "Update Task" : "Add Task"}
            </button>

          </form>

        </div>
      </div>

      <h4 className="mb-3">My Tasks</h4>

      {tasks.length === 0 ? (
        <div className="alert alert-info">
          No Tasks Found
        </div>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="card shadow-sm mb-3"
          >
            <div className="card-body">

              <h5>{task.title}</h5>

              <p>{task.description}</p>

              <span
                className={`badge ${
                  task.priority === "High"
                    ? "bg-danger"
                    : task.priority === "Medium"
                    ? "bg-warning text-dark"
                    : "bg-success"
                }`}
              >
                {task.priority}
              </span>

              <p className="mt-3">
                Status :
                {" "}
                {task.completed ? (
                  <span className="text-success fw-bold">
                    Completed
                  </span>
                ) : (
                  <span className="text-warning fw-bold">
                    Pending
                  </span>
                )}
              </p>

              <div className="d-flex gap-2 flex-wrap">

                <button
                  className="btn btn-primary"
                  onClick={() => editTask(task)}
                >
                  Edit
                </button>

                <button
                  className={`btn ${
                    task.completed
                      ? "btn-warning"
                      : "btn-success"
                  }`}
                  onClick={() => toggleComplete(task)}
                >
                  {task.completed
                    ? "Mark Pending"
                    : "Mark Complete"}
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>

              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;