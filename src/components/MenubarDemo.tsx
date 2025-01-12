'use client'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function MenubarDemo() {
    const router = useRouter();
    return (
        <div className="flex justify-between p-4">
            <h2 onClick={() => router.push('/')} className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 cursor-pointer" >
                Muhammad Abbas
            </h2>
            <Menubar className=" rounded-none border-0">
                <MenubarMenu>
                    <MenubarTrigger className="text-[#949597] hover:text-black" onClick={() => router.push('/')}>Home</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-[#949597] hover:text-black" onClick={() => router.push('/about')}>About</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-[#949597] hover:text-black" onClick={() => router.push('/works')}>Works</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-[#949597] hover:text-black" onClick={() => router.push('/contact')}>Contact</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
            <Button className="rounded-2xl px-6">Let&apos;s Talk</Button>
        </div>
    )
}
