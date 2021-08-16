import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container py-1">
          <div className="row py-4">
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <span className="text-muted">Shipping</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Retrun Policy</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Work with Us</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Term & Coditions</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Follow us Here
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fab fa-facebook-square ">
                    <span className="text-muted"> Facebook</span>
                  </i>
                </li>
                <li className="mb-2">
                  <i className="fab fa-twitter-square ">
                    <span className="text-muted"> Twitter</span>
                  </i>
                </li>
                <li className="mb-2">
                  <i className="fab fa-instagram-square ">
                    <span className="text-muted"> Instagram</span>
                  </i>
                </li>
                <li className="mb-2">
                  <i className="fab fa-pinterest-square ">
                    <span className="text-muted"> Pinterest</span>
                  </i>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Thank You
              </h6>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Newsletter
              </h6>

              <div className="p-1 rounded border">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-light py-1">
          <div class="container text-center">
            <p class="text-muted mb-0 py-2">
              © 2021 Tarun All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
