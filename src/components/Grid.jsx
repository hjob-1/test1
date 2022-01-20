import React from "react";
import "./grid.css";
const Grid = () => {
  return (
    <div className="grid">
      <div className="img--wrapper img--wrapper1">
        <img src="/images/image-gallery-milkbottles.jpg" alt="" />
      </div>
      <div className="img--wrapper img--wrapper2">
        <img src="/images/image-gallery-orange copy.jpg" alt="" />
      </div>
      <div className="img--wrapper img--wrapper3">
        <img src="/images/image-gallery-cone.jpg" alt="" />
      </div>
      <div className="img--wrapper img--wrapper4">
        <img src="/images/image-gallery-sugar-cubes copy.jpg" alt="" />
      </div>
    </div>
  );
};

export default Grid;
