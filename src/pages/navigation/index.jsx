import React from "react";
import "./nav.scss";

export default function Navigation({ index }) {
  const menuItems = ["Home", "Ingredient", "Serving", "Try It!"];
  return (
    <div className="nav">
      <span class="material-symbols-rounded">shopping_bag</span>
      <div className="nav-items">
        {menuItems.map(
          (item, i) =>
            i < 2 && (
              <div className="nav-item" onClick={() => index(i)}>
                {item}
              </div>
            )
        )}
      </div>
      <div
        className="nav-name"
        style={{ color: index === 2 && "var(--color-2)" }}
      >
        Garri
      </div>
      <div className="nav-items">
        {menuItems.map(
          (item, i) =>
            i >= 2 && (
              <div className="nav-item" onClick={() => index(i)}>
                {item}
              </div>
            )
        )}
      </div>
      <span class="material-symbols-rounded">person_4</span>{" "}
    </div>
  );
}
