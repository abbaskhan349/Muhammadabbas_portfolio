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
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 space-y-8">
        <MenubarDemo />

        {/* =============================== Home section ================ */}
        <div className="flex gap-4 ">
          <ProfileCard />
          <CredentialsCard />
        </div>
        <FontsServicesProfiles />
        <ClientsCard />

        {/* =============================== About section ================ */}
        {/* <About /> */}

        {/* =============================== Works section ================ */}
        {/* <Works /> */}

        {/* =============================== project details section ================ */}
            {/* <ProjectDetails /> */}
      </div>
      <SiteFooter />
    </div>
  );
}
