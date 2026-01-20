import { useState } from "react";
import { Link } from "react-router-dom";
import { DataData } from "../../../src/data/Kumpulandata";
const SearchPost = () => {
  const [keyword, setKeyword] = useState("");
  const [kategori, setKategori] = useState("All");

  /* =========================
     FILTER UTAMA (RULE FIX)
  ========================== */
  const filteredPost = DataData.filter((post) => {
    const matchJudul = keyword.trim() === "" || post.judul.toLowerCase().includes(keyword.toLowerCase());

    const matchKategori = kategori === "All" || post.kategori === kategori;

    // HARUS KEDUANYA TRUE
    return matchJudul && matchKategori;
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* INPUT SEARCH */}
      <div className="mx-6">
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-[#7400F5]"
        />
      </div>

      {/* DROPDOWN FILTER */}
      <div className="flex justify-center my-10">
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="p-3 rounded-xl border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-[#7400F5]"
        >
          <option value="All">All</option>
          <option value="Review">Review</option>
          <option value="Event">Event</option>
          <option value="Game">Game</option>
          <option value="Sponsor">Sponsor</option>
        </select>
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPost.length > 0 ? (
          filteredPost.map((post) => (
            <Link key={post.id} to={post.link} className="group">
              <div
                className="relative h-[520px] rounded-3xl overflow-hidden
                           bg-cover bg-center border border-[#7400F5]
                           transition-transform duration-300
                           group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${post.bg})` }}
              >
                <div className="absolute bottom-0 w-full bg-[#00000060] backdrop-blur-sm overflow-hidden transition-[max-height] duration-500 ease-out max-h-18 group-hover:max-h-60 group-focus-within:max-h-96">
                  <div className="p-5">
                    <h3 className="text-[#ffffff] font-bold">{post.judul}</h3>
                    <div className="max-h-18">
                      <p className="text-sm text-[#ffffff] mt-2">{post.sinopsis}</p>
                    </div>
                    <div className="">
                      <div
                        className="inline-block mt-3 text-xs px-3 py-1
                                     rounded-full bg-[#7400F5] text-[#ffffff]"
                      >
                        <p>{post.kategori}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Data yang dicari tidak ada</p>
        )}
      </div>
    </div>
  );
};

export default SearchPost;
