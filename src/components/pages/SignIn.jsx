import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: [e.target.value],
    }));
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-4xl font-bold py-8 px-4 max-w-md mb-3">
          Welcome Back!
        </h1>
        <form className="mb-12 mx-4">
          <input
            type="email"
            id="email"
            value={email}
            className="input w-full mb-4"
            placeholder="Email"
            onChange={onChange}
          />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            className="input w-full"
            placeholder="Password"
            onChange={onChange}
          />
          <label className="label text-right block mb-4">
            <span
              className="label-text-alt cursorPointer"
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              Show Password
            </span>
          </label>
          <button
            type="submit"
            className="btn btn-success w-full text-white mb-4 hover:scale-95"
          >
            Sign In
          </button>
          <p
            className="text-right text-green-500 font-semibold cursorPointer"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password
          </p>
        </form>
        <p
          className="text-center text-xl text-green-500 font-semibold cursorPointer"
          onClick={() => navigate("/sign-up")}
        >
          Sign Up Instead
        </p>
      </div>
    </>
  );
};

export default SignIn;
