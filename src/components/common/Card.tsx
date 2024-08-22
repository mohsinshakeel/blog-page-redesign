import Image from 'next/image';
import React from 'react';
import ArrowIcon from '../../assets/png/icon_wrap.png';
import Link from 'next/link';

interface CardProps {
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
  handleClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  link,
  image,
  handleClick,
}) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="bg-cover bg-center h-48"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="p-6">
        <div className="text-sm text-secondary font-bold">{date}</div>
        <div className="flex justify-between mt-2">
          <h3 className="text-xl font-bold text-gray-900 w-[15rem] ">
            {title}
          </h3>
          <Link href={link} className="w-6 h-6">
            <Image
              src={ArrowIcon}
              alt="arrow"
              width={24}
              height={24}
              objectFit="cover"
            />
          </Link>
        </div>
        <p className="mt-3 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
