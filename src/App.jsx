import { useState } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div>
      <NavBar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList
            foodData={foodData}
            setFoodData={setFoodData}
            setFoodId={setFoodId}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
