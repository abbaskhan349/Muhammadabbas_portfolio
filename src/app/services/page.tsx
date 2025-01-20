
import About from '@/components/About';
import { MenubarDemo } from '@/components/MenubarDemo';
import ProjectDetails from '@/components/ProjectDetails';
import { SiteFooter } from '@/components/SiteFooter';
import { CardTitle } from '@/components/ui/card';
import { IconBrush, IconCamera, IconCircles, IconDeviceLaptop } from '@tabler/icons-react';
import React from 'react';

const ProjectDetailsPage: React.FC = () => {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-20">
        <MenubarDemo />
        <div className='flex gap-4'>
            <div className=' rounded-3xl border bg-white p-20 space-y-32'>
                <div className='flex gap-10 items-center'>
                    <IconCamera stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                    <p className='uppercase'>Photography</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <IconBrush stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                    <p className='uppercase'>Photography</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <IconCircles stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                    <p className='uppercase'>Photography</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <IconDeviceLaptop stroke={1.5} color="#5B78F6" height={'30'} width={'30'} />
                    <p className='uppercase'>Photography</p>
                </div>
            </div>
            <div className=' h-full w-full'>
                <CardTitle className="text-7xl font-semibold tracking-wide uppercase text-center mb-6">
                    My Offerings
                </CardTitle>
                <div className=' rounded-3xl border bg-white  w-full p-16 grid grid-cols-2 gap-20'>
                    {Array.from({ length: 4}).map((_, index) => {
                        return (
                            <div key={index}>
                                <p className='uppercase text-base font-semibold'>Photography</p>
                                <p className="text-gray-400 tracking-wide text-sm">
                                    Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna
                                    fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    </div>
  );
};

export default ProjectDetailsPage;
