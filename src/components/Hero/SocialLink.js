export const SocialLink = ({ href, icon, dark = false }) => (
	<a href={href} className={`p-2 rounded-full transition-colors duration-200 ${dark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}>
		{icon}
	</a>
);
