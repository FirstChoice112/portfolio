import React from "react";

const Footer = () => {
  return (
    <footer className="footer z-10 border border-[#33353F]  border-l-transparent border-r-transparent">
      <div className="container p-12 flex justify-between">
        <div className="bg-gradient-to-r from-purple-500 to-green-400 text-white font-bold text-xl rounded-full w-10 h-10 flex items-center justify-center">
          JS
        </div>

        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
