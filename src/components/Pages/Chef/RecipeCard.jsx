import React, { useState } from "react";
import { FaArrowRight, FaBookmark, FaHeart, FaRegHeart } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ data }) => {
  const [dis, setDis] = useState(true) 
  const { img, recipeName, cookingMethod, ingredients, rating } = data;

  const handleDis = () => {
    setDis(false);
    toast.success('🍃 recipe added your favorite', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <div className="my-12">
      {/* chef recipe card for per recipe */}
      <div className="flex border  p-4 mx-12 shadow-xl">
        <figure className="flex items-center w-[30%] mx-4">
          <img
            className="h-[100%] object-cover rounded-md w-full"
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="w-[70%] mx-4 flex flex-col justify-between">
          <h2 className="font-extrabold text-xl ">{recipeName}</h2>
          <div>
            <p className="font-semibold">CookingMethod :</p>
            <p>{cookingMethod}</p>
          </div>
          <div>
            <p className="font-semibold">Ingredients :</p>
            <div>
            {ingredients.slice(0, 5).map((data, index) => {
              return (
                <div className="flex items-center">
                  <div className="flex items-center">
                    <FaArrowRight className="mx-2"></FaArrowRight>
                  </div>
                  <div>{data}</div>
                </div>
              );
            })}
            </div>
          </div>
          <div className="flex justify-between items-center m-2 p-2 border border-primary rounded-md">
            <div className="flex gap-2">
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              <p className="font-semibold">{rating}</p>
            </div>
            <div className="flex items-center gap-2 ">
              <div>
                <Link>
                  <button onClick={handleDis} disabled={dis ? false : true}> {!dis ? <FaHeart className="text-red-600 text-2xl"></FaHeart> : <FaRegHeart className="text-red-600 text-2xl"></FaRegHeart> } </button>
                </Link>
              </div>
              <p className="font-semibold text-md">Favorite</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeCard;
