export interface Sponsor {
	name: string;
	logo: string;
	url?: string;
	type: string;
}

export const sponsors: Sponsor[] = [
	{
		name: 'Digital Pathshala',
		logo: 'DigitalPathshala.png',
		url: 'https://www.digitalpathshalanepal.com/',
		type: 'Title Sponsor',
	},
	{
		name: 'Ultima Lifestyle',
		logo: 'Ultima.png',
		url: 'https://ultima.com.np/',
		type: 'Powered By',
	},
	{
		name: 'Github Education',
		logo: 'Github.png',
		url: 'https://github.com/',
		type: 'Co-Sponsor',
	},
	{
		name: 'Rato Guras',
		logo: 'RatoGuras.png',
		url: 'https://ratoguras.com/',
		type: 'Event Sponsor',
	},
	{
		name: 'Easy Fix Mobile Solutions',
		logo: 'EasyFix.png',
		type: 'Event Sponsor',
	},
	{
		name: 'Code IT',
		logo: 'CodeIT.png',
		url: 'https://codeit.com.np/',
		type: 'Event Sponsor',
	},
	{
		name: 'WorldLink',
		logo: 'WorldLink.png',
		url: 'https://worldlink.com.np/',
		type: 'ISP Partner',
	},
	{
		name: 'NativesPlug',
		logo: 'NativesPlug.jpg',
		url: 'https://www.nativesplug.com/',
		type: 'Learning Partner',
	},
];
