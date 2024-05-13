import React from "react";
import "./nav.scss";

export default function Navigation() {
  const menuItems = ["Home", "Ingredient", "Serving", "Try It!"];
  return (
    <div className="nav">
      <span class="material-symbols-rounded">shopping_bag</span>
      <div className="nav-items">
        {menuItems.map(
          (item, i) => i < 2 && <div className="nav-item">{item}</div>
        )}
      </div>
      <div className="nav-name">Garri</div>
      <div className="nav-items">
        {menuItems.map(
          (item, i) => i >= 2 && <div className="nav-item">{item}</div>
        )}
      </div>
      <span class="material-symbols-rounded">person_4</span>{" "}
    </div>
  );
}
