import { Link } from "react-router-dom";
import fb from "../../public/Img/Nav/fb.svg";
import ig from "../../public/Img/Nav/ig.svg";
import tk from "../../public/Img/Nav/tk.svg";
import yt from "../../public/Img/Nav/yt.svg";
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
            <a href="https://www.facebook.com/profile.php?id=61550212737456&mibextid=ZbWKwL" className="hover:text-[#ffffff]">
              <img src={fb} alt="" className="hover:invert-100" />
            </a>
            <a href="https://www.youtube.com/@KinohaMagelang" className="hover:text-[#ffffff]">
              <img src={yt} alt="" className="hover:invert-100" />
            </a>
            <a href="https://www.instagram.com/kinoha_magelang/" className="hover:text-[#ffffff]">
              <img src={ig} alt="" className="hover:invert-100" />
            </a>
            <a
              href="https://www.tiktok.com/@kibonohana?_r=1&_d=e2jl25a2f4b8i9&sec_uid=MS4wLjABAAAAW2iRq-bxOi4a5CabgV-l6wDCAo_sopdZLuy7Bb5S76hR3BWzELP6pfK3gL2pTP07&share_author_id=6998917975398941697&sharer_language=id&source=h5_t&u_code=dk8ci9hd540ike&timestamp=1691932680&user_id=6998917975398941697&sec_user_id=MS4wLjABAAAAW2iRq-bxOi4a5CabgV-l6wDCAo_sopdZLuy7Bb5S76hR3BWzELP6pfK3gL2pTP07&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7265888447327160069&share_link_id=f652fc1a-f41d-4446-b324-8242963800cf&share_app_id=1180&ugbiz_name=Account&ug_btm=b8727%2Cb0229&social_share_type=5"
              className="hover:text-[#ffffff]"
            >
              <img src={tk} alt="" className="hover:invert-100" />
            </a>
          </div>
        </div>
        <div className="flex justify-center text-[12px] pb-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://mawla-ali.github.io/argonaut/" className="hover:text-[#ffffff]">
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
