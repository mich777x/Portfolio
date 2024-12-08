export const NavLink = ({ href, active, children }) => (
	<a href={href} className={`text-sm font-medium transition-colors duration-200 ${active ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
		{children}
	</a>
);
