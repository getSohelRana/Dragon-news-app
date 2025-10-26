import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const name = e.target.name.value.trim();
    const password = e.target.password.value.trim();
    const photo = e.target.photo.value.trim();

    // check empty
    if (!name || !photo || !email || !password) {
      toast.warning("Oops! Some fields are missing. Please fill them in.");
      return;
    }

    // create user with Firebase
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({...user, displayName: name, photoURL: photo});
          navigate('/')
        })
        .catch((error)=> {
          toast.warning(error.message)
          setUser(user)
        });

        // console.log(user);
        toast.success("Account created successfully!");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-112px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <h1 className="text-center py-4 text-2xl border-b-2 border-base-200 font-semibold">
          Register your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleSignup}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />

              {/* Terms */}
              <label className="label">
                <input
                  type="checkbox"
                  className="checkbox checked:text-green-400 checked:border-green-400"
                />
                Accept Terms & Conditions
              </label>

              <button className="btn btn-neutral mt-4">Sign Up</button>

              <p className="text-center font-semibold mt-2">
                Already have an account?{" "}
                <span className="text-secondary link-hover">
                  <Link to="/auth/login">Login</Link>
                </span>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
