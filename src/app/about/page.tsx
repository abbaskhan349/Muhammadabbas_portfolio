
import About from '@/components/About';
import { MenubarDemo } from '@/components/MenubarDemo';
import { SiteFooter } from '@/components/SiteFooter';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold mb-4">About Us</h1>
    //   <p className="mb-4">
    //     Welcome to our About page. We are a company dedicated to providing excellent services and products to our customers.
    //   </p>
    //   <p className="mb-4">
    //     Our mission is to innovate and create solutions that make a positive impact on people lives.
    //   </p>
    //   <p>
    //     Feel free to contact us if you have any questions or would like to learn more about our company.
    //   </p>
    // </div>
    <>
    <MenubarDemo />
        <About />
        <SiteFooter />
    </>
  );
};

export default AboutPage;
