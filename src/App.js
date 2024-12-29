import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { Loader2 } from "lucide-react";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [activeSection, setActiveSection] = useState("home");

	// Sample data
	const personalInfo = {
		name: "Nahom Michael",
		title: "FrontEnd Developer",
		email: "mnahom832@gmail.com",
		location: "Maryland, USA",
		bio: "Passionate developer creating amazing web experiences",
		profileImage: "/api/placeholder/128/128",
	};

	const skills = [{ name: "React" }, { name: "TailwindCSS" }, { name: "Html" }, { name: "JavaScript" }];

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "projects", "skills", "contact"];
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (isLoading) {
		return (
			<div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
				<div className="text-center">
					<Loader2 className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-4" />
					<div className="text-white text-2xl font-light">Loading amazing things...</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pdf-ready">
			<Navigation activeSection={activeSection} />
			<main>
				<section id="home" className="min-h-screen">
					<Hero personalInfo={personalInfo} />
				</section>
				<section id="projects" className="min-h-screen py-20">
					<Projects />
				</section>
				<section id="skills" className="min-h-screen py-20">
					<Skills skills={skills} />
				</section>
				<section id="contact" className="min-h-screen py-20">
					<Contact personalInfo={personalInfo} />
				</section>
			</main>
			<Footer personalInfo={personalInfo} />
		</div>
	);
};

export default App;
