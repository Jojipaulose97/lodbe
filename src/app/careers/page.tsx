import { CareersHero } from '../components/sections/careers/CareersHero';
import { WhyJoin } from '../components/sections/careers/WhyJoin';
import { WhatWeBuilding } from '../components/sections/careers/WhatWeBuilding';
import { OpenRoles } from '../components/sections/careers/OpenRoles';
import { WhoWeLookingFor } from '../components/sections/careers/WhoWeLookingFor';
import { WorkCulture } from '../components/sections/careers/WorkCulture';
import { ApplySection } from '../components/sections/careers/ApplySection';

export const metadata = {
  title: 'Careers | LODBE',
  description: 'Join LODBE and help build the future of digital business ecosystems. View open roles in engineering, AI, design, and product.',
};

export default function CareersPage() {
  return (
    <main className="w-full">
      <CareersHero />
      <WhyJoin />
      <WhatWeBuilding />
      <OpenRoles />
      <WhoWeLookingFor />
      <WorkCulture />
      <ApplySection />
    </main>
  );
}