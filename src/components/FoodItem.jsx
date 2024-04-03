export default function FoodItem({ food, setFoodId }) {
  return (
    <div className="w-[300px] shadow-xl pb-4 rounded-xl flex flex-col">
      <img
        className="max-h-full rounded-tr-lg rounded-tl-lg "
        src={food.image}
        alt=""
      />
      <div className="mt-2">
        <p className="text-center font-bold text-lg text-teal-700">
          {food.title}
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className="text-lg rounded-full text-orange-400 font-bold hover:rounded-xl hover:bg-orange-400 hover:text-teal-600 py-2 px-3 border-none bg-teal-600 transition-all ease-linear"
        >
          View recipe
        </button>
      </div>
    </div>
  );
}
