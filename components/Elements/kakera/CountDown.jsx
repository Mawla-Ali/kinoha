import { useEffect, useState } from "react";
const Countdown = ({ targetDate }) => {
  const hitungsisawaktu = () => {
    const perbedaan = new Date(targetDate) - new Date();
    if (perbedaan <= 0) {
      return null;
    }
    return {
      hari: Math.floor(perbedaan / (1000 * 60 * 60 * 24)),
      jam: Math.floor((perbedaan / (1000 * 60 * 60)) % 24),
      menit: Math.floor((perbedaan / (1000 * 60)) % 60),
      detik: Math.floor((perbedaan / 1000) % 60),
    };
  };
  const [sisawaktu, setSisawaktu] = useState(hitungsisawaktu);
  useEffect(() => {
    const timer = setInterval(() => {
      setSisawaktu(hitungsisawaktu);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  if (!sisawaktu) {
    return (
      <div className="flex flex-col items-center gap-4 ">
        <div className="flex gap-4  text-center">
          <div className="bg-[#000000] rounded-xl px-4 text-white">
            <p className="text-2xl font-bold">00</p>
            <span className="text-sm uppercase">Hari</span>
          </div>
          <div className="bg-[#000000] rounded-xl px-4 text-white">
            <p className="text-2xl font-bold">00</p>
            <span className="text-sm uppercase">Jam</span>
          </div>
          <div className="bg-[#000000] rounded-xl px-4 text-white">
            <p className="text-2xl font-bold">00</p>
            <span className="text-sm uppercase">Menit</span>
          </div>
          <div className="bg-[#000000] rounded-xl px-4 text-white">
            <p className="text-2xl font-bold">00</p>
            <span className="text-sm uppercase">Detik</span>
          </div>
        </div>
        <p className="=text-xl font-bold text-[#F500ED] mt-10 lg:text-6xl">Event Dimulai !</p>
      </div>
    );
  }
  return (
    <div className="flex gap-4 text-center">
      {Object.entries(sisawaktu).map(([key, value]) => (
        <div className="bg-[#000000] rounded-xl px-4 text-white" key={key}>
          <p className="text-2xl font-bold">{value}</p>
          <span className="text-sm uppercase">{key}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
