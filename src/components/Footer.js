import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary" style={{ marginTop: "50px" }}>
      <Container>
        <footer className="page-footer font-small cyan darken-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 py-5 d-flex justify-content-around align-items-center">
                <div className="my-3 py-2">
                  <a
                    href="https://www.facebook.com/shreyas.shrawage2000"
                    target="__blank"
                    className="fb-ic mx-3 footer-link"
                  >
                    <i className="fab fa-facebook-f fa-lg  mr-md-5 mr-3 fa-2x text-light">
                      {" "}
                    </i>
                  </a>

                  <a
                    href="https://twitter.com/shreyventure"
                    target="__blank"
                    className="tw-ic mx-3 footer-link"
                  >
                    <i className="fab fa-twitter fa-lg text-light mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shreyas-shrawage-2920071b2/"
                    target="__blank"
                    className="li-ic mx-3 footer-link"
                  >
                    <i className="fab fa-linkedin-in fa-lg text-light mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a
                    href="https://www.instagram.com/shreyventure/"
                    target="__blank"
                    className="ins-ic mx-3 footer-link"
                  >
                    <i className="fab fa-instagram fa-lg text-light mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a
                    href="https://in.pinterest.com/shreyventure"
                    target="__blank"
                    className="pin-ic mx-3 footer-link"
                  >
                    <i className="fab fa-pinterest fa-lg text-light fa-2x"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2022{" "}
            <a href="/" className="footer-link">
              TODO List
            </a>
            .
            <p className="font-sm">
              Made with love by <em className="tw-bold">Shreyas Shrawage</em>
            </p>
          </div>
        </footer>
      </Container>
    </footer>
  );
};

export default Footer;
