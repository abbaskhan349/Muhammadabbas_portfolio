'use client'
import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ProfileCard() {
    const router = useRouter();
    return (
        <Card
            onClick={() => router.push('/about')}
            className="max-w-[500 bg-white rounded-3xl borde shadow-none flex justify-center items-center p-4 cursor-pointer">
            <CardHeader className="p- w-1/2 rounded-br-2xl">
                <div className="relative w-60 h-60 bg-blue-300 rounded-tl-2xl rounded-br-2xl">
                    <Image
                        className=" rounded-br-2xl "
                        src="/mypicSmallreverted.png" // Replace with your image path
                        alt="David Henderson"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-center p-10 space-y-2 w-1/2">
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
