import { Link } from "react-router-dom";

const AkhirLanding = () => {
  return (
    <div className="relative">
      <div className="bg-[#F500ED] h-4/5  w-full flex-col">
        <div className="flex justify-center py-2">
          <div className="flex gap-x-2 text-[15px]">
            <Link to="/kinoha#Home" className="hover:text-[#ffffff]">
              Home
            </Link>
            <span>|</span>
            <Link to="/kinoha#About" className="hover:text-[#ffffff]">
              About Us
            </Link>
            <span>|</span>
            <Link to="/kinoha/Posts#a" className="hover:text-[#ffffff]">
              Posts
            </Link>
            <span>|</span>
            <Link to="/kinoha#Contact" className="hover:text-[#ffffff]">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-center py-2">
          <div className="flex gap-x-6">
            <a href="#" className="hover:text-[#ffffff]">
              <img src="/Img/Nav/fb.svg" alt="" className="hover:invert-100" />
            </a>
            <a href="#About" className="hover:text-[#ffffff]">
              <img src="/Img/Nav/yt.svg" alt="" className="hover:invert-100" />
            </a>
            <a href="#Post" className="hover:text-[#ffffff]">
              <img src="/Img/Nav/ig.svg" alt="" className="hover:invert-100" />
            </a>
            <a href="#Contact" className="hover:text-[#ffffff]">
              <img src="/Img/Nav/tk.svg" alt="" className="hover:invert-100" />
            </a>
          </div>
        </div>
        <div className="flex justify-center text-[12px] pb-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://mawla-ali.github.io/argonaut/" className="hover:invert">
              Argonaut
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhirLanding;
