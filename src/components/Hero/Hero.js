// src/components/Hero/Hero.js
import React from "react";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { SocialLink } from "../Shared/SocialLink";

export const Hero = ({ personalInfo }) => (
	<section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
		<div className="absolute inset-0 overflow-hidden">
			{[...Array(20)].map((_, i) => (
				<div
					key={i}
					className="absolute opacity-10"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
						animationDelay: `${Math.random() * 5}s`,
					}}
				>
					<div className="w-32 h-32 bg-white rounded-full blur-3xl" />
				</div>
			))}
		</div>

		<div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center">
			<div className="text-center opacity-0 translate-y-8 animate-fade-in-up">
				<img src={personalInfo.profileImage} alt={personalInfo.name} className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-8 mx-auto animate-scale-in" />

				<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{personalInfo.name}</h1>

				<p className="text-2xl text-blue-400 mb-8">{personalInfo.title}</p>

				<div className="flex justify-center space-x-6">
					<SocialLink href={personalInfo.socialLinks.github} icon={<Github />} />
					<SocialLink href={personalInfo.socialLinks.linkedin} icon={<Linkedin />} />
					<SocialLink href={personalInfo.socialLinks.twitter} icon={<Twitter />} />
				</div>
			</div>

			<div className="absolute bottom-10 w-full text-center animate-fade-in">
				<ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
			</div>
		</div>
	</section>
);
