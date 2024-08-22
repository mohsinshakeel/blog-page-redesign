'use client';
import Image from 'next/image';
import React from 'react';

import TopNavbar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import Breadcrumb from './blogComponents/Breadcrumb';
import AuthorCard from './blogComponents/AuthorCard';
import ShareCard from './blogComponents/ShareCard';
import TableOfContents from './blogComponents/TableOfContent';
import ArticleSection from './blogComponents/ArticleSection';
import RelatedArticles from './blogComponents/RelatedArticles';
import { blogsData, relatedBlogPosts } from '@/constants';

export default function BlogScreen() {
  return (
    <div className="flex flex-col w-full h-full">
      <TopNavbar />
      <div className=" flex flex-col justify-center items-center">
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

const Blog = () => {
  const { blog } = blogsData;
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-12  max-md:px-5 max-md:py-8">
      <div className="flex flex-col w-full max-w-[1066px] max-md:max-w-full">
        <Breadcrumb />
        <main className="mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <article className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow w-full rounded-xl bg-zinc-900 max-md:mt-8 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col pt-80 w-full  max-md:pt-24 max-md:max-w-full">
                  {blog.sections[0].type === 'image' && blog.sections[0].url ? (
                    <Image
                      src={blog.sections[0].url}
                      alt=""
                      width={695}
                      height={438}
                      className="object-cover absolute inset-0 size-full rounded"
                    />
                  ) : null}
                  <div className="flex relative flex-col px-5 pt-5 pb-8 bg-black bg-opacity-10 backdrop-blur-sm max-md:max-w-full">
                    <div className="flex flex-col max-md:max-w-full">
                      <div className="flex flex-col w-full  max-md:max-w-full">
                        <h1 className="text-3xl font-bold text-white max-md:max-w-full">
                          {blog.title}
                        </h1>
                        <div className="flex items-start self-start mt-2.5 text-sm text-black">
                          <time dateTime="2024-09-01">
                            {' '}
                            {blog.datePublished}{' '}
                          </time>
                          <span>&nbsp;{blog.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ArticleSection sections={blog.sections} />
              <ShareCard type="full" />
            </article>
            <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-8 max-md:hidden">
                <AuthorCard author={blog.author} />
                <ShareCard />
                <TableOfContents sections={blog.sections} />
              </div>
            </aside>
          </div>
          <RelatedArticles blogPosts={relatedBlogPosts} />
        </main>
      </div>
    </div>
  );
};
