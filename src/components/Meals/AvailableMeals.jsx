//import { useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const DUMMY_MEALS = [
  {
    id: "m11",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m21",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m31",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m41",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m1",
    name: "Grilled Chicken Salad",
    description: "A delicious salad with grilled chicken and fresh vegetables.",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich meat sauce.",
    price: 15.49,
  },
  {
    id: "m3",
    name: "Vegetable Stir-Fry",
    description: "Assorted vegetables stir-fried in a savory sauce.",
    price: 10.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Mushroom Risotto",
    description: "Creamy risotto cooked with mushrooms and parmesan.",
    price: 14.99,
  },
  {
    id: "m6",
    name: "Grilled Salmon",
    description: "Freshly grilled salmon served with lemon and herbs.",
    price: 20.99,
  },
  {
    id: "m7",
    name: "Cheeseburger Deluxe",
    description:
      "Juicy beef patty with cheese, lettuce, tomato, and special sauce.",
    price: 9.99,
  },
  {
    id: "m8",
    name: "Margherita Pizza",
    description: "Traditional pizza with tomato, mozzarella, and basil.",
    price: 12.49,
  },
  {
    id: "m9",
    name: "Veggie Wrap",
    description: "A wrap filled with fresh veggies and hummus.",
    price: 8.99,
  },
  {
    id: "m10",
    name: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a molten center.",
    price: 6.99,
  },
];

function AvailableMeals() {
  //const url ="https://the-food-order-5a199-default-rtdb.firebaseio.com/Meals";
  //const [meals, setMeals] = useState([]);
  // useEffect(() => {
  //   const fetchMealsMenu = async () => {
  //     const response = await fetch(url);
  //     const responseData = await response.json();
  //     const loadedMeals = [];
  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
  //     }
  //     setMeals(loadedMeals);
  //   };
  //   fetchMealsMenu();
  //   //react-hooks/exhaustive-deps
  // }, []);
  


  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  // const loadingmessage=(<h2 style={{textAlign:"center"}}>Loading...</h2>);
  return (
    <section className={classes.DUMMY_MEALS}>
      <Card>
        {DUMMY_MEALS.length===0  && <LoadingSpinner/>}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
