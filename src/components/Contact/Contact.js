import React, { useState } from "react";
import { Mail, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
};

export const Contact = ({ personalInfo }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);
	const [touched, setTouched] = useState({});

	const validate = (values) => {
		const errors = {};
		if (!values.name.trim()) {
			errors.name = "Name is required";
		} else if (values.name.length < 2) {
			errors.name = "Name must be at least 2 characters";
		}

		if (!values.email) {
			errors.email = "Email is required";
		} else if (!validateEmail(values.email)) {
			errors.email = "Invalid email address";
		}

		if (!values.message.trim()) {
			errors.message = "Message is required";
		} else if (values.message.length < 10) {
			errors.message = "Message must be at least 10 characters";
		}

		return errors;
	};

	const handleBlur = (e) => {
		const { name } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
		const validationErrors = validate(formData);
		setErrors(validationErrors);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		if (touched[name]) {
			const validationErrors = validate({
				...formData,
				[name]: value,
			});
			setErrors(validationErrors);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate(formData);
		setErrors(validationErrors);
		setTouched({
			name: true,
			email: true,
			message: true,
		});

		if (Object.keys(validationErrors).length === 0) {
			setIsSubmitting(true);

			// Create mailto link with form data
			const subject = `Contact Form Submission from ${formData.name}`;
			const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

			const mailtoLink = `mailto:${personalInfo?.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

			// Open mailto link
			window.location.href = mailtoLink;

			// Reset form and show success message
			setTimeout(() => {
				setFormData({ name: "", email: "", message: "" });
				setTouched({});
				setIsSubmitting(false);
				setSubmitStatus("success");
			}, 1000);
		}
	};

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get in Touch</h2>

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
								<div className="space-y-4">
									<a href={`mailto:${personalInfo?.email}`} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
										<Mail className="w-5 h-5 mr-3" />
										{personalInfo?.email}
									</a>
									<p className="flex items-center text-gray-600">
										<span className="w-5 h-5 mr-3">📍</span>
										{personalInfo?.location}
									</p>
								</div>
							</div>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-4">
								<div>
									<input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your Name" className={`w-full px-4 py-3 rounded-lg border ${errors.name && touched.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} focus:ring-2 focus:border-transparent transition`} />
									{errors.name && touched.name && (
										<p className="mt-1 text-sm text-red-500 flex items-center">
											<AlertCircle className="w-4 h-4 mr-1" />
											{errors.name}
										</p>
									)}
								</div>

								<div>
									<input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="Your Email" className={`w-full px-4 py-3 rounded-lg border ${errors.email && touched.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} focus:ring-2 focus:border-transparent transition`} />
									{errors.email && touched.email && (
										<p className="mt-1 text-sm text-red-500 flex items-center">
											<AlertCircle className="w-4 h-4 mr-1" />
											{errors.email}
										</p>
									)}
								</div>

								<div>
									<textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} placeholder="Your Message" rows="4" className={`w-full px-4 py-3 rounded-lg border ${errors.message && touched.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} focus:ring-2 focus:border-transparent transition`} />
									{errors.message && touched.message && (
										<p className="mt-1 text-sm text-red-500 flex items-center">
											<AlertCircle className="w-4 h-4 mr-1" />
											{errors.message}
										</p>
									)}
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-200 
                    ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:transform active:scale-98"}
                    flex items-center justify-center space-x-2`}
								>
									{isSubmitting ? (
										<>
											<Loader2 className="w-5 h-5 animate-spin" />
											<span>Opening Email Client...</span>
										</>
									) : (
										<span>Send Message</span>
									)}
								</button>

								{submitStatus === "success" && (
									<div className="flex items-center text-green-600 bg-green-50 p-3 rounded-lg">
										<CheckCircle2 className="w-5 h-5 mr-2" />
										Email client opened with your message!
									</div>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
