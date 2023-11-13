import React from "react";

const HomeBanner = () => {
  return (
    <div className="my-10 bg-[url('https://i.ibb.co/19rwYPt/image.png')] py-56  ">
      <div className="flex flex-col max-w-3xl mx-auto justify-center items-center">
      <div>
        <h3 className="text-6xl py-4 text-white text-center">We are proud to itroduce our Video Blog.</h3>
      </div>
      <div>
        <p className="text-xl py-4 text-white text-center">Majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage.</p>
      </div>
      <div>
          <button className="btn text-center my-4">Learn More</button>
      </div>
      </div>
    </div>
  );
};

export default HomeBanner;
