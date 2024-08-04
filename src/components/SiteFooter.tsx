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
export function SiteFooter() {
  return (
    <footer className="py-12 my-12">
      <div className="container flex flex-col justify-center items-center  gap-4 md:h-24 md:flex-ro">

        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Muhammad Abbas
        </h2>
        <Menubar className=" rounded-none border-0 gap-10 text-gray-400">
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