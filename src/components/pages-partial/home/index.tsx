'use client';

import TopNavbar from '@/components/navbar/NavBar';
import Banner from '../banner/banner';
import BlogSection from '../blogCardSection';
import Footer from '@/components/footer/Footer';

export default function HomeScreen() {
  return (
    <div className="flex flex-col w-full h-full">
      <TopNavbar />
      <div className=" flex flex-col justify-center items-center">
        <Banner />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}
