import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      {/* use loader */}
      <div
        class="w-12 h-12 rounded-full border-b-yellow-500 animate-spin absolute
        border-8 border-dashed border-red-600 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loading;
