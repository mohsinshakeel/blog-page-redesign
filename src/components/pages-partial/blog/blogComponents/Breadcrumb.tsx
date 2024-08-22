'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface BreadcrumbProps {}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  const pathname = usePathname();
  console.log(pathname);
  
  const pathSegments = pathname.split('/').filter((segment) => segment);

  return (
    <nav
      className="flex flex-col justify-center self-start p-2.5 text-sm font-medium text-gray-500 rounded-md"
      aria-label="Breadcrumb"
    >
      <div className="flex gap-2.5 items-center">
        <Link href="/" className="self-stretch my-auto">
          Home
        </Link>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = '/' + pathSegments.slice(0, index + 1).join('/');

          return (
            <React.Fragment key={index}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be10e02af143386aa20f888bd5a6cb92fa7a2c7227b1ab8796ee6e5fa6267e2a?placeholderIfAbsent=true&apiKey=29ccb7cdc91c4a688b6addf252de0b3b"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-2 aspect-[0.89] fill-gray-500"
              />
              {isLast ? (
                <span
                  className="self-stretch my-auto text-sky-600"
                  aria-current="page"
                >
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link href={href} className="self-stretch my-auto capitalize">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
