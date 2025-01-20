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
import { useRouter } from "next/navigation"
export function SiteFooter() {
    const router = useRouter();
  return (
    <footer className="py-20">
      <div className="container flex flex-col justify-center items-center  gap-4 md:h-24 md:flex-ro">

        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Muhammad Abbas
        </h2>
        <Menubar className=" rounded-none border-0 gap-10 text-gray-400">
          <MenubarMenu>
            <MenubarTrigger
                onClick={() => router.push('/')}
                className="text-sm hover:text-blue-400 cursor-pointer">
                    Home
            </MenubarTrigger>

          </MenubarMenu>
          <MenubarMenu>
          <MenubarTrigger
                onClick={() => router.push('/about')}
                className="text-sm hover:text-blue-400 cursor-pointer">
                About</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
                onClick={() => router.push('/works')}
                className="text-sm hover:text-blue-400 cursor-pointer">
                Works
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
                onClick={() => router.push('/contact')}
                className="text-sm hover:text-blue-400 cursor-pointer">
                Contact
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            // href={'#'}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Muhammad Abbas
          </a>
        </p>
      </div>
    </footer>
  )
}
