import { Link } from "react-router-dom";
import Countdown from "../Elements/kakera/CountDown";
import Tombol from "../Elements/Button/Tombol";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollLink from "../Elements/kakera/ScrollLink";
import { NewPost } from "../../src/data/Newpost";
import { DataData } from "../../src/data/Kumpulandata";
const Tentang = () => {
  return (
    <>
      <ScrollLink />
      <div className="relative min-h-screen bg-[#f7f5f5] pb-12" id="About">
        <div className="grid grid-cols-1">
          <div className="flex justify-center">
            <div className="pt-44">
              <h1 className="text-2xl font-bold">Apa Itu Kibou No Hana ?</h1>
            </div>
          </div>
          {/* Deskripsi Singkat Start */}
          <div className="">
            <p className="px-16 pt-10 text-center text-[18px]">
              Kibou no hana adalah komunitas yang menyukai anime, cosplay, serta terkadang berkesempatan menjadi penyelenggara sebuah event. Komunitas ini memfasilitasi kalian yang ingin mendalami tentang jejepangan untuk daerah Kota
              Magelang dan sekitarnya
            </p>
          </div>
          {/* Deskripsi Singkat End */}
          <div className="flex justify-center">
            <h1 className="pt-28 font-bold text-2xl mb-18">Our Latest Post</h1>
          </div>
          {/* Keterangan New Post Start */}
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {NewPost.map((N) => (
              <div className="mx-6">
                <Link key={N.id} to={N.link} className="group">
                  <div
                    className="relative h-[520px] rounded-3xl overflow-hidden
                           bg-cover bg-center border border-[#7400F5]
                           transition-transform duration-300
                           group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${N.bg})` }}
                  >
                    <div className="absolute bottom-0 w-full bg-[#00000060] backdrop-blur-sm overflow-hidden transition-[max-height] duration-500 ease-out lg:max-h-18 group-hover:max-h-60 group-focus-within:max-h-96">
                      <div className="p-5">
                        <h3 className="text-[#ffffff] font-bold">{N.judul}</h3>
                        <p className="text-sm text-[#ffffff] mt-2">{N.sinopsis}</p>
                        <span
                          className="inline-block mt-3 text-xs px-3 py-1
                                     rounded-full bg-[#7400F5] text-[#ffffff]"
                        >
                          {N.kategori}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-28 ">
            <Tombol hubung="/kinoha/Posts" variant="c">
              See More Post !
            </Tombol>
          </div>
          {/* Keterangan New Post End */}
          {/* Keterangan Event Start */}
          <div className="relative min-h-screen">
            <div className="flex justify-center">
              <h2 className="font-bold pt-28 text-3xl mb-8">Event Information</h2>
            </div>
            <div className="relative flex-col ">
              <div className="flex justify-center mb-7">
                <h2 className="text-2xl font-bold"> New Event in Coming </h2>
              </div>
              <div className="flex justify-center my-10 px-4">
                <a href="https://www.instagram.com/p/DSl8HMXj0lt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="block group w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                  <div
                    className="relative rounded-3xl bg-contain bg-no-repeat bg-center border border-[#7400F5] overflow-hidden transition-transform duration-300 ease-out transform-gpu group-hover:scale-[1.03] md:group-hover:-translate-y-4 h-[520px]"
                    style={{
                      backgroundImage: `url(${DataData[4].bg})`,
                    }}
                  >
                    {/* CONTENT */}
                    <div className="absolute bottom-0 w-full bg-[#00000060] backdrop-blur-sm overflow-hidden transition-[max-height] duration-500 ease-out lg:max-h-18 group-hover:max-h-60 group-focus-within:max-h-96">
                      <div className="p-5">
                        <h3 className="text-[#ffffff] font-bold mb-6">{DataData[4].judul}</h3>
                        <p className="text-sm text-[#ffffff] ">{DataData[4].sinopsis}</p>
                        <span
                          className="inline-block mt-3 text-xs px-3 py-1
                                     rounded-full bg-[#7400F5] text-[#ffffff]"
                        >
                          {DataData[4].kategori}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* Countdown Start */}
              <div className="relative flex justify-center">
                <Countdown targetDate="2026-01-15T15:00:00" />
              </div>
              {/* Countdown End */}
            </div>
          </div>
          {/* Keterangan Event End */}
        </div>
      </div>
    </>
  );
};

export default Tentang;
