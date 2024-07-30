import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ProfileCard() {
    return (
        <Card className="max-w-[500px] bg-white rounded-2xl border-none shadow-none flex p-4">
            <CardHeader className="p-3 w-1/2">
                <div className="relative w-full h-48">
                    <Image
                        className="rounded-t-lg"
                        src="/mypicSmallreverted.png" // Replace with your image path
                        alt="David Henderson"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-start p-10 space-y-2 w-1/2">
                <div className="text-sm text-gray-500 uppercase">a web developer</div>
                <CardTitle className="text-2xl font-bold">Muhammad Abbas</CardTitle>
                <CardDescription>I am a Web Developer based in Islamabad.</CardDescription>
                <div className="flex items-center space-x-2">
                    <div className="text-gray-500">{'->'}</div>
                </div>
            </CardContent>
        </Card>
    );
}
