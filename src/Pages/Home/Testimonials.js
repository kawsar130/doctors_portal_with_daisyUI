import React from "react";
import people1 from "../../assets/images/people1.png";
import TestimonialCard from "./TestimonialCard";
import quote from "../../assets/icons/quote.svg";

const Testimonials = () => {
  const testimonial = [
    {
      _id: 1,
      name: "Winson Herry",
      address: "California",
      img: people1,
      feedback:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Rahmat Ullah",
      address: "Savar, Dhaka",
      img: people1,
      feedback:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Kawsar Ahmed",
      address: "Sirajganj",
      img: people1,
      feedback:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="my-20">
      <div className="flex justify-between mb-10">
        <div>
          <h3 className="text-primary font-bold text-xl">Testimonial</h3>
          <h2 className="text-3xl" style={{ color: "#3A4256" }}>
            What Our Patients Says
          </h2>
        </div>
        <div>
          <img src={quote} alt="quote" className="w-24 lg:w-48" />
        </div>
      </div>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 place-content-center mx-auto">
        {testimonial.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
          ></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
