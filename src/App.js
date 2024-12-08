// src/App.js
import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { personalInfo, projects, skills } from "./data/data";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 1500);
	}, []);

	if (isLoading) {
		return (
			<div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
				<div className="w-12 h-12 bg-blue-500 animate-loader" />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Hero personalInfo={personalInfo} />
			<Projects projects={projects} />
			<Skills skills={skills} />
			<Contact personalInfo={personalInfo} />
			<Footer personalInfo={personalInfo} />
		</div>
	);
};

export default App;
