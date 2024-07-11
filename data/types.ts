type GridItem = {
	id: number;
	title: string;
	description: string;
	className: string;
	imgClassName: string;
	titleClassName: string;
	img: string;
	spareImg: string;
};

type NavItem = {
	name: string;
	link: string;
	// icon: React.ReactNode;
};

type Project = {
	id: number;
	title: string;
	description: string;
	img: string;
	iconLists: string[];
	link: string;
};

type Testimonial = {
	quote: string;
	name: string;
	title: string;
};

type Company = {
	id: number;
	name: string;
	img: string;
	nameImg: string;
};

type WorkExperience = {
	id: number;
	title: string;
	company: string;
	role: string;
	date: string;
	description: string;
};

type SocialMedia = {
	name: string;
	link: string;
	icon: React.ReactNode;
};