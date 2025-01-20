// 'use client'
// import Image from "next/image";
// import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import { useRouter } from "next/navigation";
// import { SparkleLine } from "./Sparke-line";
// import { useState } from "react";

// export default function CredentialsCard() {
//     const router = useRouter();
//     const [hoveredCard, setHoveredCard] = useState<string | null>(null);

//     return (
//         <div className="flex flex-col gap-6 w-full">
//             <Card className="max-w-[500  bg-white rounded-3xl shado borde flex ">
//                 <CardHeader className="">
//                     <div className="text-sm text-gray-500 uppercase">Latest work featured here</div>
//                 </CardHeader>

//             </Card>
//             <div className="flex gap-6">
//                 <Card
//                 onMouseEnter={() => setHoveredCard('card1')}
//                 onMouseLeave={() => setHoveredCard(null)}
//                     onClick={() => router.push('/works')}
//                     className=" bg-white w-full rounded-3xl shado border-no flex flex-col cursor-pointer p"
//                 >
//                     <CardHeader className="p-0">
//                         <div className="relative w-full h-32 p-0 flex items-center justify-center">
//                             <Image
//                                 // className="rounded-t-lg"
//                                 src="/sign.png" // Replace with your image path
//                                 alt="David Henderson"
//                                 layout="fill"
//                                 objectFit="contain"
//                             />
//                         </div>
//                     </CardHeader>
//                     <div className="flex items-center justify-between pt-10">
//                         <CardContent
//                             className="flex flex-col items-start  space-y-2"
//                         >
//                             <div className="text-xs font-medium text-gray-400 uppercase">showcase</div>
//                             <CardTitle className="text-xl font-">Projects</CardTitle>
//                         </CardContent>
//                         <div className="">
//                             <SparkleLine />
//                         </div>

//                     </div>
//                 </Card>
//                 <Card
//                     onClick={() => router.push('/works')}
//                     onMouseEnter={() => setHoveredCard('card2')}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className=" bg-white w-full rounded-3xl shado border-no flex flex-col cursor-pointer p"
//                 >
//                     <CardHeader className="p-0">
//                         <div className="relative w-full h-32 p-0 flex items-center justify-center">
//                             <Image
//                                 // className="rounded-t-lg"
//                                 src="/my-works.png" // Replace with your image path
//                                 alt="David Henderson"
//                                 layout="fill"
//                                 objectFit="contain"
//                             />
//                         </div>
//                     </CardHeader>
//                     <div className="flex items-center justify-between pt-10">
//                         <CardContent
//                             className="flex flex-col items-start  space-y-2"
//                         >
//                             <div className="text-xs font-medium text-gray-400 uppercase">showcase</div>
//                             <CardTitle className="text-xl font-">Projects</CardTitle>
//                         </CardContent>
//                         <div className="">
//                             <SparkleLine />
//                         </div>

//                     </div>
//                 </Card>
//             </div>
//         </div>
//     );
// }


'use client';
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SparkleLine } from "./Sparke-line";

export default function CredentialsCard() {
    const router = useRouter();
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-6 w-full">
            <Card className="max-w-[500] bg-white rounded-3xl  border flex">
                <CardHeader>
                    <div className="text-sm text-gray-500 uppercase">Latest work featured here</div>
                </CardHeader>
            </Card>
            <div className="flex gap-6">
                {/* First Card */}
                <Card
                    onClick={() => router.push('/works')}
                    onMouseEnter={() => setHoveredCard('card1')}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white w-full rounded-3xl  border-no flex flex-col cursor-pointer"
                >
                    <CardHeader className="p-0">
                        <div className="relative w-full h-32 p-0 flex items-center justify-center">
                            <Image
                                src="/sign.png"
                                alt="David Henderson"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </CardHeader>
                    <div className="flex items-center justify-between pt-10">
                        <CardContent className="flex flex-col items-start space-y-2">
                            <div className="text-xs font-medium text-gray-400 uppercase">showcase</div>
                            <CardTitle className="text-xl font-semibold">Projects</CardTitle>
                        </CardContent>
                        <SparkleLine hovered={hoveredCard === 'card1'} />
                    </div>
                </Card>

                {/* Second Card */}
                <Card
                    onClick={() => router.push('/works')}
                    onMouseEnter={() => setHoveredCard('card2')}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white w-full rounded-3xl  border-no flex flex-col cursor-pointer"
                >
                    <CardHeader className="p-0">
                        <div className="relative w-full h-32 p-0 flex items-center justify-center">
                            <Image
                                src="/my-works.png"
                                alt="David Henderson"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </CardHeader>
                    <div className="flex items-center justify-between pt-10">
                        <CardContent className="flex flex-col items-start space-y-2">
                            <div className="text-xs font-medium text-gray-400 uppercase">showcase</div>
                            <CardTitle className="text-xl font-semibold">Projects</CardTitle>
                        </CardContent>
                        <SparkleLine hovered={hoveredCard === 'card2'} />
                    </div>
                </Card>
            </div>
        </div>
    );
}
