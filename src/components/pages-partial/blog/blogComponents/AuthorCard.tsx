import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogAuthor } from '@/types';

interface AuthorCardProps {
  author: BlogAuthor;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <section className="flex overflow-hidden flex-col items-center bg-primary rounded-xl aspect-square">
      <div className="flex relative flex-col px-5 py-5 w-fit aspect-[0.98]">
        <div className="flex relative gap-5 justify-between">
          <Image
            src={author.profileImageUrl}
            alt="profile"
            objectFit="contains"
            width={100}
            height={100}
          />
          <Link href={author.socialMedia.linkedin} target='_blank'>
            <Image
              src={
                'https://res.cloudinary.com/dovyyrdhr/image/upload/v1724324762/b488e5fa1d32209cfc944c0da4d7908688b3864c1412ee33a2a90ffd6ebec407_f6fixq.svg'
              }
              alt="profile"
              objectFit="contains"
              className="object-contain shrink-0 self-end mt-16 max-md:mt-10"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="flex relative flex-col mt-5 text-black">
          <div className="flex flex-col max-w-full w-[301px]">
            <h2 className="text-xl font-semibold">{author.name}</h2>
            <p className="mt-2.5 text-sm leading-5">
              {author.title}
            </p>
          </div>
          <hr className="mt-2.5 max-w-full bg-black border border-black border-solid opacity-20 min-h-[1px] w-[301px]" />
        </div>
        <p className="relative self-start mt-2.5 text-xs font-light leading-5 text-black">
          {author.desc}
        </p>
      </div>
    </section>
  );
};

export default AuthorCard;
