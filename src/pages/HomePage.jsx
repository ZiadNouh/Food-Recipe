import React, { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";

const HomePage = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div>
        <p className="lg:text-4xl text-xl text-center text-gray-500 font-extrabold">
          Loading data please wait...
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem item={item} key={index} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            NOthing to show. Please search somthing
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
