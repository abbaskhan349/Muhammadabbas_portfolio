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
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" >
                Muhammad Abbas
            </h2>
            <Menubar className=" rounded-none border-0">
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push('/')}>Home</MenubarTrigger>

                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push('/about')}>About</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push('/works')}>Works</MenubarTrigger>

                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger onClick={() => router.push('/contact')}>Contact</MenubarTrigger>

                </MenubarMenu>
            </Menubar>
            <Button className="rounded-2xl px-6">Let&apos;s Talk</Button>
        </div>
    )
}
