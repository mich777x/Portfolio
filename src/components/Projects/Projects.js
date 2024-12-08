import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../Shared/SectionTitle";

export const Projects = ({ projects }) => (
	<section id="projects" className="py-20 bg-white">
		<div className="container mx-auto px-6">
			<SectionTitle>Featured Projects</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	</section>
);
