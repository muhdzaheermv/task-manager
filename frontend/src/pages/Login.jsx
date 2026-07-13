import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-4 mx-auto">

        <h2 className="mb-4">Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="form-control mb-3"
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">
            Login
          </button>


        </form>

        <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register">
                Register
            </Link>
            </p>

      </div>
    </div>
  );
}

export default Login;