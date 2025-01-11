import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {  FiFacebook, FiMail, FiInstagram, FiLinkedin, FiMessageCircle } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 text-4xl flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/me.jpg" width={310} height={310} alt="avatar" />
        </div>
        <h1 className="mt-150 text-7xl font-bold ">Robiul Hasan Shawon</h1>
        <div className="mt-2 flex gap-1">
          
          {' '}
          {' '}
          <Typed
            strings={ [ 
              'I\'m an Undergrade Student',
              'Tech Enthusiast',
              'Aspiring Technology Specialist'
            ]}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-6  flex gap-8">
          <Link href="https://www.linkedin.com/in/rbh-shawon/">
            <a className="text-gray-450 transition-colors duration-150 hover:text-primary-500">
              <FiLinkedin size={50} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/rbh.shawon/">
            <a className="text-gray-450 transition-colors duration-150 hover:text-primary-500">
              <FiFacebook size={50} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/hellooshawon/">
            <a className="text-gray-450 transition-colors duration-150 hover:text-primary-500">
              <FiInstagram size={50} />
            </a>
          </Link>
          <Link href="https://wa.link/ktecaq">
            <a className="text-gray-450 transition-colors duration-150 hover:text-primary-500">
              <FiMessageCircle size={50} />
            </a>
          </Link>
          <Link href="robiulhasanshawon.net@gmail.com">
            <a className="text-gray-450 transition-colors duration-150 hover:text-primary-500">
              <FiMail size={50} />
            </a>
          </Link>
        </div>
        <Button className="mt-3 px-10 mt-7 text-4xl">Contact Me</Button>
      </div>
      

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm"></p>
        <div >
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
