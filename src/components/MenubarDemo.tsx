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

export function MenubarDemo() {
    return (
        <div className="flex justify-between p-4">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Muhammad Abbas
            </h2>
            <Menubar className=" rounded-none border-0">
                <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>

                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>About</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Works</MenubarTrigger>

                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Contact</MenubarTrigger>

                </MenubarMenu>
            </Menubar>
            <Button className="rounded-2xl px-6">Let&apos;s Talk</Button>
        </div>
    )
}
