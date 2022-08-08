import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import GetStartedButton from "../../Buttons/GetStartedButton";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center px-12"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="doctor" />
      </div>
      <div className="flex-1 p-10 lg:p-2">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore
          nesciunt numquam ab, laudantium officia soluta quod, perspiciatis
          earum debitis explicabo? Ullam beatae rem, voluptates cum iusto ab
          quod doloremque.
        </p>
        <GetStartedButton>Get Started</GetStartedButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
