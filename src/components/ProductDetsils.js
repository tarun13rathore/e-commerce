import React from "react";
import { Button } from "react-bootstrap";

const ProductDetsils = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-5">
            <img
              style={{
                width: "400px",
                height: "400px",
              }}
              src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="product_img"
            />
          </div>
          <div className="col-md-5 ">
            <h3>Details About Product</h3>
            <div
              style={{
                paddingTop: "100px",
              }}
            >
              <h4>
                Title :-<span> Samsung S21</span>
              </h4>
              <h4>
                Color :-<span> black in color</span>
              </h4>
              <h4>
                Price :- <span>2500/-</span>
              </h4>
            </div>
            <Button className="mt-5" variant="outline-success">
              Wholesale Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetsils;
