import React from "react";
import GetStartedButton from "../../Buttons/GetStartedButton";
import appointmentBg from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center "
      style={{ background: `url(${appointmentBg})`, height: "50vh" }}
    >
      <div className="flex flex-col items-center" style={{ width: "100%" }}>
        <h4 className="text-primary font-bold">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
        <div className="flex flex-col items-center my-3 w-full ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-5"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mb-5"
          />
        </div>
        <GetStartedButton>Submit</GetStartedButton>
      </div>
    </div>
  );
};

export default ContactUs;
