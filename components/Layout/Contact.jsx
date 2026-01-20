import { useRef, useState } from "react";
import ScrollLink from "../Elements/kakera/ScrollLink";

const Kontak = () => {
  const formRef = useRef(null);
  return (
    <>
      <ScrollLink />
      <div className="relative min-h-screen bg-[#f7f5f5]" id="Contact">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold pt-44">Let's Collaboration</h1>
        </div>
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdeoXpxAk7LkhbyDc7vCcNWz4mojnZj0LvtUt8JuN1EbtysxA/formResponse?embedded=true"
          className="space-y-4 flex-col mt-16 px-12 lg:px-64"
          method="POST"
          target="hidden_iframe"
          ref={formRef}
          onSubmit={() => {
            setTimeout(() => {
              formRef.current.reset();
            }, 500);
          }}
        >
          <h3 className="font-bold">
            Nama <span className="text-[#d71515]">*</span>
          </h3>
          <input type="text" placeholder="Nama" name="entry.1994161187" required className="w-full text-[#afafaf] rounded-xl border border-[#D1D5DB] p-3 focus:outline-none focus:ring-2 focus:ring-[#7400F5]" />
          <h3 className="font-bold">
            Email <span className="text-[#d71515]">*</span>
          </h3>
          <input type="text" placeholder="example@gmail.com" name="entry.186368839" required className="w-full text-[#afafaf] rounded-xl border border-[#D1D5DB] p-3 focus:outline-none focus:ring-2 focus:ring-[#7400F5]" />
          <h3 className="font-bold">
            Pesan <span className="text-[#d71515]">*</span>
          </h3>
          <textarea type="text" placeholder="Pesan" name="entry.1079373152" required rows="4" className="w-full rounded-xl text-[#afafaf] border border-[#D1D5DB] p-3 focus:outline-none focus:ring-2 focus:ring-[#7400F5]" />
          <div className="px-12 mt-10">
            <button type="submit" className="w-full rounded-xl bg-[#7400F5] mb-14 py-3 text-white font-semibold hover:bg-[#5e00c5] transition">
              Kirim Pesan
            </button>
          </div>
          <iframe name="hidden_iframe" className="hidden" title="hidden_iframe" />
        </form>
      </div>
    </>
  );
};

export default Kontak;
