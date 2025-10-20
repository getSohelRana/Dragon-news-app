import React from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";

const SocialLogIn = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Login with</h1>
      <div className="mt-5 space-y-3">
        <button className="btn w-full bg-base-100 border-1 border-blue-500 text-blue-500 shadow-none hover:bg-base-300 hover:shadow-md">
					<AiOutlineGoogle size={20} />
          Login with Google
        </button>
        <button className="btn w-full bg-base-100 border-1 border-gray-600 text-gray-600 shadow-none hover:bg-base-300 hover:shadow-md">
          <AiOutlineGithub size={20}></AiOutlineGithub>
					Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
