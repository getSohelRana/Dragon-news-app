import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl ">
        <h1 className="text-center py-4 text-2xl border-b-2 border-base-200 font-semibold">
          Register your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            {/* photo url */}
            <label className="label">Photo url</label>
            <input type="url" className="input" placeholder="photo url" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            {/* Accept Term & Conditions */}
            <label className="label">
              <input type="checkbox"  className="checkbox checked:text-green-400 checked:border-green-400" />
              Accept Term & Conditions
            </label>
            <button className="btn btn-neutral mt-4">SignUp</button>
            <p className="text-center font-semibold mt-2">
              Already have an account? Please
              <span className="text-secondary link-hover">
                <Link to="/auth/login">Login</Link>
              </span>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Signup;
