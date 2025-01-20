'use client'
import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SparkleLine } from "./Sparke-line";

export default function ProfileCard() {
    const router = useRouter();
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <Card
            onClick={() => router.push('/about')}
            onMouseEnter={() => setHoveredCard('card1')}
            onMouseLeave={() => setHoveredCard(null)}
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

            <div className="w-1/2">
                <CardContent className="flex flex-col items-start justify-center p-10 space-y-2 ">
                    <div className="text-sm text-gray-500 uppercase">a web developer</div>
                    <CardTitle className="text-3xl font-bold">Muhammad Abbas</CardTitle>
                    <CardDescription>I am a Web Developer based in Islamabad.</CardDescription>

                </CardContent>
                <div className=" flex justify-end top-4 relative">
                    <SparkleLine hovered={hoveredCard === 'card1'} />

                </div>
            </div>

        </Card>
    );
}
