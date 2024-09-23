// 


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const { createUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic(); 
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await createUser(email, password);
      console.log(result.user);

      const userInfo = {
        name: name,  // Fixed: Use the correct variable `name`
        email: email, // Fixed: Use the correct variable `email`
      };

      const response = await axiosPublic.post("/users", userInfo);
      if (response.data.insertedId) {
        form.reset(); // Reset the form
        toast.success("User created successfully!", { duration: 3000 });
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Registration failed. Please try again.", { duration: 3000 });
    }
  };

  return (
    <div className="hero my-24">
      <div className="flex md:flex-row flex-col items-center gap-8">
        <div>
          {/* Add any image or illustration here if needed */}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mt-5 text-[#FF3811]">
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered focus:border-none hover:border-[#FF3811]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered focus:border-none hover:border-[#FF3811]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full input input-bordered focus:border-none hover:border-[#FF3811]"
                  required
                />
                <span
                  className="right-0 px-4 text-[20px] absolute cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
                Register
              </button>
            </div>
          </form>
          <div className="text-center font-medium space-y-4">
            <div className="text-center">
              <GoogleLogin />
            </div>
            <h5 className="pb-5">
              Already have an account?{" "}
              <Link className="text-[#FF3811]" to="/login">
                Login
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
