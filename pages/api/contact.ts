import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Please use POST.',
    });
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // Create transporter using Gmail SMTP
    // You'll need to set up environment variables for this
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Message from TKH TECH Website</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Contact Form Submission
          </h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #f97316;">Name:</strong> ${name}</p>
            <p><strong style="color: #f97316;">Email:</strong> ${email}</p>
            <p><strong style="color: #f97316;">Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d;">
            <p>This message was sent from the TKH TECH contact form.</p>
            <p style="font-size: 12px;">TKH TECH Inc. - Native Mobile App Development</p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: `"TKH TECH Contact Form" <${process.env.GMAIL_USER}>`,
      to: 'info@tkhtech.com', // Your business email
      subject: `[TKH TECH] New Contact: ${subject}`,
      html: htmlContent,
      replyTo: email, // So you can reply directly to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
    });

  } catch (error: any) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
