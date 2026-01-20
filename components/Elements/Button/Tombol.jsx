import { Link } from "react-router-dom";

const styles = {
  ab: "hover:ring-sky-700 hover:bg-sky-200",
  b: "hover:ring-sky-700 hover:bg-[#1446DB]",
  c: "hover:bg-[#F500ED75] transition-all duration-300 hover:text-[#ffffff] hover:drop-shadow-2xl",
};
const jenis = {
  p: "bg-[##ffffff]",
  b: "bg-[#0284C7] text-[#ffffff]",
  a: "bg-[#ffffff]",
};
const Tombol = (props) => {
  const { children, hubung, variant, jen, type, onClick } = props;
  return (
    <div className="">
      <div className={`${jenis[jen]} ring-1 ${styles[variant]} ring-[#F500ED50] border md:border-hidden max-w-2xl w-full drop-shadow-xl p-4 rounded max-h-xl h-full flex justify-center`}>
        <Link to={hubung} className="">
          <button className={`font-bold `} type={type} onClick={onClick}>
            {children}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tombol;
