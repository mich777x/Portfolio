// src/components/Contact/Contact.js
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SocialLink } from "../Shared/SocialLink";

export const Contact = ({ personalInfo }) => (
	<section className="py-20 bg-white">
		<div className="container mx-auto px-6">
			<h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get in Touch</h2>

			<div className="max-w-4xl mx-auto opacity-0 translate-y-8 animate-fade-in-up">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-6">
						<div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
							<div className="space-y-4">
								<a href={`mailto:${personalInfo.email}`} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
									<Mail className="w-5 h-5 mr-3" />
									{personalInfo.email}
								</a>
								<p className="flex items-center text-gray-600">
									<span className="w-5 h-5 mr-3">📍</span>
									{personalInfo.location}
								</p>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Social Media</h3>
							<div className="flex space-x-4">
								<SocialLink href={personalInfo.socialLinks.github} icon={<Github />} />
								<SocialLink href={personalInfo.socialLinks.linkedin} icon={<Linkedin />} />
								<SocialLink href={personalInfo.socialLinks.twitter} icon={<Twitter />} />
							</div>
						</div>
					</div>

					<form className="space-y-6">
						<div className="space-y-4">
							<input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
							<input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
							<textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
							<button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-102 active:scale-98">Send Message</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
);
