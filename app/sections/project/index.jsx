import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	// const { data, error } = useSWR(url, fetcher);
	// const projects = data?.result;

	// if (error && !data) {
	// 	return null;
	// }

	const projects = [
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81qqER3XnXnene-47ly6qVRl-qQHPM9gPYglin_aq7LbgjHBwS1pQlM1j5IRM9wvnVs7Kp1f3-JLX3TIHvYfErqIW9CcUA=s1600"],
			liveUrl: "https://www.docktimer.com/",
			repoUrl: "",
			stack: ["React", "nodejs", "Material UI", "Styled Components", "mongoDb", "AWS"],
			title: "Docktimer | Freelancing"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81oebejuJtjHiMx3MF_Y0HWZKRraSCHP7JcZxt7pyn55T4B8WGlVZ_RHojXMc39-n0nDYcfRWRkClH9Otq2A0LCrmpvluw=s1600"],
			liveUrl: "https://www.tss-sanstha.com/",
			repoUrl: "",
			stack: ["React", "tailwind css"],
			title: "Telugu Samaj Shikshan Sanstha"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81pTizRNWRcizhufxZ5OYUP_W7aUyus4aCBv-8Aj_PevD9UQaWMO1sp_KDG-PKCFO0aEFRYmozBu0A8DzsMxYFp4ksolRA=s1600"],
			liveUrl: "https://gnine-creators.netlify.app/ramya-gopal-wedding",
			repoUrl: "",
			stack: ["React"],
			title: "Couple wedding photos gallery"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81rTNq0TDmKmILrBzj6Qc-GfhJaUu2I2Oo9Ml3e8tCH_zrkCqBEb6uqYUcNdpYh2QmdSkorrXUaL45yxfP514HhJ3Xe1dQ=s1600"],
			liveUrl: "https://vituarvom.com/",
			repoUrl: "",
			stack: ["React"],
			title: "Freelancing Site | Vituarvom"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81pl0nz81Oukfm1xLTpgFjUEV1JffxHLQv_K-CIlyGi3rH6ZaXWfUqUfXyI03kMTwnzewIg7tY4lMxOoDI1v6JhmowCa=s1600"],
			liveUrl: "https://nested-todo-app.vercel.app/",
			repoUrl: "",
			stack: ["React"],
			title: "Nested Todo App"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81pbBjDBwZDp350NclsM-gg8oTOWyLYk2UI9_gNjH_olP2ZmaYNxSrPTqJG2VOTV1vXCm1eMSjUbkm6CrdgOyxSNRPXtHA=s1600"],
			liveUrl: "https://web3-chat-app-sable.vercel.app/",
			repoUrl: "",
			stack: ["React", "antd design", "Web3", "Metamask wallet"],
			title: "Web3 Chat Application"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81pjsE_ALbfzZ7_hMeYgQPXeplCm1HKF-2RrHctRF249Wi1Y2rxA18f5KjbQGy1ITLFGVbZlQLVFn6XG97oHYAtBL_6LlA=s1600"],
			liveUrl: "https://hacker-news-deuex.netlify.app/",
			repoUrl: "",
			stack: ["React"],
			title: "News Website using hacker news api"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81rfqjrEJOVxVB7PPOLxkxV_4uJxFDiqfH4hFs39Ca5xbY383nND2v0T9Jf5UpaxEDZ_XChpHo6KEF1Da1uQP6RUBrOJ2w=s1600"],
			liveUrl: "https://real-estate-landing-page-lime.vercel.app/",
			repoUrl: "",
			stack: ["React"],
			title: "Real estate landing page"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81omP84hzsnXOHBvYNxMuSm9wA9z9knL77g7wRv26I6jcVvjzQG0l0XcyZow3rIq2izB9Kyd0DgPea6NerMHb6UGuhMTDQ=s1600"],
			liveUrl: "https://nostalgic-haibt-7b1fbe.netlify.app/",
			repoUrl: "",
			stack: ["html", "css"],
			title: "Copperants website"
		},
		{
			description: "",
			images: ["https://lh3.googleusercontent.com/drive-viewer/AFGJ81rysl0eCr2EYw7bUng4L-n-XE6deiaIGbTw77-_qLsjBdCX6ZF5Em19zksvyGjJiVAb9eKY1HUeeaY7Bp34nMyDO1AVbg=s1600"],
			liveUrl: "https://scoolonline.netlify.app/",
			repoUrl: "",
			stack: ["html", "css", "vue js"],
			title: "Scool online static website"
		}
	];

	return (
		<LazyMotion features={domAnimation} id="#projects">
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>
				</div>
			</section>
		</LazyMotion>
	);
}
