import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const Categorywrapper = (props) => {
  const leftarrowRef = useRef();
  const rightarrowRef = useRef();
  const reference = useRef(0);

  const carousel = (e) => {
    if (e.target === rightarrowRef.current) {
      var html = rightarrowRef.current.parentElement.children[2].children;
      const value = reference.current + 100;

      for (let i = 0; i < html.length; i++) {
        html[i].style.transform = `translateX(-${value}vw)`;
      }

      reference.current = value;
    } else {
      var html = leftarrowRef.current.parentElement.children[2].children;
      const value = reference.current - 100;

      for (let i = 0; i < html.length; i++) {
        html[i].style.transform = `translateX(-${value}vw)`;
      }

      reference.current = value;
    }

    if (reference.current >= 300) {
      rightarrowRef.current.style.display = "none";
    } else {
        rightarrowRef.current.style.display = "block";
    }

    if (reference.current >= 100) {
        leftarrowRef.current.style.display = "block";
      } else {
        leftarrowRef.current.style.display = "none";
      }
  };

  return (
    <section className="trending">
      <h1>{props.title}</h1>

      <div className="card__wrapper">
        <ChevronRight
          className="arrowRight"
          ref={rightarrowRef}
          onClick={carousel}
        />

        <ChevronLeft
          className="arrowLeft"
          ref={leftarrowRef}
          onClick={carousel}
        />

        <div className="tending__cards">{props.loadingstate}</div>
      </div>
    </section>
  );
};

export default Categorywrapper;
