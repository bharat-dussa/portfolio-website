"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Bharat Dussa. I successfully graduated from University of Mumbai in
							bachelors of Computers
						</p>
						<p>
							During my university years, I developed a kneen interest for programming and networking, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with WordPress.
						</p>
						<p>
							I started learning React. I was so excited to see how fast I can build a website with it, and how easy it is to maintain
							it. Consequently, I do freelancing for possible candidates
						</p>
						<p className="my-3.5">
							I started my React journey from Nov 2020 after graduation, and learn new things while working.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
