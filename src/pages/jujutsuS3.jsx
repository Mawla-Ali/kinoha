import Tombol from "../../components/Elements/Button/Tombol";
import ScrollLink from "../../components/Elements/kakera/ScrollLink";
import NavigationP from "../../components/Fragments/NavP";
import AkhirLanding from "../../components/Layout/Footer";
import { DataData } from "../data/Kumpulandata";
const JujutsuS3 = () => {
  const Penulis = DataData[0].penulis;
  const Gambar = DataData[0].bg;
  return (
    <>
      <ScrollLink />
      <div className="bg-[#f7f5f5]" id="a">
        <div className="relative min-h-screen lg:mx-40 ">
          <div className="flex justify-center">
            <NavigationP />
          </div>
          <div className="pt-32 flex-col justify-center border-[#dfdfdf] border-b-2 pb-4">
            <h1 className="font-bold pl-6 text-[36px]">[Anime Review] Jujutsu Kaisen Season 3</h1>
            <p className="pl-6 flex text-sm gap-x-1">
              Created by {Penulis} |<span className="text-[#c9bcbc]"> Published</span> 18 Januari 2026
            </p>
          </div>
          <div className="flex justify-center m-6">
            <img src={Gambar} alt="" className="rounded-4xl" />
          </div>
          <div className="mx-6 mb-6">
            <h3>Title : Jujutsu Kaisen Season 3</h3>
            <h3 className="mt-3">Release Date : 9 Januari 2026</h3>
          </div>
          {/* Sinopsis by MAL */}
          <div className="mx-6 text-[16px]">
            <h3 className="my-4 font-bold text-xl underline">Sinopsis</h3>
            <p className="mb-4">
              Hidden in plain sight, an age-old conflict rages on. Supernatural monsters known as Curses terrorize humanity from the shadows, and powerful humans known as Jujutsu sorcerers use mystical arts to exterminate them. When high
              school student Yuuji Itadori finds a dried-up finger of the legendary Curse Sukuna Ryoumen, he suddenly finds himself joining this bloody conflict.
            </p>
            <p className="mb-4">
              Attacked by a Curse attracted to the finger's power, Yuuji makes a reckless decision to protect himself, gaining the power to combat Curses in the process but also unwittingly unleashing the malicious Sukuna into the world
              once more. Though Yuuji can control and confine Sukuna to his own body, the Jujutsu world classifies Yuuji as a dangerous, high-level Curse who must be exterminated.
            </p>
            <p className="mb-4">
              Detained and sentenced to death, Yuuji meets Satoru Gojou—a teacher at Jujutsu High School—who explains that despite his imminent execution, there is an alternative for him. Being a rare vessel to Sukuna, if Yuuji were to die,
              then Sukuna would perish too. Therefore, if Yuuji were to consume the many other remnants of Sukuna, then Yuuji's subsequent execution would truly eradicate the malicious demon. Taking up this chance to make the world safer
              and live his life for a little longer, Yuuji enrolls in Tokyo Prefectural Jujutsu High School, jumping headfirst into a harsh and unforgiving battlefield.
            </p>
          </div>
          <div className="flex justify-center my-4">
            <Tombol variant="c" hubung="/kinoha/Posts">
              Kembali ke Posts
            </Tombol>
          </div>
        </div>
        <div className="mt-6">
          <AkhirLanding />
        </div>
      </div>
    </>
  );
};

export default JujutsuS3;
