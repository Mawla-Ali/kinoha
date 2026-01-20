import Tombol from "../../components/Elements/Button/Tombol";
import NavigationP from "../../components/Fragments/NavP";
import AkhirLanding from "../../components/Layout/Footer";
import { DataData } from "../data/Kumpulandata";
import ScrollLink from "../../components/Elements/kakera/ScrollLink";
const Rezero = () => {
  const Penulis = DataData[2].penulis;
  const Gambar = DataData[2].bg;
  return (
    <>
      <ScrollLink />
      <div className="bg-[#f7f5f5]" id="a">
        <div className="relative min-h-screen lg:mx-40 ">
          <div className="flex justify-center">
            <NavigationP />
          </div>
          <div className="pt-32 flex-col justify-center border-[#dfdfdf] border-b-2 pb-4">
            <h1 className="font-bold pl-6 text-[36px]">{DataData[2].judul}</h1>
            <p className="pl-6 flex text-sm gap-x-1">
              Created by {Penulis} |<span className="text-[#c9bcbc]"> Published</span> 18 Januari 2026
            </p>
          </div>
          <div className="flex justify-center m-6">
            <img src={`${import.meta.env.BASE_URL}${Gambar}`} alt="" className="rounded-4xl" />
          </div>
          <div className="mx-6 mb-6">
            <h3>Title : {DataData[2].juleng}</h3>
            <h3 className="mt-3">Release Date : {DataData[2].rilis}</h3>
          </div>
          {/* Sinopsis by MAL */}
          <div className="mx-6 text-[16px]">
            <h3 className="my-4 font-bold text-xl underline">Sinopsis</h3>
            <p className="mb-4">
              While returning home from the convenience store, Subaru Natsuki suddenly finds himself standing in an unfamiliar city, surrounded by unfamiliar people speaking unfamiliar words. Subaru quickly connects the dots and realizes
              that he's been transported to another world. After being chased off by a shop owner for being penniless, Subaru finds himself surrounded by a group of thugs.
            </p>
            <p className="mb-4">
              Just when Subaru thinks all hope is lost, a mysterious girl named Satella comes to his rescue. She's after a thief who Subaru had previously seen in town. After Satella scares off the thugs, Subaru decides to repay her by
              helping her look for the thief.
            </p>
            <p className="mb-4">
              Through a series of events, the pair finds themselves at a cellar known for housing stolen goods. Shortly after entering the house, Subaru and Satella are ambushed by a dark figure and neither survives the encounter. Subaru
              opens his eyes to find that he has gone back in time to earlier that day, beginning a confusing series of loops in which he relives past occurrences.
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

export default Rezero;
