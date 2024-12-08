export const MobileNavLink = ({ href, onClick, children }) => (
	<a href={href} onClick={onClick} className="block text-gray-600 hover:text-blue-600 transition-colors duration-200">
		{children}
	</a>
);
