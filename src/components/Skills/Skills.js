// src/components/Skills/Skills.js
import React from "react";

export const Skills = ({ skills }) => (
	<section id="skills" className="py-20 bg-gray-50">
		<div className="container mx-auto px-6">
			<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Skills & Expertise</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{skills.map((skill, index) => (
					<div key={index} className="opacity-0 scale-95 animate-fade-in-scale bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
						<div className="text-center mb-4">
							<div className="w-20 h-20 mx-auto mb-4 relative">
								<svg viewBox="0 0 100 100" className="transform -rotate-90">
									<circle cx="50" cy="50" r="45" fill="none" stroke="#E2E8F0" strokeWidth="8" />
									<circle cx="50" cy="50" r="45" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray={`${skill.level * 2.83} 283`} className="animate-progress-circle" />
								</svg>
								<span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-600">{skill.level}%</span>
							</div>
							<h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);
