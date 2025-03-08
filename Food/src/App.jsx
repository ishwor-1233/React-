import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation/nav";
import Hero from "./Components/FoodCart/Hero";

export const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState([]); // Full data from backend
  const [filteredData, setFilteredData] = useState([]); // Filtered data
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilteredData(json); // Initially display all data
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  // Search function
  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase();
    let filtered = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter((food) => food.category === selectedCategory);
    }

    setFilteredData(filtered);
  };

  // Filter by Category function
  const filterByCategory = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredData(data);
    } else {
      const categoryItems = data.filter((food) => food.category === category);

      // Ensure at least two items per category
      if (categoryItems.length < 2) {
        const additionalItems = data
          .filter((food) => food.category !== category)
          .slice(0, 2 - categoryItems.length);
        setFilteredData([...categoryItems, ...additionalItems]);
      } else {
        setFilteredData(categoryItems);
      }
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading.....</div>;

  return (
    <div>
      <Navigation search={searchFood} filterByCategory={filterByCategory} />
      <Hero data={filteredData} />
    </div>
  );
};

export default App;
