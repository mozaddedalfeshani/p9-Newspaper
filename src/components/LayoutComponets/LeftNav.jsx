import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftNav() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((promise) => {
        return promise.json();
      })
      .then((result) => {
        setCategory(result.data.news_category);
      });
  }, []);

  // category_id: "03";
  // category_name: "International News";
  return (
    <div className="px-3">
      <p>All Category {category.length}</p>

      <div className="flex flex-col gap-2 mt-4">
        {category.map((item) => {
          return (
            <NavLink
              to={`category/${item.category_id}`}
              className="btn"
              key={item.category_id}>
              {item.category_name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
