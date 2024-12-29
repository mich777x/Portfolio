import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = ({ activeSection }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#home", label: "Home" },
		{ href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"}`}>
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between">
					<a href="#home" className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"}`}>
						Portfolio
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<a key={item.href} href={item.href} className={`text-sm font-medium transition-all duration-300 ${isScrolled ? (activeSection === item.href.slice(1) ? "text-blue-600" : "text-gray-600 hover:text-blue-600") : activeSection === item.href.slice(1) ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
								{item.label}
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X /> : <Menu />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg">
						<div className="px-6 py-4 space-y-4">
							{navItems.map((item) => (
								<a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className={`block text-base transition-colors duration-300 ${activeSection === item.href.slice(1) ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
