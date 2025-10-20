import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-112px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl ">
        <h1 className="text-center py-4 text-2xl border-b-2 border-base-200 font-semibold">Login your account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="text-center font-semibold mt-2">Don't have account? Please <span className="text-secondary link-hover"><Link to="/auth/signup">Signup</Link></span></p>
        </fieldset>
      </div>
    </div>
    </div>
  );
};

export default Login;
