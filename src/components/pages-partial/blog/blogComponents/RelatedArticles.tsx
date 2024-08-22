import React from 'react';
import Card from '@/components/common/Card';
import { BlogPost } from '@/types';

interface ArticleSectionProps {
  blogPosts: BlogPost[];
}

const RelatedArticles = ({ blogPosts }: ArticleSectionProps) => {
  return (
    <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
      <section className="flex flex-col max-w-full">
        <h2 className="py-8 text-3xl font-bold text-secondary w-[67%] max-md:max-w-full border-b border-gray-600">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogPosts.slice(0,3).map((post, index) => (
            <Card
              key={index}
              title={post.title}
              date={post.date}
              description={post.description}
              link={post.link}
              image={post.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RelatedArticles;
