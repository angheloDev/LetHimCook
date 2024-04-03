import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "33856e9ad89549f3be6514a7f79e215b";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  //Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className="flex justify-center mt-28 w-full">
      <input
        className="w-auto outline-none border-b-[1px] border-b-slate-300 h-15 text-xl px-3 py-2 rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="find food..."
      />
      <div></div>
    </div>
  );
}
