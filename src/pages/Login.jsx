import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {signIn, setUser} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  // console.log(location)
  // handle sing in
  const handleSingIn = (e) => {
    
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    // console.log({email, password});
    // check empty feilds
    if (!email || !password) {
      toast.warning("Oops! Some fields are missing. Please fill them in.");
      return;
    }

    // sign in user
    signIn(email , password)
    .then((res)=>{
      const user = res.user;
      setUser(user)
      // console.log(user)
      toast.success("Account Login successfully!");
      navigate(`${location.state ? location.state : '/' }`)
    })
    .catch((error)=> {
      // console.log(error.message)
      toast.warning(error.message);
    })
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-112px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl ">
        <h1 className="text-center py-4 text-2xl border-b-2 border-base-200 font-semibold">
          Login your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleSingIn}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4" type ='submit'>Login</button>
              <p className="text-center font-semibold mt-2">
                Don't have account? Please{" "}
                <span className="text-secondary link-hover">
                  <Link to="/auth/signup">Signup</Link>
                </span>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      <ToastContainer
        theme="colored"
        position="bottom-left"
        autoClose={3000}
      ></ToastContainer>
    </div>
  );
};

export default Login;
