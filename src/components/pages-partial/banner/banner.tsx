import Image from 'next/image';
import React from 'react';

import BannerImg from '../../../assets/png/banner.png';

const Banner = () => {
  return (
    <div className="relative w-9/12 ">
      <Image src={BannerImg} alt="Banner" className="w-full h-[500px]" />
    </div>
  );
};

export default Banner;
