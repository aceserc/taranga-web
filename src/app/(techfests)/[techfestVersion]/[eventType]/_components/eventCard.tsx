import React from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from './link';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Event } from '@/data/techfest';

function EventCard({
	e,
	eventType,
	techfestVersion,
}: {
	e: Event;
	eventType: string;
	techfestVersion: string;
}) {
	return (
		<div>
			<li className="mb-10 ms-6" key={e.eventId}>
				<div className="flex items-center justify-between gap-6">
					<div>
						<span className="absolute flex items-center justify-center w-6 h-6 p-1 rounded-full -start-3 bg-muted text-muted-foreground">
							<Calendar />
						</span>
						<div className="flex items-center mb-1 ">
							<div className="flex flex-col">
								{e.date ? (
									<Badge className="w-fit">{e.date}</Badge>
								) : (
									<Badge className="w-fit" variant={'outline'}>
										Soon
									</Badge>
								)}
								<h3 className="text-xl sm:text-3xl md:text-4xl mt-1 font-semibold text-foreground">
									{e.event?.title}
								</h3>
							</div>
							<div className="flex gap-2">
								<Badge
									className="ms-3 whitespace-nowrap max-sm:hidden"
									variant={'secondary'}>
									{eventType.substring(0, eventType.length - 1)}
								</Badge>
								{e.by && (
									<Badge className="max-sm:hidden" variant={'outline'}>
										{e.by}
									</Badge>
								)}
							</div>
						</div>
						<p className="mb-4 text-base font-normal text-foreground/80">
							{e.event?.desc}
						</p>
					</div>
					<Image
						src={e.event?.image ?? ''}
						className="object-center object-cover h-28 w-fit rounded-lg max-md:hidden"
						alt=""
						height={600}
						width={600}
					/>
				</div>
				<div className="flex items-center gap-3">
					<a
						href={`/events/#${e.eventId}`!}
						className={buttonVariants({
							variant: 'secondary',
							size: 'sm',
						})}>
						Know More
					</a>
					<Link
						event={e.eventId}
						eventType={eventType}
						href={e.href!}
						techfestVersion={techfestVersion}
					/>
				</div>
			</li>
		</div>
	);
}

export default EventCard;
