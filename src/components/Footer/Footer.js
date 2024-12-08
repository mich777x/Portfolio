import { Github, Linkedin, Mail } from "lucide-react";
import { SocialLink } from "../Hero/SocialLink";

export const Footer = () => (
	<footer className="bg-gray-900 text-white py-12">
		<div className="container mx-auto px-6">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<p className="text-gray-400">© 2024 Portfolio. All rights reserved.</p>
				<div className="flex space-x-6 mt-4 md:mt-0">
					<SocialLink href="#" icon={<Github />} dark />
					<SocialLink href="#" icon={<Linkedin />} dark />
					<SocialLink href="#" icon={<Mail />} dark />
				</div>
			</div>
		</div>
	</footer>
);
