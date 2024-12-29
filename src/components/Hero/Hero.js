import React, { useEffect, useState, useCallback } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { SocialLink } from "../Shared/SocialLink";

export const Hero = ({ personalInfo }) => {
	const [typedText, setTypedText] = useState("");
	const [roleIndex, setRoleIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(true);

	const roles = React.useMemo(() => ["Frontend Developer", "React Specialist", "UI/UX Enthusiast"], []);

	const handleTyping = useCallback(() => {
		const role = roles[roleIndex];

		if (isTyping) {
			if (typedText.length < role.length) {
				return {
					newText: role.slice(0, typedText.length + 1),
					delay: 100,
					shouldContinue: true,
				};
			} else {
				return {
					newText: typedText,
					delay: 2000,
					shouldContinue: false,
				};
			}
		} else {
			if (typedText.length > 0) {
				return {
					newText: role.slice(0, typedText.length - 1),
					delay: 50,
					shouldContinue: true,
				};
			} else {
				return {
					newText: "",
					delay: 50,
					shouldContinue: false,
					shouldResetRole: true,
				};
			}
		}
	}, [isTyping, roleIndex, roles, typedText]);

	useEffect(() => {
		const { newText, delay, shouldContinue, shouldResetRole } = handleTyping();

		const timeout = setTimeout(() => {
			if (shouldContinue) {
				setTypedText(newText);
			} else if (shouldResetRole) {
				setRoleIndex((prev) => (prev + 1) % roles.length);
				setIsTyping(true);
			} else {
				setIsTyping(false);
			}
		}, delay);

		return () => clearTimeout(timeout);
	}, [handleTyping, roles.length]);

	return (
		<section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0">
				<div className="absolute inset-0">
					{[...Array(20)].map((_, i) => (
						<div
							key={i}
							className="absolute bg-blue-500/10 rounded-full backdrop-blur-3xl"
							style={{
								width: Math.random() * 300 + 50 + "px",
								height: Math.random() * 300 + 50 + "px",
								left: Math.random() * 100 + "%",
								top: Math.random() * 100 + "%",
								animation: `float ${10 + Math.random() * 20}s linear infinite`,
								animationDelay: `${-Math.random() * 20}s`,
							}}
						/>
					))}
				</div>
			</div>

			<div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center">
				<div className="text-center space-y-8">
					<div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
						<span className="text-blue-400 text-xl font-light">Hello, I'm</span>
					</div>

					<div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
						<h1 className="text-5xl md:text-7xl font-bold mb-4">
							<span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">{personalInfo.name}</span>
						</h1>
					</div>

					<div className="h-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
						<p className="text-2xl md:text-3xl text-blue-400 font-light">
							<span>{typedText}</span>
							<span className="animate-pulse">|</span>
						</p>
					</div>

					<div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
						<p className="text-lg text-gray-400 leading-relaxed">Passionate about creating responsive, user-friendly web applications with modern technologies and best practices. Always exploring new ways to deliver exceptional digital experiences.</p>
					</div>

					<div className="flex justify-center space-x-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
						<SocialLink href="https://github.com/mich777x" icon={<Github className="transition-transform duration-300 group-hover:scale-110" />} />
						<SocialLink href="https://www.linkedin.com/in/nahom-m-5944462a2/?trk=opento_sprofile_topcard" icon={<Linkedin className="transition-transform duration-300 group-hover:scale-110" />} />
						<SocialLink href="mailto:mnahom832@email.com" icon={<Mail className="transition-transform duration-300 group-hover:scale-110" />} />
					</div>

					<div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
						<a
							href="#projects"
							className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full 
                       hover:from-blue-600 hover:to-purple-700 transition-all duration-300 
                       transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
						>
							View My Work
						</a>
					</div>
				</div>

				<div className="absolute bottom-10 w-full text-center">
					<ChevronDown className="w-8 h-8 mx-auto text-blue-400 animate-bounce" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
