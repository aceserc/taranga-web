import { getTechfestData } from '@/helpers/get-techfest-data';
import HeroSection from './_components/hero-section';
import { TechfestLabel } from '@/data/techfest';
import Error404 from '@/components/blocks/404';
import MarqueeWithHeader from '@/components/globals/marquee-with-header';
import compact from '@/helpers/compact';
import { sponsors } from '@/data/sponsors';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Page = ({
	params: { techfestVersion },
}: {
	params: { techfestVersion: string };
}) => {
	const techfestData = getTechfestData(techfestVersion as TechfestLabel);
	if (!techfestData) return <Error404 className="h-[90vh]" />;

	const titleSponsors = sponsors.filter((s) => s.type === 'Title Sponsor');
	const eventSponsors = sponsors.filter((s) => s.type === 'Event Sponsor');
	const otherSponsors = sponsors.filter(
		(s) => s.type !== 'Title Sponsor' && s.type !== 'Event Sponsor'
	);
	return (
		<div className="container my-16 sm:mt-20 xl:mt-24 flex flex-col gap-12">
			<HeroSection
				desc={techfestData.landingPage.desc}
				title={techfestData.landingPage.header}
				techfestVersion={techfestVersion}
				previewVideo={techfestData.landingPage.previewVideo}
				titleSponsor={techfestData.partners?.titleSponsor}
			/>

			{/* Sponsors Section */}
			<div className="container flex flex-col gap-4 max-w-6xl mt-8">
				<h1 className="text-4xl font-bold text-center mb-4">Our Sponsors</h1>
				{/* Title Sponsors */}
				{titleSponsors.length > 0 && (
					<div className="flex flex-col items-center gap-6">
						<h2 className="text-2xl font-semibold text-primary">
							Title Sponsor
						</h2>
						<div className="flex flex-wrap justify-center gap-1">
							{titleSponsors.map((sponsor, index) => (
								<Link
									href={sponsor.url ?? '#'}
									key={index}
									target="_blank"
									rel="noopener noreferrer">
									<div className="group relative flex flex-col items-center gap-4 bg-white/80 rounded-xl border hover:border-primary transition-all duration-300">
										<div className="relative w-full h-24">
											<Image
												src={`/assets/images/sponsors/${sponsor.logo}`}
												alt={sponsor.name}
												fill
												className="object-contain group-hover:scale-105 transition-transform duration-300"
											/>
										</div>
										<div className="flex flex-col items-center gap-1 p-4 border-t bg-card w-full">
											<p className="font-medium text-lg group-hover:text-primary transition-colors text-center">
												{sponsor.name}
											</p>
											<span className="text-sm text-yellow-500 font-bold uppercase tracking-wider text-center">
												{sponsor.type} Sponsor
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}
				{/* Event Sponsors */}
				{eventSponsors.length > 0 && (
					<div className="flex flex-col items-center gap-6">
						<h2 className="text-2xl font-semibold text-primary">
							Event Sponsors
						</h2>
						<div className="flex  flex-wrap justify-center gap-8">
							{eventSponsors.map((sponsor, index) => (
								<Link
									href={sponsor.url ?? '#'}
									key={index}
									target="_blank"
									rel="noopener noreferrer"
									className="w-50 sm:w-34">
									<Card className="h-full flex flex-col hover:border-primary transition-all duration-300 group overflow-hidden">
										<CardContent className="p-6 flex items-center justify-center flex-grow bg-white/80">
											<div className="relative w-40 h-10">
												<Image
													src={`/assets/images/sponsors/${sponsor.logo}`}
													alt={sponsor.name}
													fill
													className="object-contain group-hover:scale-105 transition-transform duration-300"
												/>
											</div>
										</CardContent>
										<CardFooter className="flex flex-col items-center gap-1 p-2 border-t">
											<p className="font-semibold group-hover:text-primary transition-colors text-center">
												{sponsor.name}
											</p>
											<p className="text-xs text-muted-foreground uppercase tracking-wide text-center">
												{sponsor.type}
											</p>
										</CardFooter>
									</Card>
								</Link>
							))}
						</div>
					</div>
				)}

				{/* Other Sponsors Grid */}
				{otherSponsors.length > 0 && (
					<div className="flex flex-wrap justify-center gap-6 mt-8">
						{otherSponsors.map((sponsor, index) => (
							<Link
								href={sponsor.url ?? '#'}
								key={index}
								target="_blank"
								rel="noopener noreferrer"
								className="w-50 sm:w-34">
								<Card className="h-full flex flex-col hover:border-primary transition-all duration-300 group overflow-hidden">
									<CardContent className="p-6 flex items-center justify-center flex-grow bg-white/80">
										<div className="relative w-40 h-10">
											<Image
												src={`/assets/images/sponsors/${sponsor.logo}`}
												alt={sponsor.name}
												fill
												className="object-contain group-hover:scale-105 transition-transform duration-300"
											/>
										</div>
									</CardContent>
									<CardFooter className="flex flex-col items-center gap-1 p-4 border-t">
										<p className="font-semibold group-hover:text-primary transition-colors text-center">
											{sponsor.name}
										</p>
										<p className="text-xs text-muted-foreground uppercase tracking-wide text-center">
											{sponsor.type}
										</p>
									</CardFooter>
								</Card>
							</Link>
						))}
					</div>
				)}
			</div>

			<div className="flex flex-col items-center justify-center mt-16 gap-12 opacity-70">
				{techfestData.partners?.more?.map((p) => {
					return (
						<MarqueeWithHeader
							title={p.type}
							id={p.type}
							//@ts-expect-error:'///
							data={
								p.type.toLowerCase() === 'sponsors' &&
								techfestData?.partners?.titleSponsor
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
