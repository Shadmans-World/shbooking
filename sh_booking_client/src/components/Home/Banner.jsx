import React from "react";

export default function Banner() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div
      className="hero h-[400px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/Q7XCJDmn/hotel-banner-1.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content hidden md:block text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
    </div>
  );
}
