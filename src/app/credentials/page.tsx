
import { MenubarDemo } from '@/components/MenubarDemo';
import MoreAbout from '@/components/MoreAbout';
import { SiteFooter } from '@/components/SiteFooter';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-8">
        <MenubarDemo />
        <MoreAbout />
        <SiteFooter />
    </div>
  );
};

export default AboutPage;