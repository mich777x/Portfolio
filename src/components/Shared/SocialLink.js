// src/components/Shared/SocialLink.js
import React from "react";

export const SocialLink = ({ href, icon }) => (
	<a href={href} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 transform hover:scale-110 active:scale-95">
		{icon}
	</a>
);
