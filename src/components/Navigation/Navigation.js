import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { MobileNavLink } from "./MobileNavLink";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export const Navigation = ({ activeSection }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const scrollPosition = useScrollPosition();

	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? "bg-white shadow-md py-4" : "bg-transparent py-6"}`}>
			{/* Navigation content */}
			<div className="container mx-auto px-6">
				<div className="flex justify-between items-center">
					<a href="#" className="text-2xl font-bold text-gray-800">
						Portfolio
					</a>

					<div className="hidden md:flex space-x-8">
						<NavLink href="#home" active={activeSection === "home"}>
							Home
						</NavLink>
						<NavLink href="#projects" active={activeSection === "projects"}>
							Projects
						</NavLink>
						<NavLink href="#skills" active={activeSection === "skills"}>
							Skills
						</NavLink>
						<NavLink href="#contact" active={activeSection === "contact"}>
							Contact
						</NavLink>
					</div>

					<button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X /> : <Menu />}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
					<div className="px-6 py-4 space-y-4">
						<MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
							Home
						</MobileNavLink>
						<MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
							Projects
						</MobileNavLink>
						<MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
							Skills
						</MobileNavLink>
						<MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
							Contact
						</MobileNavLink>
					</div>
				</div>
			)}
		</nav>
	);
};
