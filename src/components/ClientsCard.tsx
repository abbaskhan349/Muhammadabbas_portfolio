import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconBallBasketball, IconBrandTwitter, IconBrush, IconCamera, IconCircles } from "@tabler/icons-react";

export default function ClientsCard() {
    return (
        <div className="">

            <div className="flex gap-6 ">
                <Card className="bg-white w-1/2 rounded-3xl shadow p-12 border-none flex justify-between items-center">
                    <CardContent className="flex flex-col items-center space-y-4 text-center">
                        <div className="text-4xl font-medium text-blue-500 uppercase">02</div>
                        <div className="text-xs font-medium text-gray-400 uppercase">Years Experience</div>
                    </CardContent>
                    <CardContent className="flex flex-col items-center space-y-4 text-center">
                        <div className="text-4xl font-medium text-blue-500 uppercase">+10</div>
                        <div className="text-xs font-medium text-gray-400 uppercase">Clients Worldwide</div>
                    </CardContent>
                    <CardContent className="flex flex-col items-center space-y-4 text-center">
                        <div className="text-4xl font-medium text-blue-500 uppercase">+20</div>
                        <div className="text-xs font-medium text-gray-400 uppercase">Total Projects</div>
                    </CardContent>
                </Card>

                <Card className="bg-white w-1/2 rounded-3xl shadow border-none flex flex-col">
                    {/* <CardHeader className="px-20 h-32"> */}
                    <div className="relative w-32 h-20 p-0 ">
                        <Image
                            src="/icon2-2.png" // Replace with your image path
                            alt="David Henderson"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    {/* </CardHeader> */}
                    <CardContent className="flex flex-col items-start pt-4 space-y-2 px-8 pb-12">
                        <CardTitle className="text-4xl font-semibold">Let&apos;s</CardTitle>
                        <CardTitle className="text-4xl font-semibold">Work <span className="text-blue-400">toghether</span></CardTitle>

                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
