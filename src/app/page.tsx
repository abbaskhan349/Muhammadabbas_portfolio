import CredentialsCard from "@/components/CredentialsCard";
import { MenubarDemo } from "@/components/MenubarDemo";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-8">
      <MenubarDemo />

      {/* <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>

          </CardContent>

        </Card> */}
      <div className="flex gap-4 ">
        <ProfileCard />
        <CredentialsCard />
      </div>

    </div>
  );
}
