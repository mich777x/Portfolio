import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = ({ activeSection }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];

	const NavLink = ({ href, active, children, onClick }) => (
		<a href={href} onClick={onClick} className={`text-sm font-medium transition-colors duration-200 ${active ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
			{children}
		</a>
	);

	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 ${isMenuOpen ? "bg-white" : "bg-white/90 backdrop-blur-sm"} shadow-md py-4`}>
			<div className="container mx-auto px-6">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<a href="#home" className="text-2xl font-bold text-gray-900">
						Portfolio
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navLinks.map(({ href, label }) => (
							<NavLink key={href} href={href} active={activeSection === href.slice(1)}>
								{label}
							</NavLink>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="py-4 space-y-4">
							{navLinks.map(({ href, label }) => (
								<div key={href} className="px-2">
									<NavLink href={href} active={activeSection === href.slice(1)} onClick={() => setIsMenuOpen(false)}>
										{label}
									</NavLink>
								</div>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Overlay for mobile menu */}
			{isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden -z-10" onClick={() => setIsMenuOpen(false)} />}
		</nav>
	);
};
