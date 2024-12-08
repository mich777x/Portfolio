import { ExternalLink } from "lucide-react";

export const ProjectCard = ({ title, description, tags, link }) => (
	<div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
		<div className="p-6">
			<h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
			<p className="text-gray-600 mb-4">{description}</p>
			<div className="flex flex-wrap gap-2 mb-4">
				{tags.map((tag, index) => (
					<span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
						{tag}
					</span>
				))}
			</div>
			<a href={link} className="inline-flex items-center text-blue-600 hover:text-blue-700">
				View Project <ExternalLink className="ml-2 w-4 h-4" />
			</a>
		</div>
	</div>
);
