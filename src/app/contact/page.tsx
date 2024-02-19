import React from "react";

const ContactUs = () => {
  return (
    <div className="layout pt-20 pb-48 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-accent pb-4">How can we help?</h2>
      <p className="mb-10">
        If you have any questions, reach out to our team for help
      </p>
      <form className="lg:w-[600px] grid grid-cols-2 gap-5">
        <input
          type="text"
          className="bg-neutral py-3 px-4 rounded-lg outline-primary"
          placeholder="Full Name"
        />
        <input
          type="email"
          className="bg-neutral py-3 px-4 rounded-lg outline-primary"
          placeholder="Email"
        />
        <textarea
          className="col-span-2 h-[150px] bg-neutral py-3 px-4 rounded-lg outline-primary"
          placeholder="Message"
        ></textarea>
        <button className="col-span-2 py-4 rounded-lg text-white bg-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
