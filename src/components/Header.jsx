import React from "react";
import siteLogo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-13">
        <img src={siteLogo} alt="site-logo" />
        <h1 className="text-[18px] mt-3 text-accent">Journalism Without Fear or Favor</h1>
        <p className="mt-4 text-accent font-semibold">{format(new Date() , 'EEEE, MMMM dd, yyyy')}</p>
      </div>
    </div>
  );
};

export default Header;
