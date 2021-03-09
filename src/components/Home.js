import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://www.mangoextensions.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/a/j/ajaxaddtocartsite.jpg"
          alt="add to card img"
        />
        <h1>home</h1>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://mobilemall.pk/public_html/images/product/product_1597225453Apple%20iPhone%20X.jpg"
            alt="iPhone 12 image"
          />
        </div>
        <div className="text-wrapper item">
          <span>i-Phone 12</span>
          <span>Price: $1200.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
