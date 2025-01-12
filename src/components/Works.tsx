'use client'
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
    router: any;
    imageSrc: string;
    title: string;
    subtitle: string;
    iconSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ router, imageSrc, title, subtitle, iconSrc }) => (
    <Card
    onClick={() => router.push('/projectDetails')}
    className="w-1/ bg-white rounded-3xl borde shadow-none flex flex-col p- cursor-pointer">
        <CardHeader className="rounded-">
            <div className="relative w-80 h-80 bg-blue-400 rounded-3xl">
                <Image
                    className="rounded-3xl"
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </CardHeader>
        <CardContent className="flex justify-between">
            <div className="flex flex-col items-start">
                <div className="text-sm font-medium text-gray-400 uppercase">{subtitle}</div>
                <CardTitle className="text-xl font-medium">{title}</CardTitle>
            </div>
            <div className="relative w-20 h-12 p-0">
                <Image
                    src={iconSrc}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </CardContent>
    </Card>
);

const Works: React.FC = () => {
    const router = useRouter();
    const projects = [
        { imageSrc: "/project1.jpeg", title: "Dynamic", subtitle: "web designing", iconSrc: "/icon-2.svg" },
        { imageSrc: "/project2.jpeg", title: "Diesel H1", subtitle: "photography", iconSrc: "/icon-2.svg" },
        { imageSrc: "/project3.jpeg", title: "Seven Studio", subtitle: "mobile designing", iconSrc: "/icon-2.svg" },
        { imageSrc: "/project4.jpeg", title: "Raven Studio", subtitle: "branding", iconSrc: "/icon-2.svg" },
        { imageSrc: "/project5.jpeg", title: "Submarine", subtitle: "web designing", iconSrc: "/icon-2.svg" },
        { imageSrc: "/project6.jpeg", title: "Hydra Merc", subtitle: "web designing", iconSrc: "/icon-2.svg" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6">
                <div className="flex flex-col gap-6">
                    {projects.slice(0, 2).map((project, index) => (
                        <ProjectCard router={router} key={index} {...project} />
                    ))}
                </div>
                <div className="flex w-2/ flex-col gap-6">
                    <CardTitle className="text-7xl font-semibold tracking-wide uppercase">All Projects</CardTitle>
                    <div className="grid grid-cols-2 gap-6">
                        {projects.slice(2).map((project, index) => (
                            <ProjectCard router={router} key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;
