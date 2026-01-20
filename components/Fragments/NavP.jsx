import { Link } from "react-router-dom";
import NavGP from "./NavHpP";
const NavigationP = () => {
  return (
    <nav className="fixed top-0 z-50 bg-[#ffffff] w-full h-28 border-b-2 border-[#F500ED]">
      <div className="top-0 inline-flex min-w-[1540px] w-full">
        <img src="/Img/Nav/logo-asli.png" alt="" className="md:pl-20 pl-5" />
        <div className="flex justify-center md:w-full">
          <div className="flex items-center md:-ml-64 ">
            <h1 className="font-bold md:text-5xl text-xl">
              Kib
              <span className="relative inline-block">
                o<span className="absolute md:left-1 md:right-1 md:top-0 left-0.5 right-0.5 -top-1.5 mt-3 h-0.5 md:h-1 bg-black"></span>
              </span>{" "}
              no Hana
            </h1>
          </div>
        </div>
        <div className="md:hidden">
          <NavGP />
        </div>
        <div className="relative hidden md:flex max-w-7xl w-full items-center justify-end mr-40">
          <nav className="flex gap-x-8 ">
            <Link to={`/kinoha#Home`} className="font-bold text-xl border-b-2 border-transparent duration-300 hover:border-black transition">
              Home
            </Link>
            <Link to={`/kinoha#About`} className="font-bold text-xl border-b-2 border-transparent duration-300 hover:border-black transition">
              About Us
            </Link>
            <Link to={`/kinoha/Posts#a`} className="font-bold text-xl border-b-2 border-transparent duration-300 hover:border-black transition">
              Posts
            </Link>
            <Link to={`/kinoha#Contact`} className="font-bold text-xl border-b-2 border-transparent duration-300 hover:border-black transition">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default NavigationP;
