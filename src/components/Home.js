import React from 'react';

const Home = (props) => {
  console.log('props', props);
  return (
    <div>
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
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: 'iPhone 12' })
            }
          >
            Add to Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
