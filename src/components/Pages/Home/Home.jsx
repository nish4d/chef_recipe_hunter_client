import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";
import CardSection from "./CardSection";
import PostSection from "./PostSection";
import TeandingSection from "./TeandingSection";
import Loading from "../shared/Loading/Loading";

const Home = () => {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  // const data = useLoaderData();
  // console.log(data);

  // home data
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-ten-virid.vercel.app/chef/")
      .then((res) => res.json())
      .then((dat) => {
        setData(dat);
        setLoading(true);
      });
  }, []);

  // blog data
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-ten-virid.vercel.app/post")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="">
      {/* hero section */}
      <Hero></Hero>
      {/* card section */}
      {loading ? (
        <div className="grid md:grid-cols-3 gap-2 md:gap-20 mx-4 md:mx-12 py-12">
          {/* added chef card */}
          {data.map((chef) => (
            <CardSection key={chef.id} chef={chef}></CardSection>
          ))}
        </div>
      ) : (
        <Loading></Loading>
      )}
      {/* treading section */}
      <TeandingSection></TeandingSection>
      {/* post loading and post section */}
      {loading ? <PostSection post={post}></PostSection> : <Loading></Loading>}
    </div>
  );
};

export default Home;
