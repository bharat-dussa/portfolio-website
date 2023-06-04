const author = "Bharat Dussa";
const description =
	"";
const url = "https://bharat-dussa.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://bharat-dussa.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Bharat Dussa",
		"Bharat Dussa - software developer",
		"Frontend developer",
		"React developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
