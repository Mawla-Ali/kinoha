import Tombol from "../../components/Elements/Button/Tombol";
import NavigationP from "../../components/Fragments/NavP";
import AkhirLanding from "../../components/Layout/Footer";
import { DataData } from "../data/Kumpulandata";
import ScrollLink from "../../components/Elements/kakera/ScrollLink";
const Fmba = () => {
  const Penulis = DataData[3].penulis;
  const Gambar = DataData[3].bg;
  return (
    <>
      <ScrollLink />
      <div className="bg-[#f7f5f5]" id="a">
        <div className="relative min-h-screen  mx-40">
          <div className="flex justify-center">
            <NavigationP />
          </div>
          <div className="pt-32 flex-col justify-center border-[#dfdfdf] border-b-2 pb-4">
            <h1 className="font-bold pl-6 text-[36px]">{DataData[3].judul}</h1>
            <p className="pl-6 flex text-sm gap-x-1">
              Created by {Penulis} |<span className="text-[#c9bcbc]"> Published</span> 18 Januari 2026
            </p>
          </div>
          <div className="flex justify-center m-6">
            <img src={`${import.meta.env.BASE_URL}{Gambar}`} alt="" className="rounded-4xl" />
          </div>
          <div className="mx-6 mb-6">
            <h3>Title : {DataData[3].juleng}</h3>
            <h3 className="mt-3">Release Date : {DataData[3].rilis}</h3>
          </div>
          {/* Sinopsis by MAL */}
          <div className="mx-6 text-[16px] lg:text-xl">
            <h3 className="my-4 font-bold text-xl underline">Sinopsis</h3>
            <p className="mb-4">
              After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to
              bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by
              binding it to a hulking suit of armor.
            </p>
            <p className="mb-4">
              The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal
              used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws
              of Equivalent Exchange.
            </p>
            <p className="mb-4">As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.</p>
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

export default Fmba;
