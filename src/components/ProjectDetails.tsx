import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ClientsCard from "./ClientsCard";
import FontsServicesProfiles from "./FontsServicesProfiles";

export default function ProjectDetails() {
    return (
        <div className="space-y-6">
            <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="text-gray-400 tracking-wide uppercase text-lg">branding - raven studio</div>
                <CardTitle className="text-6xl font-semibold tracking-wide uppercase">Aesthetic design for brand new startup</CardTitle>


            </div>
            <div className="relative h-[550px] w-screen ">
                <Image
                    src="/project-dt-1.jpeg" // Replace with your image path
                    alt="project 1"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex gap-6 bg-white rounded-3xl">
                <Card className="bg-[#f8f9fc] w-full rounded-3xl border-none shad flex flex-col mt-10 mb-10">

                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <CardTitle className="text-2xl uppercase font-medium">Raven Studio</CardTitle>
                        <div className="text-gray-400 tracking-wide">
                            Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim
                            praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
                            dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.

                            Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna
                            fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.
                        </div>

                    </CardContent>
                </Card>
                <div className="relative w-32 h-20 p-0 ">
                    <Image
                        src="/icon2-2.png" // Replace with your image path
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <Card className="bg-[#f8f9fc] w-full rounded-3xl border-none shad flex flex-col mt-10 mb-10">

                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <CardTitle className="text-2xl uppercase font-medium">About</CardTitle>
                        <div className="text-gray-400 tracking-wide">
                            Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim
                            praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam
                            dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.

                            Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna
                            fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.
                        </div>

                    </CardContent>
                </Card>
            </div>


            <div className=" px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8   ">
                <div className="relative h-[550px] w-full roud ">
                    <Image
                        className="rounded-3xl"
                        src="/project-dt-1.jpeg" // Replace with your image path
                        alt="project 1"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative mt-6  w-full grid grid-cols-2 gap-4">
                    <div className="relative h-[480px] w-full">
                        <Image
                            className="rounded-3xl"
                            src="/project1.jpeg" // Replace with your image path
                            alt="project 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative h-[480px] w-full">
                        <Image
                            className="rounded-3xl"
                            src="/project2.jpeg" // Replace with your image path
                            alt="project 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative h-[480px] w-full">
                        <Image
                            className="rounded-3xl"
                            src="/project3.jpeg" // Replace with your image path
                            alt="project 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative h-[480px] w-full">
                        <Image
                            className="rounded-3xl"
                            src="/project4.jpeg" // Replace with your image path
                            alt="project 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

            </div>

            <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="flex gap-6 p-8 bg-white border rounded-3xl">

                    <CardContent className="flex w-1/2 flex-col  pt-16 space-y">

                        <div className="text-gray-400  mt-2 font-medium">Year</div>
                        <CardTitle className="text-lg font-medium text-blue-400 ">2023</CardTitle>

                        <div className="text-gray-400 mt-4">Client</div>
                        <CardTitle className="text-lg font-medium text-blue-400">Raven Studio </CardTitle>

                        <div className="text-gray-400  mt-2">Services</div>
                        <CardTitle className="text-lg font-medium text-blue-400">Web Design </CardTitle>

                        <div className="text-gray-400 ">Project</div>
                        <CardTitle className="text-lg font-medium text-blue-400 mt-2">Dynamic </CardTitle>
                    </CardContent>
                    <div className="relative w-36 h-40 ">
                        <Image
                            src="/icon2-2.png" // Replace with your image path
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <Card className=" border-none flex flex-col">

                        <CardContent className="flex flex-col items-start p-10 space-y-4">
                            <CardTitle className="text-xl  font-medium">Description</CardTitle>
                            <div className="text-gray-400 tracking-wide">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus
                                venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors
                                praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis
                                dignissim diam quis enim lobortis scelerisque.
                            </div>
                            <div className="text-gray-400 tracking-wide">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus
                                venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors
                                praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis
                                dignissim diam quis enim lobortis scelerisque iin fermentumisa dui faucibus in ornare.Lorem ipsum dolor sit.
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="relative h-[550px] w-screen ">
                <Image
                    src="/project-dt-1.jpeg" // Replace with your image path
                    alt="project 1"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="flex items-center justify-center mt-10">
                <Card className="bg-white rounded-3xl shadow w-52 pt-8 flex items-center justify-center">
                    <CardContent className="flex items-center justify-center flex-col">
                        <CardTitle className="text-2xl font-medium text-blue-600 text-center mb-4">
                            Next Project
                        </CardTitle>
                    </CardContent>
                </Card>
            </div>
        </div>

    );
}
