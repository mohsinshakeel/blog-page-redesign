import React from 'react';
import ShareButton from './ShareButton';

interface ShareSectionProps {}

const ShareSection: React.FC<ShareSectionProps> = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-5 py-5 mt-16 max-w-full bg-amber-300 rounded-xl w-[721px] max-md:px-5 max-md:mt-10">
      <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
        <h3 className="self-stretch my-auto text-base font-semibold text-black">
          Like what you see? Share with a friend.
        </h3>
        <ShareButton />
      </div>
    </section>
  );
};

export default ShareSection;