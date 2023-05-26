import React from "react";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const CardSection = ({ chef }) => {
  //   console.log(chef);
  const { id, chefName, yearsOfExperience, numberOfRecipes, likes, picture } =
    chef;
  return (
    <div>
      <div className="card w-full bg-secondary  border">
        <LazyLoad className="mx-4">
          <img
            className="w-96 mx-auto h-96 m-4 rounded-lg object-cover"
            src={picture}
            alt="Shoes"
          />
        </LazyLoad>

        <div className="card-body font-semibold text-white text-center">
          <h2 className=" font-bold">{chefName}</h2>
          <p>Experience: {yearsOfExperience}</p>
          <p>Recipes: {numberOfRecipes}</p>
          <div className="flex items-center justify-center gap-2">
            {" "}
            <FaHeart className="text-red-600"></FaHeart> {likes}
          </div>
          <div className="card-actions mt-4">
            <Link
              to={`/chef/${id}`}
              className="btn btn-primary text-white w-full"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
