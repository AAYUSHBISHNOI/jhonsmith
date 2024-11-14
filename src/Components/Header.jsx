import React from "react";
import { useState } from "react";
import { Navcross, Navline } from "../Comon/icon";
import logo from "../assets/img/png/Jason-T-Smith-w12hite-high-res-e1708385557837.png";
import carts from "../assets/img/png/carts.svg";
import { Container, Nav } from "react-bootstrap";

function Header() {
  const [show, setfirst] = useState(false);

  if (show === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <>
      <Nav className="nav_box d-flex align-items-center bg-black">
        <Container>
          <nav className="d-flex justify-content-between align-items-center py-20">
            <div className="d-flex gap-12 z-5">
              <img src={logo} alt="logo" className="cursor-pointer nav_logo " />
            </div>
            <div className=" d-flex align-items-center gap-lg-4">
              <div
                className={`${
                  show ? "end-0" : "right_100"
                } d-flex gap-5 mobile-view`}
              >
                <ul className="d-flex flex-column flex-lg-row gap-4 align-items-center">
                  <li>
                    <a
                      href="#jason’s story"
                      className=" text-white fw-medium"
                      onClick={() => {
                        setfirst(!show);
                      }}
                    >
                      Jason’s Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="#speaking"
                      className=" text-white fw-medium"
                      onClick={() => {
                        setfirst(!show);
                      }}
                    >
                      Speaking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#books"
                      className=" text-white fw-medium"
                      onClick={() => {
                        setfirst(!show);
                      }}
                    >
                      Books
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses"
                      className=" text-white fw-medium"
                      onClick={() => {
                        setfirst(!show);
                      }}
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mentorship"
                      className=" text-white fw-medium"
                      onClick={() => {
                        setfirst(!show);
                      }}
                    >
                      Mentorship
                    </a>
                  </li>
                  <li>
                    <a
                      href="#media"
                      className=" text-white fw-medium"
                      onClick={() => {
                        setfirst(!show);
                      }}
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className=" text-white fw-medium"
                      onClick={() => {
                        setfirst(!show);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex gap-lg-2 gap-1">
                <div className="cursor-pointer">
                  <img src={carts} alt="carts" />
                </div>
                <div>
                  <p className=" fw-medium text-white mb-0 cursor-pointer">
                    (0)
                  </p>
                </div>
              </div>
            </div>
            <div
              className="z-5 d-lg-none"
              onClick={() => {
                setfirst(!show);
              }}
            >
              <span>{show === false ? <Navline /> : <Navcross />}</span>
            </div>
          </nav>
        </Container>
      </Nav>
    </>
  );
}

export default Header;
