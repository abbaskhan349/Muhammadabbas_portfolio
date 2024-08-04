import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ClientsCard from "./ClientsCard";
import FontsServicesProfiles from "./FontsServicesProfiles";

export default function About() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6 felx">
                <Card className="w-1/ bg-white rounded-3xl borde shadow-none flex justify-center items-center p-">
                    <CardHeader className=" rounded-">
                        <div className="relative w-80 h-80 bg-blue-400 rounded-3xl">
                            <Image
                                className="rounded-3xl"
                                src="/mypicSmallreverted.png" // Replace with your image path
                                alt="David Henderson"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </CardHeader>

                </Card>
                <div className="flex w-2/3 flex-col gap-4">


                    <CardTitle className="text-7xl font-semibold tracking-wide uppercase">Self-Summary</CardTitle>


                    <Card className="bg-white w-full rounded-3xl border-no shad flex flex-col">
                        <div className="relative w-32 h-20 p-0 ">
                            <Image
                                src="/icon2-2.png" // Replace with your image path
                                alt=""
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <CardContent className="flex flex-col items-start p-10 space-y-2">
                            <CardTitle className="text-3xl font-medium tracking-wide">Muhammad Abbas</CardTitle>
                            <div className="text-gray-400 tracking-wide">I am a Islamabad-based Web Developer
                                with a focus on Dashboard development, Point-of-Sale, CRM Software development. I have a diverse range
                                of experience having worked across various fields and industries.</div>

                        </CardContent>
                    </Card>


                </div>


            </div>
            <div className="flex gap-6">




                <Card className="bg-white w-full rounded-3xl border-no shad flex flex-col">

                    <CardContent className="flex flex-col items-start p-10 space-y">
                        <CardTitle className="text-lg font-medium uppercase mb-4">Experience</CardTitle>

                        <div className="text-gray-400 font-medium">2007 - 2017</div>
                        <CardTitle className="text-lg font-medium text-blue-400 mt-2">Framer Designer & Developer</CardTitle>
                        <div className="text-gray-400 mb-4">Bluebase Designs</div>

                        <div className="text-gray-400 font-medium">2007 - 2017</div>
                        <CardTitle className="text-lg font-medium text-blue-400 mt-2">Framer Designer & Developer</CardTitle>
                        <div className="text-gray-400 ">Bluebase Designs</div>
                    </CardContent>
                </Card>


                <Card className="bg-white w-full rounded-3xl border-no shad flex flex-col">

                    <CardContent className="flex flex-col items-start p-10 space-y">
                        <CardTitle className="text-lg  font-medium uppercase mb-4">Education</CardTitle>

                        <div className="text-gray-400 font-medium">2007 - 2017</div>
                        <CardTitle className="text-lg font-medium text-blue-400 mt-2">Framer Designer & Developer</CardTitle>
                        <div className="text-gray-400 mb-4">Bluebase Designs</div>

                        <div className="text-gray-400 font-medium">2007 - 2017</div>
                        <CardTitle className="text-lg font-medium text-blue-400 mt-2">Framer Designer & Developer</CardTitle>
                        <div className="text-gray-400 ">Bluebase Designs</div>
                    </CardContent>
                </Card>

            </div>
            <FontsServicesProfiles />

            {/* <ClientsCard /> */}
        </div>

    );
}
