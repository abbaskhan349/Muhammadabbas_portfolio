
// import About from '@/components/About';
// import { MenubarDemo } from '@/components/MenubarDemo';
// import { SiteFooter } from '@/components/SiteFooter';
// import React from 'react';

// const AboutPage: React.FC = () => {
//   return (
//     <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-8">
//         <MenubarDemo />

//         {/* blog here */}

//         <SiteFooter />
//     </div>
//   );
// };

// export default AboutPage;


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MenubarDemo } from "@/components/MenubarDemo"
import { SiteFooter } from "@/components/SiteFooter"
import { Sparkles } from "lucide-react"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-20">
        <MenubarDemo />
        <div className="flex items-center  gap-2">
            <Sparkles className="h-8 w-8 text-blue-500" />
            <h1 className="text-4xl font-bold text-center">BLOG WITH RIGHTSIDEBAR</h1>
            <Sparkles className="h-8 w-8 text-blue-500" />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/">HOME</Link>
              <span className="mx-2">-</span>
              <span>BLOG</span>
            </div>
            <div className="space-y-12">
              {/* Blog Posts */}
              {[1, 2, 3].map((post) => (
                <Card key={post} className="border-none shadow-none bg-background">
                  <CardContent className="space-y-4 p-0">
                    <Image
                      src={
                        post === 1
                          ? "/project1.jpeg"
                          : "/project2.jpeg"
                      }
                      alt="Blog post image"
                      width={800}
                      height={400}
                      className="rounded-lg"
                    />
                    <div className="space-y-2">
                      <div className="flex gap-2 text-sm text-blue-500">
                        <span>25 March 2022</span>
                        <span>-</span>
                        <Link href="#">Comments (4)</Link>
                        <span>-</span>
                        <Link href="#">Share (7)</Link>
                      </div>
                      <h2 className="text-2xl font-bold">
                        {post === 1
                          ? "CONSULTED ADMITTING IS POWER ACUTENESS"
                          : post === 2
                            ? "DISCOVERY INCOMMODE EARNESTLY HE COMMANDED"
                            : "UNSATIABLE ENTREATIES MAY COLLECTING POWER"}
                      </h2>
                      <p className="text-muted-foreground">
                        Sit amet luctussd fav venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non
                        enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla
                        facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio
                        facilisis mauris sit.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0 pt-4">
                    <Button className="rounded-2xl">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-80 space-y-8">
            {/* Search */}
            <div className="flex gap-2">
              <Input placeholder="Search Here..." className="rounded-full" />
              <Button className="rounded-full">Search</Button>
            </div>

            {/* Recent Posts */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">RECENT POSTS</h3>
              <div className="space-y-2">
                {[
                  "Consulted admitting is power acuteness",
                  "Unsatiable entreaties may collecting Power",
                  "Discovery incommode earnestly no he commanded",
                  "Unsatiable entreaties may collecting Power",
                ].map((post, i) => (
                  <Link key={i} href="#" className="block text-muted-foreground hover:text-foreground">
                    {post}
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">CATEGORIES</h3>
              <div className="space-y-2">
                {["Analysis", "Firewall", "IT Solutions", "Security", "Technology"].map((category, i) => (
                  <Link key={i} href="#" className="block text-muted-foreground hover:text-foreground">
                    -{category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">TAGS</h3>
              <div className="flex flex-wrap gap-2">
                {["SAAS", "Development", "UI/UX", "Web", "Figma", "Java", "WordPress"].map((tag, i) => (
                  <Badge key={i} variant="secondary" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SiteFooter />
      </div>
    </div>
  )
}

export default AboutPage
