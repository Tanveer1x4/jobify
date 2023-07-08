import React from 'react';
import { TiSocialYoutubeCircular, TiSocialInstagramCircular } from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 min-h-10vh py-4 px-6 flex flex-col md:flex-row items-center justify-between fixed bottom-0 w-full">
      <div className="text-white">
        <h1 className="text-xl font-bold">Jobify</h1>
        <p className="text-sm text-purple-400">@tanveer</p>
      </div>
      <div className="flex justify-center mt-4 md:mt-0">
        <a href="https://youtube.com/tanveerhassan1516" target="_blank" rel="noopener noreferrer" className="text-white text-4xl mx-2">
          <TiSocialYoutubeCircular />
        </a>
        <a href="https://instagram.com/tanveerhassan5340" target="_blank" rel="noopener noreferrer" className="text-white text-4xl mx-2">
          <TiSocialInstagramCircular />
        </a>
        <a href="https://github.com/Tanveer1x4" target="_blank" rel="noopener noreferrer" className="text-white text-4xl mx-2">
          <DiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
