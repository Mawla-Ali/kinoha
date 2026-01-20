import { useState } from "react";
import { Link } from "react-router-dom";

const NavG = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOMBOL */}
      <button onClick={() => setOpen(!open)} className=" -mt-1 block md:hidden right-0 z-50 fixed">
        <img src="/Img/Nav/Menu.png" alt="" className="ml-10" />
      </button>
      {/* OVERLAY */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-[#00000066] z-40" />}
      {/* NAVBAR HP */}
      <nav
        id="navhp"
        className={`fixed top-0 right-0 h-screen w-64 z-50
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Navbar HP */}
        <div className="fixed right-0 top-0 h-12/12 w-60 bg-white z-50 rounded-l-2xl shadow-xl">
          <div className="grid p-6 gap-6">
            <Link to={`/kinoha#Home`} onClick={() => setOpen(false)} className="font-bold text-xl border-b-2 border-transparent hover:border-[#000000] transition duration-300">
              Home
            </Link>
            <Link to={`/kinoha#About`} onClick={() => setOpen(false)} className="font-bold text-xl border-b-2 border-transparent hover:border-[#000000] transition duration-300">
              About Us
            </Link>
            <Link to={`/kinoha/Posts#a`} onClick={() => setOpen(false)} className="font-bold text-xl border-b-2 border-transparent hover:border-[#000000] transition duration-300">
              Posts
            </Link>
            <Link to={`/kinoha#Contact`} onClick={() => setOpen(false)} className="font-bold text-xl border-b-2 border-transparent hover:border-[#000000] transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavG;
