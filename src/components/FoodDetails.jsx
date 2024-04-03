import ItemList from "./ItemList";
import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  let [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "33856e9ad89549f3be6514a7f79e215b";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <div className={styles.fdWord}>Food details:</div>
        <h1 className={styles.recipeName}>{food.title}</h1>

        <img className={styles.foodImage} src={food.image} alt="" />
        <div className={styles.foodDetails}>
          <span>
            <strong>🕐{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>Serves: {food.servings}👨‍👩‍👧‍👦</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥗Vegetarian" : "🥩Non-vegetarian"}{" "}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>₱ {food.pricePerServing} cost</strong>
          </span>
        </div>

        <h3>Ingredients:</h3>
        <ItemList food={food} isLoading={isLoading} />

        <div className={styles.foodInstructions}>
          <h2 className={styles.ciWord}>Cooking instructions:</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
