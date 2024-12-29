import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

export const ProjectCard = ({ title, shortDescription, description, tags, image, github, liveDemo, features }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
			<div className="relative h-48 overflow-hidden group">
				<img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
					<div className="flex space-x-3">
						{github && (
							<a href={github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
								<Github className="w-5 h-5 text-gray-900" />
							</a>
						)}
						{liveDemo && (
							<a href={liveDemo} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500/90 rounded-full hover:bg-blue-500 transition-colors">
								<ExternalLink className="w-5 h-5 text-white" />
							</a>
						)}
					</div>
				</div>
			</div>

			<div className="p-6">
				<h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">{isExpanded ? description : shortDescription}</p>

				<div className="flex flex-wrap gap-2 mb-4">
					{tags.map((tag, index) => (
						<span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
							{tag}
						</span>
					))}
				</div>

				{features && (
					<div className={`space-y-2 mb-4 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
						<h4 className="font-semibold text-gray-900">Key Features:</h4>
						<ul className="list-disc list-inside text-gray-600 space-y-1">
							{features.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</div>
				)}

				<button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium">
					{isExpanded ? (
						<>
							Show less <ChevronUp className="ml-1 w-4 h-4" />
						</>
					) : (
						<>
							Learn more <ChevronDown className="ml-1 w-4 h-4" />
						</>
					)}
				</button>
			</div>
		</div>
	);
};
