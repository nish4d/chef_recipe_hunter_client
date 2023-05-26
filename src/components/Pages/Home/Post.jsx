import React from "react";
import { FaComment, FaHeart, FaRegComment } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  const { title, image_url, date, like_count, comment_count } = data;
  return (
    <div className="border p-4 border-slate-300 m-2 rounded-md">
      {/* post card */}
      <div className="md:w-full md:h-96 flex flex-col justify-between">
        <div>
          <LazyLoad>
            <img
              className="w-full h-52 object-cover rounded-md"
              src={image_url}
              alt=""
            />
          </LazyLoad>
          <div className="mx-4 font-semibold my-4 ">
            <div className="flex justify-between">
              <h2>{date}</h2>
              <p className="flex items-center gap-2">
                {" "}
                <FaHeart className="text-red-500"></FaHeart> {like_count}
              </p>
            </div>
            <p className="mt-3 text-xl">{title}</p>
          </div>
        </div>
        <div className="flex justify-between mx-3">
          <Link>
            <button className="py-2 px-4 bg-primary rounded-sm text-white ">
              Read More
            </button>
          </Link>
          <p className="flex items-center gap-2">
            <FaComment className="text-slate-700"></FaComment>
            {comment_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
