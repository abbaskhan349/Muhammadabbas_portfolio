import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function CredentialsCard() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <Card className="max-w-[500  bg-white rounded-3xl shadow border-none flex ">
                <CardHeader className="">
                    <div className="text-sm text-gray-500 uppercase">Latest work featured here</div>
                </CardHeader>

            </Card>
            <div className="flex gap-4 ">
                <Card className=" bg-white w-full rounded-3xl shadow border-none flex flex-col">
                    <CardHeader className="p-0">
                    <div className="relative w-full h-32 p-0 flex items-center justify-center">
                    <Image
                                // className="rounded-t-lg"
                                src="/sign.png" // Replace with your image path
                                alt="David Henderson"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase">More About me</div>
                        <CardTitle className="text-xl font-">Credentials</CardTitle>

                    </CardContent>
                </Card>
                <Card className="bg-white w-full rounded-3xl border-none shadow flex flex-col">
                    <CardHeader className="p-0">
                        <div className="relative w-full h-32 p-0">
                            <Image
                                src="/my-works.png" // Replace with your image path
                                alt="David Henderson"
                                layout="fill"
                                objectFit="contain" // Ensure the image fits within the container without being cropped
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col items-start p-10 space-y-2">
                        <div className="text-xs font-medium text-gray-400 uppercase">showcase</div>
                        <CardTitle className="text-xl font-semibold">Projects</CardTitle>
                        <div className="flex items-center space-x-2">
                            {/* Additional content can be added here */}
                        </div>
                    </CardContent>
                </Card>

            </div>

        </div>
    );
}
