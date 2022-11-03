import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col  bg-[#FF577F] p-4 text-white justify-between mt-6 ">
      <div className="flex flex-col p-4 justify-evenly">
        <div>
          <ul className="flex flex-row p-4 justify-evenly">
            <li>contact us: jhsdgfgvcb@gmail.com</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-center mt-2">
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
              elit ut tellus pulvinar imperdiet in viverra quam.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
