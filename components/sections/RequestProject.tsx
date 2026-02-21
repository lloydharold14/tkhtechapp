import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { contactConfig } from '@/config/contact';

interface ProjectFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
}

const RequestProject = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<ProjectFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    budget: '',
  });

  const [errors, setErrors] = useState<Partial<ProjectFormData>>({});

  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const projectTypes = [
    'SaaS App',
    'MVP Prototype',
    'Consultation',
    'Product Design Only',
    'Other',
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 – $15,000',
    '$15,000 – $30,000',
    '$30,000 – $60,000',
    '$60,000+',
    'Not sure yet',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<ProjectFormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Description should be at least 20 characters';
    }
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ProjectFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus({ type: 'loading', message: 'Submitting your project request...' });

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        subject: `Project Request: ${formData.projectType}`,
        message: `Company: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nDescription:\n${formData.description}`,
      };

      const response = await fetch(contactConfig.awsEndpoint, {
        method: 'POST',
        headers: contactConfig.headers,
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type');
      let result;
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        result = { success: response.ok };
      }

      if (response.ok && result.success !== false) {
        setFormStatus({
          type: 'success',
          message: "Your project request has been submitted! We'll be in touch within 24 hours.",
        });
        setFormData({ fullName: '', email: '', company: '', projectType: '', description: '', budget: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  const inputClass = (field: keyof ProjectFormData) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300'
    } disabled:bg-gray-100 disabled:cursor-not-allowed`;

  const isLoading = formStatus.type === 'loading';

  return (
    <section id="request-project" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <span className="section-subtitle">Get Started</span>
          <h2 className="section-heading text-white">Request a Project</h2>
          <p className="section-description text-gray-400">
            Tell us about your idea. We'll review your submission and get back to you within 24 hours 
            to schedule a discovery call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            noValidate
          >
            {/* Status Banner */}
            {formStatus.type !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-8 p-4 rounded-xl flex items-start gap-3 ${
                  formStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : formStatus.type === 'error'
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                {formStatus.type === 'success' && <CheckCircleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                {formStatus.type === 'error' && <ExclamationTriangleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                {formStatus.type === 'loading' && (
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" />
                  </div>
                )}
                <span>{formStatus.message}</span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={inputClass('fullName')}
                  placeholder="John Smith"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={inputClass('email')}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                  Company <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Your Company Inc."
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-secondary-700 mb-2">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`${inputClass('projectType')} appearance-none bg-white`}
                >
                  <option value="">Select project type...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-2">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                disabled={isLoading}
                className={`${inputClass('description')} resize-vertical`}
                placeholder="Describe the problem you're solving, the features you need, who the users are, and any technical requirements or preferences..."
              />
              {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
            </div>

            {/* Budget */}
            <div className="mb-8">
              <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-2">
                Budget Range <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                disabled={isLoading}
                className={`${inputClass('budget')} appearance-none bg-white`}
              >
                <option value="">Select budget range...</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget}</p>}
            </div>

            {/* Submit */}
            <div className="text-center">
              <motion.button
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isLoading}
                className="btn-primary text-lg px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full md:w-auto"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Submitting...
                  </span>
                ) : (
                  'Submit Project Request'
                )}
              </motion.button>
              <p className="text-sm text-gray-400 mt-4">
                * Required fields. We'll review and respond within 24 hours.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RequestProject;
