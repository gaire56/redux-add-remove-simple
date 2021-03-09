import React from 'react';

const Header = (props) => {
  console.log(props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="card-count">{props.data.length}</span>
        <img
          src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg"
          alt="add to card img"
        />
      </div>
    </div>
  );
};

export default Header;
