import Tombol from "../../components/Elements/Button/Tombol";
import NavigationP from "../../components/Fragments/NavP";
import AkhirLanding from "../../components/Layout/Footer";
import { DataData } from "../data/Kumpulandata";
import ScrollLink from "../../components/Elements/kakera/ScrollLink";
const Frieren = () => {
  const Penulis = DataData[1].penulis;
  const Gambar = DataData[1].bg;
  return (
    <>
      <ScrollLink />
      <div className="bg-[#f7f5f5]" id="a">
        <div className="relative min-h-screen  mx-40">
          <div className="flex justify-center">
            <NavigationP />
          </div>
          <div className="pt-32 flex-col justify-center border-[#dfdfdf] border-b-2 pb-4">
            <h1 className="font-bold pl-6 text-[36px]">{DataData[1].judul}</h1>
            <p className="pl-6 flex text-sm gap-x-1">
              Created by {Penulis} |<span className="text-[#c9bcbc]"> Published</span> 18 Januari 2026
            </p>
          </div>
          <div className="flex justify-center m-6">
            <img src={Gambar} alt="" className="rounded-4xl" />
          </div>
          <div className="mx-6 mb-6">
            <h3>Title : {DataData[1].juleng}</h3>
            <h3 className="mt-3">Release Date : {DataData[1].rilis}</h3>
          </div>
          {/* Sinopsis by MAL */}
          <div className="mx-6 text-[16px] lg:text-xl">
            <h3 className="my-4 font-bold text-xl underline">Sinopsis</h3>
            <p className="mb-4">
              During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles,
              creating unforgettable precious memories for most of them.
            </p>
            <p className="mb-4">
              However, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her
              "usual" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.
            </p>
            <p className="mb-4">
              As the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she
              vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.
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

export default Frieren;
