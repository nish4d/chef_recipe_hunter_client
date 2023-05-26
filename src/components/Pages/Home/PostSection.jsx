import React from "react";
import Post from "./Post";

const PostSection = ({post}) => {
  

  
  return (
    <div className="my-32">
      {/* post section */}
      <h2 className="text-center text-4xl md:text-6xl text-slate-700 font-extrabold">
        Entertaining
      </h2>
      <div className="grid md:grid-cols-4 mx-2 md:mx-12 mt-8">
        {post.map((data, i) => (
          <Post key={i} data={data}></Post>
        ))}
      </div>
    </div>
  );
};

export default PostSection;
