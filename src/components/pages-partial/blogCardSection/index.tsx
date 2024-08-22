'use client';
import React from 'react';

import Card from '@/components/common/Card';
import { blogPosts } from '@/constants';
import { useRouter } from 'next/navigation';

const BlogCardSection: React.FC = () => {
  const router = useRouter();

  const handleClickCard = (link: string) => {
    router.push(link);
  };

  return (
    <div className="w-9/12 py-10">
      <div className="mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          All Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts?.map((post, index) => (
            <Card
              key={post.title}
              title={post.title}
              date={post.date}
              description={post.description}
              link={post.link}
              image={post.image}
              handleClick={() => handleClickCard(post.link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardSection;
