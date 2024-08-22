import { BlogSection } from '@/types';
import React from 'react';

interface TableOfContentsProps {
  sections: BlogSection[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  return (
    <nav className="flex flex-col mt-8 max-md:hidden">
      <h2 className="text-xl font-semibold text-sky-600">In this Article</h2>
      <ul className="flex flex-col self-start mt-5 text-base font-light text-black">
        {sections.map((section, index) => {
          if (section.type === 'heading' || section.type === 'sub-heading') {
            return (
              <li
                key={index}
                className={`gap-2.5 flex items-center self-stretch py-2.5 pl-5 ${index > 0 ? 'mt-2.5' : ''} max-w-full w-[341px] ${index===2 ? 'font-semibold text-sky-600 border-sky-600 border-solid border-l-[3px]' : ''} ${index > 0 ? 'pl-10 w-[321px]' : ''}`}
              >
                {section.type === 'sub-heading' ? <div className='w-2 h-2 ml-5 mr-2 rounded-full bg-gray-700'></div>:null}<a href={`#section-${index + 1 }`}>{section.content}</a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
