const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const ses = new SESClient({ region: 'ca-central-1' });

const TO_EMAIL = 'info@tkhtech.com';
const FROM_EMAIL = 'info@tkhtech.com';
const NOREPLY_EMAIL = 'noreply@tkhtech.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Send internal notification to info@tkhtech.com
async function sendInternalEmail({ name, email, subject, message }) {
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
      <div style="background: #f97316; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 22px;">TKH TECH Inc.</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 6px 0 0; font-size: 14px;">New Website Submission</p>
      </div>
      <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
        <h2 style="color: #1f2937; margin-top: 0; font-size: 18px;">${subject}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 100px; vertical-align: top;">From:</td>
            <td style="padding: 8px 0; color: #1f2937;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: bold; vertical-align: top;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
          </tr>
        </table>
        <div style="background: #f9fafb; border-left: 4px solid #f97316; padding: 16px; border-radius: 4px;">
          <p style="color: #6b7280; font-weight: bold; margin: 0 0 8px; font-size: 13px;">MESSAGE:</p>
          <p style="color: #1f2937; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p style="color: #9ca3af; font-size: 12px; margin: 0; text-align: center;">
          Sent from the TKH TECH website · <a href="https://tkhtech.com" style="color: #f97316;">tkhtech.com</a>
        </p>
      </div>
    </div>
  `;

  await ses.send(new SendEmailCommand({
    Source: FROM_EMAIL,
    Destination: { ToAddresses: [TO_EMAIL] },
    ReplyToAddresses: [email],
    Message: {
      Subject: { Data: `[TKH TECH] ${subject}`, Charset: 'UTF-8' },
      Body: {
        Html: { Data: htmlBody, Charset: 'UTF-8' },
        Text: { Data: `From: ${name} <${email}>\n\n${message}`, Charset: 'UTF-8' },
      },
    },
  }));
}

// Send auto-reply confirmation to the client
async function sendAutoReply({ name, email, isProjectRequest }) {
  const subject = isProjectRequest
    ? 'We received your project request — TKH TECH Inc.'
    : 'We received your message — TKH TECH Inc.';

  const bodyIntro = isProjectRequest
    ? `Thank you for submitting your project request. Our team will review the details and get back to you within <strong>24 hours</strong> to schedule a discovery call.`
    : `Thank you for reaching out to TKH TECH Inc. We've received your message and will get back to you within <strong>24 hours</strong>.`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
      <div style="background: #111827; padding: 32px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: #f97316; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -1px;">TKH TECH</h1>
        <p style="color: #9ca3af; margin: 6px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px;">Inc.</p>
      </div>
      <div style="background: white; padding: 40px 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
        <h2 style="color: #1f2937; margin-top: 0; font-size: 22px;">Hi ${name},</h2>
        <p style="color: #4b5563; line-height: 1.7; font-size: 15px;">
          ${bodyIntro}
        </p>
        <p style="color: #4b5563; line-height: 1.7; font-size: 15px;">
          In the meantime, feel free to explore more about what we do at 
          <a href="https://tkhtech.com" style="color: #f97316; font-weight: bold;">tkhtech.com</a>.
        </p>

        <div style="background: #fff7ed; border: 1px solid #fed7aa; border-radius: 8px; padding: 20px; margin: 28px 0;">
          <p style="margin: 0; color: #9a3412; font-size: 14px; font-weight: bold;">What happens next?</p>
          <ol style="margin: 12px 0 0; padding-left: 20px; color: #7c2d12; font-size: 14px; line-height: 1.8;">
            <li>Our team reviews your submission</li>
            <li>We reach out within 24 hours to discuss details</li>
            <li>We schedule a discovery call at your convenience</li>
          </ol>
        </div>

        <div style="text-align: center; margin: 32px 0 16px;">
          <a href="https://tkhtech.com/#portfolio"
             style="background: #f97316; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block;">
            See Our Work
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0 24px;" />

        <div style="text-align: center;">
          <p style="color: #6b7280; font-size: 13px; margin: 0 0 6px;">TKH TECH Inc.</p>
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">777 Boulevard Le Corbusier, Montreal, QC, Canada</p>
          <p style="color: #9ca3af; font-size: 12px; margin: 4px 0 0;">
            <a href="mailto:info@tkhtech.com" style="color: #f97316;">info@tkhtech.com</a> · +1 (438) 887-1040
          </p>
          <p style="color: #d1d5db; font-size: 11px; margin: 16px 0 0;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      </div>
    </div>
  `;

  const textBody = `Hi ${name},\n\n${isProjectRequest
    ? 'Thank you for submitting your project request. Our team will review the details and get back to you within 24 hours to schedule a discovery call.'
    : "Thank you for reaching out to TKH TECH Inc. We've received your message and will get back to you within 24 hours."
  }\n\nVisit us at: https://tkhtech.com\n\n---\nTKH TECH Inc.\n777 Boulevard Le Corbusier, Montreal, QC, Canada\ninfo@tkhtech.com | +1 (438) 887-1040\n\nThis is an automated confirmation. Please do not reply to this email.`;

  await ses.send(new SendEmailCommand({
    Source: `TKH TECH Inc. <${NOREPLY_EMAIL}>`,
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: { Data: subject, Charset: 'UTF-8' },
      Body: {
        Html: { Data: htmlBody, Charset: 'UTF-8' },
        Text: { Data: textBody, Charset: 'UTF-8' },
      },
    },
  }));
}

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, message: 'Name, email, and message are required.' }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, message: 'Invalid email address.' }),
      };
    }

    const isProjectRequest = subject && subject.toLowerCase().includes('project request');
    const resolvedSubject = subject || `New message from ${name} via TKH TECH website`;

    // Send both emails in parallel
    await Promise.all([
      sendInternalEmail({ name, email, subject: resolvedSubject, message }),
      sendAutoReply({ name, email, isProjectRequest }),
    ]);

    return {
      statusCode: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, message: 'Message sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Failed to send message. Please try again.' }),
    };
  }
};
