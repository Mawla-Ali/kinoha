import AutoSlider from "../../components/Elements/kakera/AutoSlider";
import ScrollLink from "../../components/Elements/kakera/ScrollLink";
import SearchPost from "../../components/Elements/kakera/Search";
import NavigationP from "../../components/Fragments/NavP";
import AkhirLanding from "../../components/Layout/Footer";
const Postingan = () => {
  return (
    <>
      <ScrollLink />
      <div className="overflow-x-hidden relative" id="a">
        <div className="w-full">
          <NavigationP />
        </div>
        <div className="flex justify-center">
          <h1 className="pt-36 font-bold text-2xl">Welcome To Our Posts</h1>
        </div>
        <div className="flex justify-center">
          <h2 className="text-xl font-bold mt-3">Our Latest Post</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-xl p-5 w-full">
            <AutoSlider />
          </div>
        </div>
        <div className="min-h-screen">
          <SearchPost />
        </div>
        <div className="mt-8">
          <AkhirLanding />
        </div>
      </div>
    </>
  );
};

export default Postingan;
