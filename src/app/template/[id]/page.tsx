import React from "react";

const TemplateView = ({ params }: any) => {
  console.log("Template id: ", params.id);
  return (
    <div className="layout">
      {/* Tempalate View */}
      <div>
        <h2 className="text-2xl pt-10 text-accent">
          Premium <strong> Graphics Template</strong>
        </h2>
        <div>
          <img src="/topimg/1.jpg" className="" alt="" />
        </div>
      </div>
      {/* Payment Option */}
      <div>
        <h1>Payment Options</h1>
      </div>
    </div>
  );
};

export default TemplateView;
