import React from "react";
import ListCart from "./ListCart";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function ShoppingCart() {
  const products = [
    {
      productName: "Iphone 11 pro",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      price: "$900",
      description: "256GB, Navy Blue",
    },
    {
      productName: "Samsung galaxy Note 10",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
      price: "$900",
      description: "256GB, Navy Blue",
    },
    {
      productName: "Canon EOS M50",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
      price: "$1199",
      description: "Onyx Black",
    },
    {
      productName: "MacBook Pro",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
      price: "$1799",
      description: "1TB, Graphite",
    },
  ];
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="card mb-3">
                        {products.map((product, index)=>
                         <div className="card-body" key={index}>
                         <div className="d-flex justify-content-between">
                           <div className="d-flex flex-row align-items-center">
                             <div>
                               <img
                                 src={product.image}
                                 className="img-fluid rounded-3"
                                 alt={product.productName}
                                 style={{ width: 65 }}
                               />
                             </div>
                             <div className="ms-3">
                               <h5>{product.productName}</h5>
                               <p className="small mb-0">{product.description}</p>
                             </div>
                           </div>
                           <div className="d-flex flex-row align-items-center">
                             <div style={{ width: 50 }}>
                               <h5 className="fw-normal mb-0">2</h5>
                             </div>
                             <div style={{ width: 80 }}>
                               <h5 className="mb-0">{product.price}</h5>
                             </div>
                             <a href="#!" style={{ color: "#cecece" }}>
                               <i className="fas fa-trash-alt" />
                             </a>
                           </div>
                         </div>
                       </div>

                        )}
                       
                      </div>
                    </div>
                    <ListCart />
                  </div>
                  <div className="col-lg-5">
                    <Checkout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
