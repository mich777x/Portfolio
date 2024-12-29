import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";

// Data
const personalInfo = {
	name: "Nahom Michael",
	title: "Frontend Developer",
	email: "mnahom832@gmail.com",
	location: "Maryland, USA",
	profileImage: "/api/placeholder/300/300",
	github: "https://github.com/mich777x",
	linkedin: "https://www.linkedin.com/in/nahom-m-5944462a2/?trk=opento_sprofile_topcard",
};

const projects = [
	{
		title: "E-Commerce Platform",
		description: "A comprehensive e-commerce solution built with React and modern web technologies.",
		tags: ["React", "Tailwind CSS", "JavaScript"],
		image: "/api/placeholder/400/300",
		github: "https://github.com/mich777x/ecommerce.git",
		liveDemo: "https://ecommerce-lyart-delta-28.vercel.app/",
	},
	{
		title: "Task Management App",
		description: "Front-End Task Management App with React",
		tags: ["React", "Tailwind CSS", "JavaScript"],
		image: "/api/placeholder/400/300",
		github: "https://github.com/mich777x/task-management.git",
		liveDemo: "https://task-management-red-one.vercel.app/",
	},
	{
		title: "Blog Website",
		description: "Front-End Blog website with React and Tailwind CSS.",
		tags: ["React", "Tailwind CSS", "JavaScript"],
		image: "/api/placeholder/400/300",
		github: "https://github.com/mich777x/Blog.git",
		liveDemo: "https://blog-zeta-three-68.vercel.app/",
	},
];

const skills = [
	{
		name: "React",
	},
	{
		name: "TailwindCSS",
	},
	{
		name: "JavaScript",
	},
];

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 1500);

		const handleScroll = () => {
			const sections = document.querySelectorAll("section[id]");
			const scrollPosition = window.scrollY + 100;

			sections.forEach((section) => {
				const top = section.offsetTop;
				const height = section.offsetHeight;
				const id = section.getAttribute("id");

				if (scrollPosition >= top && scrollPosition < top + height) {
					setActiveSection(id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (isLoading) {
		return (
			<div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center">
				<div className="relative">
					<div className="w-16 h-16">
						<div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-[ping_1s_ease-in-out_infinite]" />
						<div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-[ping_1s_ease-in-out_infinite_0.3s]" />
						<div className="absolute w-full h-full border-4 border-blue-500 rounded-full" />
					</div>
				</div>
				<div className="mt-8 text-white text-lg font-medium animate-pulse">Welcome</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Navigation activeSection={activeSection} />

			<main>
				<section id="home" className="min-h-screen">
					<Hero personalInfo={personalInfo} />
				</section>

				<section id="projects" className="py-20">
					<Projects projects={projects} />
				</section>

				<section id="skills" className="py-20 bg-gray-50">
					<Skills skills={skills} />
				</section>

				<section id="contact" className="py-20">
					<Contact personalInfo={personalInfo} />
				</section>
			</main>

			<Footer personalInfo={personalInfo} />
		</div>
	);
};

export default App;
