import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* ===============================
   DATA POST / CARD
================================ */
const NewPost = [
  {
    id: 1,
    link: "/kinoha/post/jujutsu-kaisen",
    bg: "/Img/About/Post/Jujutsus3.png",
    sinopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori....",
    judul: "[ANIME REVIEW] Jujutsu Kaisen ",
    Kategori: "Review",
  },
  {
    id: 2,
    link: "/kinoha/post/Frieren",
    bg: "/Img/About/Post/Frieren1.png",
    sinopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori....",
    judul: "[ANIME REVIEW] Sousou no Frieren",
    Kategori: "Review",
  },
  {
    id: 3,
    link: "/kinoha/post/Re:zero",
    bg: "/Img/About/Post/Rezero1.jpg",
    sinopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori....",
    judul: "[ANIME REVIEW] Re: Zero Kara Hajimeru Isekai Seikatsu  ",
    Kategori: "Review",
  },
  {
    id: 4,
    link: "/kinoha/post/Full-Metal",
    bg: "/Img/About/Post/FMA1.png",
    sinopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori....",
    judul: "[ANIME REVIEW] Full Metal Alchemist: Brotherhood",
    Kategori: "Review",
  },
];

/* ===============================
   COMPONENT AUTO SLIDER
================================ */
const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);

  /* ===============================
     AUTO SLIDE TIAP 5 DETIK
  ================================ */
  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === NewPost.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [pause]);

  return (
    <div className="w-full overflow-hidden" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
      {/* CONTAINER SLIDER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {/* CARD */}
        {NewPost.map((post) => (
          <Link to={post.link} key={post.id} className="min-w-full flex justify-center">
            <div>
              <div
                className="w-[320px] h-[420px] md:w-[380px] md:h-[480px]
                         rounded-3xl bg-cover bg-center
                         drop-shadow-xl border border-[#7400F5]"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}${post.bg})`,
                }}
              >
                {/* OVERLAY */}
                <div
                  className="h-full w-full bg-[#00000050] rounded-3xl
                              flex items-end p-6"
                >
                  <h3 className="text-white font-bold text-xl">{post.judul}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* DOT INDICATOR */}
      <div className="flex justify-center gap-3 mt-6">
        {NewPost.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300
              ${index === currentIndex ? "bg-[#7400F5] scale-110" : "bg-[#afafaf]"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
