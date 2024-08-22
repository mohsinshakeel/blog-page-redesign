import Image from 'next/image';
import React from 'react';

interface ShareButtonProps {}

const ShareButton: React.FC<ShareButtonProps> = () => {
  const socialIcons = [
    // Here's the continuation of the ShareButton component:

    {
      src: "/images/3.svg",
      alt: "Facebook share"
    },
    {
      src: "/images/2.svg",
      alt: "Twitter share"
    },
    {
      src: "/images/1.svg", 
      alt: "LinkedIn share"
    }
  ];

  return (
    <div className="flex gap-5 mt-2 items-start self-stretch my-auto">
      {socialIcons.map((icon, index) => (
        <button key={index} aria-label={`Share on ${icon.alt}`}>
          <Image src={icon.src} alt={icon.alt} width={30} height={30} className="object-contain shrink-0 aspect-square w-[30px]" />
        </button>
      ))}
    </div>
  );
};

export default ShareButton;