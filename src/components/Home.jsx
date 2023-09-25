import React from "react";
import CreateUser from "./CreateUser";

const Home = () => {
  return (
    <div className="mt-8 text-center">
      <h1 className="mb-4 text-xl font-semibold md:text-3xl">
        The best pizza.
      </h1>
      <p className="mb-8 text-xl text-yellow-500 md:text-3xl">
        Straight out of the oven, straight to you.
      </p>
      <CreateUser />
    </div>
  );
};

export default Home;
