import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  UserPlus,
  CheckSquare,
} from "lucide-react";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
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
      await api.post("register/", form);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
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
            Join TaskFlow
          </h1>

          <p className="text-slate-600 mt-6 text-lg leading-8">
            Create your account to organize tasks, monitor progress,
            and stay productive every day.
          </p>

          <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-[#3FBC96]">
              Get Started
            </h3>

            <p className="text-gray-500 mt-3">
              Manage your work smarter with a clean and modern task
              management experience.
            </p>
          </div>

        </div>

        {/* Right Side */}

        <div className="p-10 lg:p-14 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Create Account
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Register to start managing your tasks
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

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

            {/* Email */}

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
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

            {/* Register Button */}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#F8D96C] hover:bg-[#FFD84D] text-slate-900 font-bold py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <UserPlus size={20} />
              Create Account
            </button>

          </form>

          <p className="text-center text-slate-500 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#3FBC96] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;