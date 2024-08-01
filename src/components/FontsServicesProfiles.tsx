import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconBallBasketball, IconBrandTwitter, IconBrush, IconCamera, IconCircles, IconDeviceLaptop } from "@tabler/icons-react";

export default function FontsServicesProfiles() {
    return (
        <div className="">

            <div className="flex gap-6 ">
                <Card className=" bg-white w-1/4 rounded-3xl shadow border-none flex flex-col">
                    <CardHeader className="p-0">
                        <div className="relative w-full h-32 p-0 flex items-center justify-center">
                            <Image
                                // className="rounded-t-lg"
                                src="/gfonts.png" // Replace with your image path
                                alt="David Henderson"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase">Blog</div>
                        <CardTitle className="text-xl font-">GFonts</CardTitle>
                    </CardContent>
                </Card>
                <Card className="bg-white w-1/2 rounded-3xl shadow border-none flex flex-col">
                    <CardHeader className="px-20 h-32">
                        <div className="relative w-full h-full pt-8 flex justify-between items-center">
                            <IconCamera stroke={1.5} color="#5B78F6" height={'48'} width={'48'} />
                            <IconBrush stroke={1.5} color="#5B78F6" height={'48'} width={'48'} />
                            <IconCircles stroke={1.5} color="#5B78F6" height={'48'} width={'48'} />
                            <IconDeviceLaptop stroke={1.5} color="#5B78F6" height={'48'} width={'48'} />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase">specialization</div>
                        <CardTitle className="text-xl font-semibd">Services Offering</CardTitle>
                    </CardContent>
                </Card>

                <Card className=" bg-white w-1/4 rounded-3xl shadow border-none flex flex-col">
                    <CardHeader className="px-20 h-32">
                        <div className="relative w-full h-full pt-8 flex justify-between items-center">
                            <IconBallBasketball stroke={1.5} color="#5B78F6" height={'48'} width={'48'} />

                            <IconBrandTwitter stroke={1.5} color="#5B78F6" height={'48'} width={'48'} />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase">stay with me</div>
                        <CardTitle className="text-xl font-">Profiles</CardTitle>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
