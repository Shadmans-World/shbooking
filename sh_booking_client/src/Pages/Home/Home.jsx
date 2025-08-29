import React from "react";
import Banner from "../../components/Home/Banner";
import Banner_location from "../../components/Home/Banner_location";

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <div
        className="absolute left-1/2 -translate-x-1/2 md:top-[330px] top-1/2 -translate-y-1/2 md:-translate-y-0 bg-white/60  w-[75%] md:w-max mx-auto md:bg-white rounded-md
      "
      >
        <Banner_location />
      </div>
    </div>
  );
}
