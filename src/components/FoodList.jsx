import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 justify-around gap-x-20 gap-y-16 mt-3 font-sans">
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
