import React from "react";
import sidePic from '../../../assets/category.png'

const TeandingSection = () => {
  return (
    <div className="md:flex justify-between items-center md:my-20 mx-4 md:mx-64">
      <div className="text-center md:text-left md:w-[50%]">
        <p className="font-semibold text-primary">TRENDING</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-700">Standing Rib Roast</h2>
        <p className="mt-4 ">Preheat oven to 325°. In a small bowl, mix the first 5 ingredients. Place roast in a roasting pan, fat side up; rub with seasoning mixture.Roast 2-1/4 to 2-3/4 hours or until meat reaches desired doneness (for medium-rare, a thermometer should read 135°; medium, 140°; medium-well, 145°). Remove roast from oven; tent with foil. Let stand 15 minutes before carving.</p>
        <p className="mt-4 font-semibold text-xl w-3/4 mx-auto md:mx-0 text-primary">To separate the fat from the drippings with ease, try this tool from OXO ($14).</p>
      </div>
      <div>
        <img src={sidePic} alt="" />
      </div>
    </div>
  );
};

export default TeandingSection;
