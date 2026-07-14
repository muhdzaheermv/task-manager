import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Lock, LogIn, CheckSquare } from "lucide-react";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("login/", form);

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 max-w-6xl w-full bg-white rounded-[36px] overflow-hidden shadow-2xl">

        {/* Left Side */}

        <div className="hidden lg:flex bg-gradient-to-br from-[#C9F6E4] to-[#BDEFD9] p-14 flex-col justify-center">

          <div className="w-20 h-20 rounded-3xl bg-[#3FBC96] flex items-center justify-center shadow-lg">
            <CheckSquare size={40} className="text-white" />
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900 mt-8 leading-tight">
            Welcome Back
          </h1>

          <p className="text-slate-600 mt-6 text-lg leading-8">
            Sign in to manage your daily tasks, track your progress,
            and stay productive with TaskFlow.
          </p>

          <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-[#3FBC96]">
              Stay Organized
            </h3>

            <p className="text-gray-500 mt-3">
              Create tasks, set priorities, and complete your goals
              every day.
            </p>
          </div>

        </div>

        {/* Right Side */}

        <div className="p-10 lg:p-14 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Login
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Username */}

            <div className="relative">

              <User
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-14 pr-5 py-4 outline-none focus:ring-4 focus:ring-[#3FBC96]/20 focus:border-[#3FBC96]"
              />

            </div>

            {/* Password */}

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-14 pr-5 py-4 outline-none focus:ring-4 focus:ring-[#3FBC96]/20 focus:border-[#3FBC96]"
              />

            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#F8D96C] hover:bg-[#FFD84D] text-slate-900 font-bold py-4 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              <LogIn size={20} />
              Login
            </button>

          </form>

          <p className="text-center text-slate-500 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#3FBC96] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;