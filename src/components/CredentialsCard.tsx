import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CredentialsCard() {
    return (
        <div className="flex flex-col gap-4  rounded-lg">
            <Card className="max-w-[500  bg-white rounded-2xl shadow border-none shadow- flex ">
                <CardHeader className="">
                    <div className="text-sm text-gray-500 uppercase">Latest work featured here</div>
                </CardHeader>

            </Card>
            <div className="flex gap-4">
                <Card className=" bg-white rounded-2xl shadow flex flex-col">
                    <CardHeader className="p-3 ">
                        <div className="relative w-full h-32">
                            <Image
                                className="rounded-t-lg"
                                src="/sign.png" // Replace with your image path
                                alt="David Henderson"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase">More About me</div>
                        <CardTitle className="text-xl font-">Credentials</CardTitle>
                        <div className="flex items-center space-x-2">
                            {/* <div className="text-gray-500">{'->'}</div> */}
                        </div>
                    </CardContent>
                </Card>
                <Card className=" bg-white rounded-2xl shadow flex flex-col">
                    <CardHeader className="p-3 ">
                        <div className="relative w-full h-32">
                            <Image
                                className="rounded-t-lg"
                                src="/my-works.png" // Replace with your image path
                                alt="David Henderson"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase">showcase</div>
                        <CardTitle className="text-xl font-">Projects</CardTitle>
                        <div className="flex items-center space-x-2">
                            {/* <div className="text-gray-500">{'->'}</div> */}
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
