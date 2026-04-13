import React from "react";
import ClientReviewCard from "./ClientReviewCard";

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16 bg-transparent">
      {/**heading */}
      <div className="text-center text-2xl text-blue-400 font-bold">
        What Our Happy Client Says
      </div>
      {/**sub heading */}
      <p className="mt-3 text-centre font-medium text-gray-200 w-[90%] mx-auto sm:w-[70%] md-[50%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam
        pariatur commodi maiores consequuntur a. Jasica Doe Jasica Doe 4.7 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Architecto rerum
        recusandae sint quisquam ullam quo. John Doe
      </p>
      {/**grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <ClientReviewCard image="/u1.jpg" name="Jessica Doe" rating="4.5" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ClientReviewCard image="/u2.jpg" name="Jhon Dee" rating="4.7" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ClientReviewCard image="/u3.jpg" name="Mark Kelvin" rating="4.3" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ClientReviewCard image="/u4.jpg" name="San Taliya" rating="4.6" />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
