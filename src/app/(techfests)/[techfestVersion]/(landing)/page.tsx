import { getTechfestData } from "@/helpers/get-techfest-data";
import HeroSection from "./_components/hero-section";
import { TechfestLabel } from "@/data/techfest";
import Error404 from "@/components/blocks/404";
import MarqueeWithHeader from "@/components/globals/marquee-with-header";
import compact from "@/helpers/compact";

const Page = ({
  params: { techfestVersion },
}: {
  params: { techfestVersion: string };
}) => {
  const techfestData = getTechfestData(techfestVersion as TechfestLabel);
  if (!techfestData) return <Error404 className="h-[90vh]" />;

  return (
    <div className="container my-16 sm:mt-20 xl:mt-24 flex flex-col gap-12">
      <HeroSection
        desc={techfestData.landingPage.desc}
        title={techfestData.landingPage.header}
        techfestVersion={techfestVersion}
        previewVideo={techfestData.landingPage.previewVideo}
        titleSponsor={techfestData.partners?.titleSponsor}
      />
      <div className="flex flex-col items-center justify-center mt-16 gap-12 opacity-70">
        {techfestData.partners?.more?.map((p) => {
          return (
            <MarqueeWithHeader
              title={p.type}
              id={p.type}
              //@ts-expect-error:'///
              data={
                p.type.toLowerCase() === "sponsors"
                  ? compact(
                      p.partners.map((partner) => [
                        partner,
                        techfestData?.partners?.titleSponsor,
                      ])
                    ).flat()
                  : p.partners
              }
              key={p.type}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Page;
