import React from 'react';
import ShareButton from './ShareButton';

interface ShareCardProps {
  type?: 'full' | undefined;
}

const ShareCard: React.FC<ShareCardProps> = ({ type }: ShareCardProps) => {
  return (
    <section className="flex overflow-hidden flex-col mt-4 bg-primary rounded-xl">
      <div className="flex relative flex-col justify-center items-start px-5 py-5">
        <div
          className={`flex relative  ${type === 'full' ? 'w-full justify-between items-center' : 'flex-col'}`}
        >
          <h3 className="text-base font-semibold text-black">
            Share with your community!
          </h3>
          <ShareButton />
        </div>
      </div>
    </section>
  );
};

export default ShareCard;
