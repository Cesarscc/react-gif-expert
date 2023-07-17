import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (
      categories.includes(newCategory) ||
      categories.find((category) => {
        return category.toLowerCase() === newCategory.toLowerCase();
      })
    ) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(e) => {
          onAddCategory(e);
        }}
      />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

export default GifExpertApp;
