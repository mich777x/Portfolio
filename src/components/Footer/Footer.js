import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = ({ personalInfo }) => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ href: "https://github.com/mich777x", icon: <Github className="w-5 h-5" /> },
		{ href: "https://www.linkedin.com/in/nahom-m-5944462a2/?trk=opento_sprofile_topcard", icon: <Linkedin className="w-5 h-5" /> },
		{ href: "mailto:mnahom832@email.com", icon: <Mail className="w-5 h-5" /> },
	];

	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
					<div>
						<h3 className="text-xl font-bold mb-4">About Me</h3>
						<p className="text-gray-400 leading-relaxed">{personalInfo?.bio || "Passionate developer creating amazing web experiences"}</p>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4">Quick Links</h3>
						<div className="space-y-2">
							{["Home", "Projects", "Skills", "Contact"].map((link) => (
								<a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-400 hover:text-white transition-colors duration-300">
									{link}
								</a>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-4">Contact</h3>
						<div className="space-y-2">
							<p className="text-gray-400">
								<span className="font-medium text-white">Email:</span> {personalInfo?.email}
							</p>
							<p className="text-gray-400">
								<span className="font-medium text-white">Location:</span> {personalInfo?.location}
							</p>
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400 flex items-center">
							<span>
								© {currentYear} Portfolio. Made by {personalInfo?.name}
							</span>
						</p>

						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
									{social.icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
