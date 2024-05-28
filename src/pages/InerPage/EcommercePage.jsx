import React from "react";

const EcommercePage = ({ isOpen }) => {
  return (
    <div className={`page ${isOpen ? "open" : ""}`}>
      <h1>Ecommerce Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi
        fugit saepe, sunt quod debitis quasi rerum placeat laudantium,
        repudiandae corrupti cupiditate voluptate sequi laborum dolores
        voluptatibus quisquam inventore recusandae?
      </p>
    </div>
  );
};

export default EcommercePage;
