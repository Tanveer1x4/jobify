import React from 'react';
import { Link } from 'react-router-dom';
import vg from '../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../assets/video/intro.mp4';

const Home = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto mb-3 px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0 md:space-x-16">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4 hover:italic">
              WE ARE HIRING!
            </h1>
            <p className="text-xl italic md:text-2xl text-gray-400 mt-10 mb-20">
              Streamline your hiring process with our innovative hiring app. Find top talent, automate candidate screening, and simplify team collaboration, all in one platform
            </p>
            <Link to="/form">
              <button className="bg-purple-500 hover:bg-purple-600 text-white text-lg py-3 px-8 rounded-lg">
                Explore Now
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/3">
            <img
              className="vector-graphics mx-auto animate-pulse"
              src={vg}
              alt="Vector Graphics"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-6">
            OUR BRANDS
          </h2>
          <div className="flex justify-center space-x-8">
            <CgGoogle className="text-4xl text-white" />
            <CgYoutube className="text-4xl text-white" />
            <SiCoursera className="text-4xl text-white" />
            <SiUdemy className="text-4xl text-white" />
            <DiAws className="text-4xl text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-4">
  <div className="flex justify-center">
    <div className="relative aspect-w-16 aspect-h-9 mb-20">
      <video
        className=""
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </div>
  </div>
</div>

    </section>
  );
};

export default Home;
