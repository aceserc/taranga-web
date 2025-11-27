import Error404 from '@/components/blocks/404';
import { TechfestLabel } from '@/data/techfest';
import { getTechfestDataWithEvents } from '@/helpers/get-techfest-data-with-events';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventCard from './_components/eventCard';

const EVENT_TYPES = ['pre-events', 'post-events', 'main-events'];

const Page = async ({
	params: { eventType, techfestVersion },
}: {
	params: { eventType: string; techfestVersion: string };
}) => {
	if (!EVENT_TYPES.includes(eventType)) {
		return <Error404 className="min-h-[85vh]" />;
	}

	const taranga = await getTechfestDataWithEvents(
		techfestVersion as TechfestLabel
	);

	if (!taranga) {
		return <Error404 className="min-h-[85vh]" />;
	}

	const tabs = [
		{
			value: 'all',
			name: 'All Events',
		},
		{
			value: 'aces',
			name: 'By ACES',
		},
		{
			value: 'excess',
			name: 'By EXCESS',
		},
	];

	const data =
		eventType === 'pre-events'
			? taranga?.preEvents
			: eventType === 'main-events'
			? taranga?.mainEvents
			: taranga?.postEvents;

	return (
		<div className="container my-16 sm:mt-20 xl:mt-24 flex flex-col gap-12 min-h-[80vh] max-w-4xl">
			{!data || data?.length === 0 ? (
				<div className="h-[60vh] text-muted-foreground text-lg text-center flex items-center justify-center">
					No events to show!
				</div>
			) : (
				<>
					<Tabs defaultValue="all" className="gap-4 ">
						<TabsList className="bg-background rounded-none border-b p-0">
							{tabs.map((tab) => (
								<TabsTrigger
									key={tab.value}
									value={tab.value}
									className="bg-background data-[state=active]:border-primary dark:data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent data-[state=active]:shadow-none">
									{tab.name}
								</TabsTrigger>
							))}
						</TabsList>

						{tabs.map((tab) => (
							<TabsContent
								key={tab.value}
								value={tab.value}
								className="space-y-6 my-6">
								{(() => {
									let filteredEvents = data;
									if (tab.value === 'aces') {
										filteredEvents = data.filter(
											(event) => event.by?.toLowerCase() === 'aces'
										);
									} else if (tab.value === 'excess') {
										filteredEvents = data.filter(
											(event) => event.by?.toLowerCase() === 'excess'
										);
									}
									return filteredEvents.map((event, i) => (
										<ol
											className="relative border-s border-muted-foreground"
											key={i}>
											<EventCard
												e={event}
												eventType={eventType}
												techfestVersion={techfestVersion}
											/>
										</ol>
									));
								})()}
							</TabsContent>
						))}
					</Tabs>
				</>
			)}
		</div>
	);
};
export default Page;
