
import About from '@/components/About';
import { MenubarDemo } from '@/components/MenubarDemo';
import ProjectDetails from '@/components/ProjectDetails';
import { SiteFooter } from '@/components/SiteFooter';
import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IconBrush, IconCamera, IconCircles, IconDeviceLaptop } from '@tabler/icons-react';
import React from 'react';

const ProjectDetailsPage: React.FC = () => {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-20">
        <MenubarDemo />
        <div className='flex gap-4'>
            <div className='w-2/5 space-y'>
                <p className='uppercase mb-6 font-semibold'>contact info</p>
                <div className='flex items-center gap-6 mb-16'>
                    <div className='bg-white rounded-xl p-5'>
                        <IconCamera stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-300 uppercase text-sm'>main us</p>
                        <p className='text-gray-400 font-[500] text-sm'>infor@bluebase.com</p>
                        <p className='text-gray-400 font-[500] text-sm'>infor@bluebase.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-6 mb-16'>
                    <div className='bg-white rounded-xl p-5'>
                        <IconCamera stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-300 uppercase text-sm'>main us</p>
                        <p className='text-gray-400 font-[500] text-sm'>infor@bluebase.com</p>
                        <p className='text-gray-400 font-[500] text-sm'>infor@bluebase.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-6 mb-16'>
                    <div className='bg-white rounded-xl p-5'>
                        <IconCamera stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-gray-300 uppercase text-sm'>main us</p>
                        <p className='text-gray-400 font-[500] text-sm'>infor@bluebase.com</p>
                        <p className='text-gray-400 font-[500] text-sm'>infor@bluebase.com</p>
                    </div>
                </div>
                <div>
                    <p className='uppercase font-semibold'>social info</p>
                    <div className='flex justify-between mt-6'>
                        <div className='bg-white rounded-full p-6'>
                            <IconCamera stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                        </div>
                        <div className='bg-white rounded-full p-6'>
                            <IconCamera stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                        </div>
                        <div className='bg-white rounded-full p-6'>
                            <IconCamera stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full w-full rounded-3xl bo bg-white p-12'>
                <CardTitle className='text-3xl'>Let&apos;s work <span className='text-blue-500'>together</span></CardTitle>
                <div className='flex flex-col gap-5 mt-10'>
                    <Input placeholder='Name*' className='border-none p-6 h-14' />
                    <Input placeholder='Email*' className='border-none h-14 p-6' />
                    <Input placeholder='Your Subject*' className='border-none h-14 p-6' />
                    <Textarea placeholder='Your Message*' rows={4} className='border-none p-6' />
                    <Button className="rounded-2xl w-full h-12 hover:bg-blue-400">Send Message</Button>
                    </div>
            </div>

        </div>
        <SiteFooter />
    </div>
  );
};

export default ProjectDetailsPage;
