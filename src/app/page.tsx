import About from "@/components/About";
import ClientsCard from "@/components/ClientsCard";
import CredentialsCard from "@/components/CredentialsCard";
import FontsServicesProfiles from "@/components/FontsServicesProfiles";
import { MenubarDemo } from "@/components/MenubarDemo";
import ProfileCard from "@/components/ProfileCard";
import ProjectDetails from "@/components/ProjectDetails";
import { SiteFooter } from "@/components/SiteFooter";
import Works from "@/components/Works";


export default function Home() {
  return (
    <div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-20">
        <MenubarDemo />
        <div className="space-y-6">
            <div className="flex gap-6">
                <ProfileCard />
                <CredentialsCard />
            </div>
            <FontsServicesProfiles />
            <ClientsCard />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
