// Contact form configuration
export const contactConfig = {
  // AWS Endpoint Configuration
  awsEndpoint: process.env.NEXT_PUBLIC_AWS_CONTACT_ENDPOINT || 'https://your-aws-endpoint.amazonaws.com/contact',
  
  // Headers for AWS endpoint (add any required headers)
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${process.env.AWS_API_KEY}`, // Uncomment if needed
    // 'X-API-Key': process.env.AWS_API_KEY, // Uncomment if needed
  },
  
  // Additional data to send with the form
  additionalData: {
    source: 'TKH TECH Website',
    timestamp: () => new Date().toISOString(),
  },
  
  // Success and error messages
  messages: {
    success: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    error: 'Something went wrong. Please try again or contact us directly.',
    networkError: 'Network error. Please check your connection and try again.',
    loading: 'Sending your message...',
  },
  
  // Form validation
  validation: {
    required: ['name', 'email', 'subject', 'message'],
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
};

// Helper function to format the request body
export const formatContactRequest = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return {
    ...formData,
    ...contactConfig.additionalData,
    timestamp: contactConfig.additionalData.timestamp(),
  };
};
