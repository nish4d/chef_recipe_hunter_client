import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { FaHeart } from "react-icons/fa";

const Chef = () => {
  const chefData = useLoaderData();
  const {id,chefName,yearsOfExperience,numberOfRecipes,likes, picture,description,recipes,bg_img} = chefData;
  // console.log(chefData.recipes)
  return (
    <div>
      {/* chef Banner for per person */}
    <div className="w-full">
      <div className="hero py-32 bg-slate-900 bg-opacity-70 bg-blend-overlay" style={{backgroundImage: `url(${bg_img})`}}>
      
        <div className="hero-content text-center">
          <div className="max-w-md text-slate-200 space-y-2">
            
            <img className="rounded-full w-52 h-52 object-cover mx-auto mb-6" src={picture} alt="" />
            
            <h1 className="text-5xl font-bold">{chefName}</h1>
            <h1 className=" font-bold">{description}</h1>
            <div className=" font-bold flex items-center gap-2 justify-center"> <FaHeart className="text-red-600"></FaHeart> {likes}</div>
            <h1 className=" font-bold"> Recipes: {numberOfRecipes}</h1>
            <p className="font-bold">Experience: {yearsOfExperience} </p>
          </div>
        </div>
        </div>
      </div>
      <div>
      {
        recipes.map((data,index)=> <RecipeCard
        key={index}
        data={data}
        ></RecipeCard> )
      }
      </div>
    </div>
  );
};

export default Chef;
