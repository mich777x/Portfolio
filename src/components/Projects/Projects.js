import React from "react";
import { ProjectCard } from "./ProjectCard";
import eco from "./image/eco.png";
import task from "./image/task.png";
import blog from "./image/blog.png";

export const Projects = () => {
	const projects = [
		{
			title: "E-Commerce Platform",
			shortDescription: "A modern e-commerce platform with seamless shopping experience",
			description: "A full-featured e-commerce platform built with React and Tailwind CSS, featuring product categorization, dynamic filtering, shopping cart functionality, and responsive design. Implements advanced state management for cart operations and smooth user interactions.",
			tags: ["React", "Tailwind CSS", "JavaScript"],
			image: eco,
			github: "https://github.com/mich777x/ecommerce.git",
			liveDemo: "https://ecommerce-lyart-delta-28.vercel.app/",
			features: ["Dynamic product filtering and search", "Responsive cart management", "Seamless checkout process", "Real-time inventory updates", "User-friendly product categories"],
		},
		{
			title: "Task Management Application",
			shortDescription: "Intuitive task management with real-time updates",
			description: "A comprehensive task management application that helps users organize their work efficiently. Features include drag-and-drop task organization, priority setting, deadline management, and progress tracking. Built with modern React practices and smooth animations.",
			tags: ["React", "Tailwind CSS", "JavaScript"],
			image: task,
			github: "https://github.com/mich777x/task-management.git",
			liveDemo: "https://task-management-red-one.vercel.app/",
			features: ["Drag-and-drop task organization", "Priority-based task sorting", "Deadline tracking and reminders", "Progress visualization", "Multi-device synchronization"],
		},
		{
			title: "Dynamic Blog Platform",
			shortDescription: "Modern blogging platform with rich content support",
			description: "A feature-rich blogging platform that supports markdown content, image uploads, and interactive comments. Includes category-based article organization, search functionality, and social sharing capabilities. Optimized for both desktop and mobile viewing.",
			tags: ["React", "Tailwind CSS", "JavaScript"],
			image: blog,
			github: "https://github.com/mich777x/Blog.git",
			liveDemo: "https://blog-zeta-three-68.vercel.app/",
			features: ["Rich text editing with markdown support", "Category and tag organization", "Interactive comment system", "Social media integration", "Mobile-optimized reading experience"],
		},
	];

	return (
		<section id="projects" className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
				<p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">Explore my portfolio of web applications built with modern technologies and best practices. Each project demonstrates my commitment to creating intuitive, performant, and scalable solutions.</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}>
							<ProjectCard {...project} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
