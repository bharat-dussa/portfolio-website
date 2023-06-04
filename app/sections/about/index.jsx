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
							My name is Bharat Dussa, and I successfully graduated from the University of Mumbai
							with a<span className="text-orange-300"> bachelor&apos;s degree in Computers.</span>
						</p>
						<p className="my-3.5">
							During my university years, I developed a keen interest in programming and networking,
							constantly seeking opportunities to learn new concepts and techniques in the field.
						</p>
						<p className="my-3.5">
							Since graduating, I have dedicated myself to expanding my skills and knowledge in
							React, continuously learning and staying up to date with the latest advancements in
							the framework.
						</p>
						<p className="my-3.5">
							I am passionate about applying my expertise to develop innovative web solutions and
							contribute to projects that push the boundaries of web development.
						</p>
						<p>
							As part of my learning journey, I discovered React, a powerful JavaScript library for
							building user interfaces. I was instantly captivated by its speed and efficiency in
							website development, as well as its ease of maintenance. Motivated by this, I delved
							into React and embarked on a freelancing journey, assisting clients in leveraging
							<span className="text-orange-300"> React</span> to create modern and dynamic websites.
							<span className="text-orange-300"> Node</span> for backend, and some stuff in{" "}
							<span className="text-orange-300"> NextJs</span>
						</p>
						<p className="my-3.5">I enjoy learning technologies that interest me</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
