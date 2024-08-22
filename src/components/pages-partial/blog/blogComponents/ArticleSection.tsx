import { BlogSection } from '@/types';
import React from 'react';

interface ArticleSectionProps {
  sections: BlogSection[];
}

const ArticleSection = ({ sections }: ArticleSectionProps) => {

  return (
    <div className="flex flex-col grow max-md:mt-8 max-md:max-w-full">
      {sections?.map((section, index) => (
        <section
          key={index}
          className="flex flex-col max-w-full"
          id={section.type === 'heading' || section.type === 'sub-heading'?`section-${index + 1}`:""}
        >
          {section.type === 'heading' && (
            <h2 className="mt-8 text-3xl font-bold text-secondary max-md:max-w-full">
              {section.content}
            </h2>
          )}
           {section.type === 'sub-heading' && (
            <h2 className="mt-8 text-3xl font-bold text-black max-md:max-w-full">
              {section.content}
            </h2>
          )}
          {section.type === 'paragraph' && (
            <p className="mt-6 text-lg leading-9 text-zinc-900 max-md:max-w-full">
              {section.content}
            </p>
          )}
        </section>
      ))}
    </div>
  );
};

export default ArticleSection;
