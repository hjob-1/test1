import React from "react";
import { testimonails } from "../data";
import Client from "./Client";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>client testimonials</h2>
      <article>
        {testimonails.map((client) => (
          <Client data={client} />
        ))}
      </article>
    </div>
  );
};

export default Testimonials;
