export const SkillBar = ({ name, level }) => (
	<div>
		<div className="flex justify-between mb-2">
			<span className="text-gray-700 font-medium">{name}</span>
			<span className="text-gray-500">{level}%</span>
		</div>
		<div className="h-3 bg-gray-200 rounded-full overflow-hidden">
			<div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: `${level}%` }} />
		</div>
	</div>
);
