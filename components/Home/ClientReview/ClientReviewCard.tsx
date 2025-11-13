import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

type Prop = {
  image: string;
  name: string;
  rating: string;
};

const ClientReviewCard = ({ image, name, rating }: Prop) => {
  return (
    <div className="bg-white shadow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg">
      {/**Image */}
      <div>
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold text-blue-900">{name}</h1>
        <div className="flex items-center space-x-1">
          <p className="text-2xl font-bold text-yellow-700">{rating}</p>
          <div className="flex items-center">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <FaStar className="w-4 h-4 text-yellow-500" />
            <FaStar className="w-4 h-4 text-yellow-500" />
            <FaStar className="w-4 h-4 text-yellow-500" />
            <BsStarHalf className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
        <p className="mt-2 text-base text-gray-700 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          rerum recusandae sint quisquam ullam quo.
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
