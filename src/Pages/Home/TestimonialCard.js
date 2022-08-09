import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-5 m-5 shadow-md rounded-lg ">
      <div className="mb-3">
        <p>{testimonial.feedback}</p>
      </div>
      <div className="flex py-5">
        <div className="mr-5">
          <div className="avatar">
            <div
              className="w-24 rounded-full ring ring-[#19D3AE] ring-offset-base-100 ring-offset-2"
              style={{ width: "75px" }}
            >
              <img src={testimonial.img} alt="" />
            </div>
          </div>
        </div>
        <div className="grid content-center">
          <h4 className="text-xl font-medium">{testimonial.name}</h4>
          <p className="font-[400]">{testimonial.address}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
