import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ClientsCard from "./ClientsCard";
import FontsServicesProfiles from "./FontsServicesProfiles";
import { IconBallBasketball, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";
import { Button } from "./ui/button";

export default function MoreAbout() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-6 mb-10">
                <div className="w-1/3">
                    <Card className="bg-white rounded-3xl borde shadow-none flex justify-center items-center p-">
                        <CardHeader className="space-y-8 items-center text-center">
                            <div className="relative w-80 h-80 bg-blue-400 rounded-3xl">
                                <Image
                                    className="rounded-3xl"
                                    src="/mypicSmallreverted.png"
                                    alt="mypic"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div>
                                <p className="text-2xl font-[500]">Muhammad Abbas</p>
                                <p>@abbaskhan</p>
                            </div>
                            <div className="flex gap-8">
                                <IconBallBasketball stroke={1.5} color="#5B78F6" height={'24'} width={'20'} />

                                <IconBrandTwitter stroke={1.5} color="#5B78F6" height={'24'} width={'20'} />
                                <IconBrandInstagram stroke={1.5} color="#5B78F6" height={'24'} width={'24'} />

                                <IconBrandFacebook stroke={1.5} color="#5B78F6" height={'24'} width={'24'} />
                            </div>
                            <Button className="rounded-2xl w-full text">Contact Me</Button>
                        </CardHeader>
                    </Card>
                </div>
                <div className="flex w-2/3 pl-10 flex-col gap-20">
                    <div className="space-y-3">
                        <p className="text-lg font-medium tracking-wide uppercase">About me</p>
                        <p className="text-gray-400 tracking-wide">
                                Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                        </p>
                        <p className="text-gray-400 tracking-wide">
                            Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.
                        </p>
                    </div>

                    <div>
                        <CardTitle className="text-lg font-medium uppercase mb-4">Experience</CardTitle>
                        <div className="mb-10">
                            <div className="text-gray-300 font-medium">2007 - 2017</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Framer Designer & Developer
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Bluebase Designs</div>
                            <div className="text-gray-400 mb-4">
                                Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                            </div>
                        </div>

                        <div>
                            <div className="text-gray-300 font-medium">2007 - 2017</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Framer Designer & Developer
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Bluebase Designs</div>
                            <div className="text-gray-400 mb-4">
                                Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                            </div>
                        </div>
                    </div>

                    <div>
                        <CardTitle className="text-lg font-medium uppercase mb-4">Education</CardTitle>
                        <div className="mb-10">
                            <div className="text-gray-300 font-medium">2004 - 2007</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Bachelor Degree in Psychology
                            </CardTitle>
                            <div className="text-gray-300 text-sm">University of California</div>
                            <div className="text-gray-400 mb-4">
                                Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="text-gray-300 font-medium">2004 - 2007</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Bachelor Degree in Psychology
                            </CardTitle>
                            <div className="text-gray-300 text-sm">University of California</div>
                            <div className="text-gray-400 mb-4">
                                Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.
                            </div>
                        </div>
                    </div>

                    <div>
                        <CardTitle className="text-lg font-medium uppercase mb-4">skills</CardTitle>

                        <div className="grid grid-cols-2">
                            <div className="mb-10">
                                <div className="text-gray-300 font-medium">85%</div>
                                <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                    Javascript
                                </CardTitle>
                                <div className="text-gray-300 text-sm">Non enim praesent</div>
                            </div>
                            <div className="mb-10">
                                <div className="text-gray-300 font-medium">85%</div>
                                <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                    Javascript
                                </CardTitle>
                                <div className="text-gray-300 text-sm">Non enim praesent</div>
                            </div>
                            <div className="mb-10">
                            <div className="text-gray-300 font-medium">85%</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Javascript
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Non enim praesent</div>
                        </div>
                        <div className="mb-10">
                            <div className="text-gray-300 font-medium">85%</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Javascript
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Non enim praesent</div>
                        </div><div className="mb-10">
                            <div className="text-gray-300 font-medium">85%</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Javascript
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Non enim praesent</div>
                        </div><div className="mb-10">
                            <div className="text-gray-300 font-medium">85%</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Javascript
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Non enim praesent</div>
                        </div>
                        </div>
                    </div>

                    <div>
                        <CardTitle className="text-lg font-medium uppercase mb-4">Awards</CardTitle>
                        <div className="mb-10">
                            <div className="text-gray-300 font-medium">14 May 2020</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Bluebase
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Bluebase Designs</div>
                        </div>

                        <div>
                            <div className="text-gray-300 font-medium">14 May 2020</div>
                            <CardTitle className="text-lg font-medium text-blue-500 mt-2">
                                Developer
                            </CardTitle>
                            <div className="text-gray-300 text-sm">Bluebase Designs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
