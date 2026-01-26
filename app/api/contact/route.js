import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, phoneCode, service, message } = body

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      }
    })

    await transporter.verify()

    // Admin email
    const adminMailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `📧 New Contact: ${name} - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:linear-gradient(135deg,#1e3c72 0%,#2a5298 100%);color:white;padding:20px;text-align:center;border-radius:8px 8px 0 0;">
            <h1 style="margin:0;font-size:22px;">🚀 New Portfolio Contact</h1>
            <p style="margin:8px 0 0;opacity:0.9;">From: ${name}</p>
          </div>
          <div style="background:#f8fafc;padding:20px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;">
            <div style="background:white;padding:18px;border-radius:6px;border-left:4px solid #3b82f6;margin-bottom:15px;">
              <p style="margin:8px 0;"><strong style="color:#1e3c72;">👤 Name:</strong> ${name}</p>
              <p style="margin:8px 0;"><strong style="color:#1e3c72;">📧 Email:</strong> ${email}</p>
              <p style="margin:8px 0;"><strong style="color:#1e3c72;">📱 Phone:</strong> ${phoneCode || ''} ${phone || 'Not provided'}</p>
              <p style="margin:8px 0;"><strong style="color:#1e3c72;">🎯 Service:</strong> ${service || 'Not specified'}</p>
              <p style="margin:12px 0 4px;"><strong style="color:#1e3c72;">📝 Message:</strong></p>
              <p style="margin:8px 0;background:#f1f5f9;padding:12px;border-radius:4px;white-space:pre-line;font-size:14px;">${message}</p>
            </div>
            <div style="text-align:center;color:#64748b;font-size:13px;padding-top:15px;border-top:1px solid #e2e8f0;">
              <p>✅ Sent from portfolio contact form</p>
              <p>🕒 ${new Date().toLocaleString('en-US', { 
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
          </div>
        </div>
      `
    }

    // User confirmation email
    const userMailOptions = {
      from: `"Yonas Fsaha" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Thank you for contacting Yonas Fsaha!`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;max-width:580px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
          <!-- Header -->
          <div style="background:linear-gradient(135deg,#1e3c72 0%,#2a5298 100%);color:white;padding:28px 20px;text-align:center;">
            <h1 style="margin:0 0 12px 0;font-size:26px;font-weight:700;line-height:1.2;">👋 Thank You, ${name}!</h1>
            <p style="margin:0;opacity:0.95;font-size:15px;">Your message has been received</p>
          </div>
          
          <!-- Content -->
          <div style="padding:28px 20px;">
            <!-- Greeting -->
            <div style="margin-bottom:24px;">
              <p style="font-size:15px;line-height:1.5;color:#475569;margin:0 0 12px 0;">
                Dear <strong style="color:#1e3c72;">${name}</strong>,
              </p>
              <p style="font-size:15px;line-height:1.5;color:#475569;margin:0 0 12px 0;">
                Thank you for reaching out regarding <strong style="color:#1e3c72;">${service || 'your project'}</strong>. 
                I have received your message and will review it carefully.
              </p>
              <p style="font-size:15px;line-height:1.5;color:#475569;margin:0;">
                I typically respond within <strong style="color:#1e3c72;">24 hours</strong> during business days. 
                Learn more at <a href="https://yonasfsaha.com" style="color:#3b82f6;text-decoration:none;font-weight:600;">yonasfsaha.com</a>.
              </p>
            </div>
            
            <!-- User's Message -->
            <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:24px 0;border:1px solid #e2e8f0;">
              <h3 style="color:#1e3c72;margin:0 0 16px 0;font-size:18px;font-weight:600;display:flex;align-items:center;gap:8px;">
                <span>📨</span> Your Message
              </h3>
              <div style="background:white;border-left:3px solid #3b82f6;padding:16px;border-radius:0 6px 6px 0;margin-top:12px;">
                <p style="color:#475569;margin:0;line-height:1.6;white-space:pre-line;font-size:14px;">${message}</p>
              </div>
              <p style="color:#64748b;font-size:13px;margin:12px 0 0 0;line-height:1.4;font-style:italic;">
                This is the message you submitted. I'll respond to this content.
              </p>
            </div>
            
            <!-- CTA Buttons -->
            <div style="background:white;border:1px solid #3b82f6;border-radius:8px;padding:24px 20px;text-align:center;margin:24px 0;">
              <h3 style="color:#1e3c72;margin:0 0 16px 0;font-size:18px;font-weight:600;">📋 Explore More</h3>
              <p style="color:#475569;margin:0 0 20px 0;font-size:15px;">You might want to check out:</p>
              <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
                <a href="https://github.com/yonas-fsaha" style="background:linear-gradient(135deg,#1e293b 0%,#334155 100%);color:white;padding:14px 32px;text-decoration:none;border-radius:24px;font-weight:600;width:100%;max-width:260px;display:block;text-align:center;font-size:15px;box-shadow:0 3px 12px rgba(30,41,59,0.1);">
                  View My GitHub Projects
                </a>
                <a href="https://vibeica.com" style="background:linear-gradient(135deg,#0ea5e9 0%,#3b82f6 100%);color:white;padding:14px 32px;text-decoration:none;border-radius:24px;font-weight:600;width:100%;max-width:260px;display:block;text-align:center;font-size:15px;box-shadow:0 3px 12px rgba(14,165,233,0.1);">
                  Visit Vibeica Technology
                </a>
              </div>
            </div>
            
            <!-- Contact Information -->
            <div style="background:white;border-radius:8px;padding:24px 20px;margin:24px 0;border:1px solid #e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
              <h3 style="color:#1e3c72;margin:0 0 20px 0;font-size:18px;font-weight:600;display:flex;align-items:center;gap:8px;">
                <span>📞</span> Contact Information
              </h3>
              <div style="display:grid;grid-template-columns:1fr;gap:16px;">
                <!-- Location -->
                <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
                  <span style="color:#3b82f6;font-size:18px;min-width:24px;">📍</span>
                  <div>
                    <p style="color:#1e3c72;font-weight:600;margin:0 0 4px 0;font-size:14px;">Location</p>
                    <p style="color:#475569;margin:0;font-size:14px;">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <!-- Emails -->
                <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
                  <span style="color:#3b82f6;font-size:18px;min-width:24px;">📧</span>
                  <div style="flex:1;">
                    <p style="color:#1e3c72;font-weight:600;margin:0 0 8px 0;font-size:14px;">Email</p>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
                        <span style="color:#3b82f6;font-size:16px;">📨</span>
                        <span style="color:#475569;font-size:14px;">yonasfsaha404@gmail.com</span>
                      </div>
                      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
                        <span style="color:#3b82f6;font-size:16px;">📨</span>
                        <span style="color:#475569;font-size:14px;">umyonas7@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Phone Numbers -->
                <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
                  <span style="color:#3b82f6;font-size:18px;min-width:24px;">📱</span>
                  <div style="flex:1;">
                    <p style="color:#1e3c72;font-weight:600;margin:0 0 8px 0;font-size:14px;">Phone</p>
                    <div style="display:flex;flex-direction:column;gap:8px;">
                      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
                        <span style="color:#3b82f6;font-size:16px;">📞</span>
                        <span style="color:#475569;font-size:14px;">+251 966 356 211</span>
                      </div>
                      <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
                        <span style="color:#3b82f6;font-size:16px;">📞</span>
                        <span style="color:#475569;font-size:14px;">+251 913 198 516</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- WhatsApp -->
                <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
                  <span style="color:#3b82f6;font-size:18px;min-width:24px;">💬</span>
                  <div style="flex:1;">
                    <p style="color:#1e3c72;font-weight:600;margin:0 0 8px 0;font-size:14px;">WhatsApp</p>
                    <a href="https://wa.me/251966356211" style="background:#25D366;color:white;padding:12px 24px;text-decoration:none;border-radius:20px;font-weight:600;display:inline-flex;align-items:center;gap:8px;font-size:14px;box-shadow:0 3px 12px rgba(37,211,102,0.15);">
                      <span>💬</span>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Website Link -->
            <div style="text-align:center;margin:24px 0;padding:20px;background:linear-gradient(135deg,#f8fafc 0%,#ffffff 100%);border-radius:8px;border:1px dashed #e2e8f0;">
              <h3 style="color:#1e3c72;margin:0 0 12px 0;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;">
                <span>🌐</span> Official Website
              </h3>
              <p style="color:#475569;margin:0 0 16px 0;font-size:14px;line-height:1.4;">
                Complete overview of my work, skills, and projects
              </p>
              <a href="https://yonasfsaha.com" style="color:#8b5cf6;text-decoration:none;font-weight:600;font-size:16px;padding:12px 32px;background:white;border-radius:20px;display:inline-flex;align-items:center;gap:8px;border:2px solid #8b5cf6;">
                yonasfsaha.com
              </a>
            </div>
            
            <!-- Social Links -->
            <div style="text-align:center;padding-top:24px;border-top:1px solid #e2e8f0;">
              <p style="color:#1e3c72;font-weight:700;margin:0 0 4px 0;font-size:20px;">Yonas Fsaha</p>
              <p style="color:#475569;margin:0 0 24px 0;font-size:14px;">Full-Stack Developer & Tech Entrepreneur</p>
              
              <!-- Social Links Row -->
              <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
                <a href="https://github.com/yonas-fsaha" style="color:#333;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yonas-fsaha" style="color:#0077b5;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
                  LinkedIn
                </a>
                <a href="https://x.com/YonasFsaha" style="color:#1da1f2;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
                  X
                </a>
                <a href="https://t.me/c404der" style="color:#0088cc;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
                  Telegram
                </a>
              </div>
              
              <!-- Footer -->
              <p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.4;">
                This is an automated confirmation. Please do not reply to this email directly.<br>
                If you need to send additional information, please reply to the thread.
              </p>
            </div>
          </div>
        </div>
      `
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! Check your email for confirmation.'
    })

  } catch (error) {
    console.error('Email error:', error)
    
    let userMessage = 'Failed to send message. Please try again later.'
    
    if (error.code === 'EAUTH') {
      userMessage = 'Email configuration error. Please try again or contact me directly.'
    } else if (error.code === 'ENOTFOUND') {
      userMessage = 'Network error. Please check your internet connection.'
    }

    return NextResponse.json(
      { 
        success: false, 
        message: userMessage 
      },
      { status: 500 }
    )
  }
}























// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(request) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, phoneCode, service, message } = body

//     // Validation
//     if (!name?.trim() || !email?.trim() || !message?.trim()) {
//       return NextResponse.json(
//         { success: false, message: 'Name, email, and message are required' },
//         { status: 400 }
//       )
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { success: false, message: 'Please enter a valid email address' },
//         { status: 400 }
//       )
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//         ciphers: 'SSLv3'
//       }
//     })

//     await transporter.verify()

//     // Admin email (compact)
//     const adminMailOptions = {
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       replyTo: email,
//       subject: `📧 New Contact: ${name} - ${service || 'General Inquiry'}`,
//       html: `
//         <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
//           <div style="background:linear-gradient(135deg,#1e3c72 0%,#2a5298 100%);color:white;padding:20px;text-align:center;border-radius:8px 8px 0 0;">
//             <h1 style="margin:0;font-size:22px;">🚀 New Portfolio Contact</h1>
//             <p style="margin:8px 0 0;opacity:0.9;">From: ${name}</p>
//           </div>
//           <div style="background:#f8fafc;padding:20px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;">
//             <div style="background:white;padding:18px;border-radius:6px;border-left:4px solid #3b82f6;margin-bottom:15px;">
//               <p style="margin:8px 0;"><strong style="color:#1e3c72;">👤 Name:</strong> ${name}</p>
//               <p style="margin:8px 0;"><strong style="color:#1e3c72;">📧 Email:</strong> ${email}</p>
//               <p style="margin:8px 0;"><strong style="color:#1e3c72;">📱 Phone:</strong> ${phoneCode || ''} ${phone || 'Not provided'}</p>
//               <p style="margin:8px 0;"><strong style="color:#1e3c72;">🎯 Service:</strong> ${service || 'Not specified'}</p>
//               <p style="margin:12px 0 4px;"><strong style="color:#1e3c72;">📝 Message:</strong></p>
//               <p style="margin:8px 0;background:#f1f5f9;padding:12px;border-radius:4px;white-space:pre-line;font-size:14px;">${message}</p>
//             </div>
//             <div style="text-align:center;color:#64748b;font-size:13px;padding-top:15px;border-top:1px solid #e2e8f0;">
//               <p>✅ Sent from portfolio contact form</p>
//               <p>🕒 ${new Date().toLocaleString('en-US', { 
//                 weekday: 'short',
//                 year: 'numeric',
//                 month: 'short',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//               })}</p>
//             </div>
//           </div>
//         </div>
//       `
//     }

//     // User confirmation email - COMPACT VERSION
//     const userMailOptions = {
//       from: `"Yonas Fsaha" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `✅ Thank you for contacting Yonas Fsaha!`,
//       html: `
//         <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;max-width:580px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
//           <!-- Header -->
//           <div style="background:linear-gradient(135deg,#1e3c72 0%,#2a5298 100%);color:white;padding:28px 20px;text-align:center;">
//             <h1 style="margin:0 0 12px 0;font-size:26px;font-weight:700;line-height:1.2;">👋 Thank You, ${name}!</h1>
//             <p style="margin:0;opacity:0.95;font-size:15px;">Your message has been received</p>
//           </div>
          
//           <!-- Content -->
//           <div style="padding:28px 20px;">
//             <!-- Greeting -->
//             <div style="margin-bottom:24px;">
//               <p style="font-size:15px;line-height:1.5;color:#475569;margin:0 0 12px 0;">
//                 Dear <strong style="color:#1e3c72;">${name}</strong>,
//               </p>
//               <p style="font-size:15px;line-height:1.5;color:#475569;margin:0 0 12px 0;">
//                 Thank you for reaching out regarding <strong style="color:#1e3c72;">${service || 'your project'}</strong>. 
//                 I have received your message and will review it carefully.
//               </p>
//               <p style="font-size:15px;line-height:1.5;color:#475569;margin:0;">
//                 I typically respond within <strong style="color:#1e3c72;">24 hours</strong> during business days. 
//                 Learn more at <a href="https://yonasfsaha.com" style="color:#3b82f6;text-decoration:none;font-weight:600;">yonasfsaha.com</a>.
//               </p>
//             </div>
            
//             <!-- User's Message -->
//             <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:24px 0;border:1px solid #e2e8f0;">
//               <h3 style="color:#1e3c72;margin:0 0 16px 0;font-size:18px;font-weight:600;display:flex;align-items:center;gap:8px;">
//                 <span>📨</span> Your Message
//               </h3>
//               <div style="background:white;border-left:3px solid #3b82f6;padding:16px;border-radius:0 6px 6px 0;margin-top:12px;">
//                 <p style="color:#475569;margin:0;line-height:1.6;white-space:pre-line;font-size:14px;">${message}</p>
//               </div>
//               <p style="color:#64748b;font-size:13px;margin:12px 0 0 0;line-height:1.4;font-style:italic;">
//                 This is the message you submitted. I'll respond to this content.
//               </p>
//             </div>
            
//             <!-- CTA Buttons -->
//             <div style="background:white;border:1px solid #3b82f6;border-radius:8px;padding:24px 20px;text-align:center;margin:24px 0;">
//               <h3 style="color:#1e3c72;margin:0 0 16px 0;font-size:18px;font-weight:600;">📋 Explore More</h3>
//               <p style="color:#475569;margin:0 0 20px 0;font-size:15px;">You might want to check out:</p>
//               <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
//                 <a href="https://github.com/yonas-fsaha" style="background:linear-gradient(135deg,#1e293b 0%,#334155 100%);color:white;padding:14px 32px;text-decoration:none;border-radius:24px;font-weight:600;width:100%;max-width:260px;display:block;text-align:center;font-size:15px;box-shadow:0 3px 12px rgba(30,41,59,0.1);">
//                   View My GitHub Projects
//                 </a>
//                 <a href="https://vibeica.com" style="background:linear-gradient(135deg,#0ea5e9 0%,#3b82f6 100%);color:white;padding:14px 32px;text-decoration:none;border-radius:24px;font-weight:600;width:100%;max-width:260px;display:block;text-align:center;font-size:15px;box-shadow:0 3px 12px rgba(14,165,233,0.1);">
//                   Visit Vibeica Technology
//                 </a>
//               </div>
//             </div>
            
            
//             <!-- Contact Information -->
//             <div style="background:white;border-radius:8px;padding:24px 20px;margin:24px 0;border:1px solid #e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
//               <h3 style="color:#1e3c72;margin:0 0 20px 0;font-size:18px;font-weight:600;display:flex;align-items:center;gap:8px;">
//                 <span>📞</span> Contact Information
//               </h3>
//               <div style="display:grid;grid-template-columns:1fr;gap:16px;">
//                 <!-- Location -->
//                 <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
//                   <span style="color:#3b82f6;font-size:18px;min-width:24px;">📍</span>
//                   <div>
//                     <p style="color:#1e3c72;font-weight:600;margin:0 0 4px 0;font-size:14px;">Location</p>
//                     <p style="color:#475569;margin:0;font-size:14px;">Addis Ababa, Ethiopia</p>
//                   </div>
//                 </div>
                
//                 <!-- Emails -->
//                 <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
//                   <span style="color:#3b82f6;font-size:18px;min-width:24px;">📧</span>
//                   <div style="flex:1;">
//                     <p style="color:#1e3c72;font-weight:600;margin:0 0 8px 0;font-size:14px;">Email</p>
//                     <div style="display:flex;flex-direction:column;gap:8px;">
//                       <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
//                         <span style="color:#3b82f6;font-size:16px;">📨</span>
//                         <span style="color:#475569;font-size:14px;">yonasfsaha404@gmail.com</span>
//                       </div>
//                       <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
//                         <span style="color:#3b82f6;font-size:16px;">📨</span>
//                         <span style="color:#475569;font-size:14px;">umyonas7@gmail.com</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <!-- Phone Numbers -->
//                 <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
//                   <span style="color:#3b82f6;font-size:18px;min-width:24px;">📱</span>
//                   <div style="flex:1;">
//                     <p style="color:#1e3c72;font-weight:600;margin:0 0 8px 0;font-size:14px;">Phone</p>
//                     <div style="display:flex;flex-direction:column;gap:8px;">
//                       <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
//                         <span style="color:#3b82f6;font-size:16px;">📞</span>
//                         <span style="color:#475569;font-size:14px;">+251 966 356 211</span>
//                       </div>
//                       <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:white;border-radius:4px;border:1px solid #e2e8f0;">
//                         <span style="color:#3b82f6;font-size:16px;">📞</span>
//                         <span style="color:#475569;font-size:14px;">+251 913 198 516</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <!-- WhatsApp -->
//                 <div style="display:flex;align-items:flex-start;gap:12px;padding:12px;background:#f8fafc;border-radius:6px;">
//                   <span style="color:#3b82f6;font-size:18px;min-width:24px;">💬</span>
//                   <div style="flex:1;">
//                     <p style="color:#1e3c72;font-weight:600;margin:0 0 8px 0;font-size:14px;">WhatsApp</p>
//                     <a href="https://wa.me/251966356211" style="background:#25D366;color:white;padding:12px 24px;text-decoration:none;border-radius:20px;font-weight:600;display:inline-flex;align-items:center;gap:8px;font-size:14px;box-shadow:0 3px 12px rgba(37,211,102,0.15);">
//                       <span>💬</span>
//                       Chat on WhatsApp
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <!-- Website Link - Above Social -->
//             <div style="text-align:center;margin:24px 0;padding:20px;background:linear-gradient(135deg,#f8fafc 0%,#ffffff 100%);border-radius:8px;border:1px dashed #e2e8f0;">
//               <h3 style="color:#1e3c72;margin:0 0 12px 0;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;">
//                 <span>🌐</span> Official Website
//               </h3>
//               <p style="color:#475569;margin:0 0 16px 0;font-size:14px;line-height:1.4;">
//                 Complete overview of my work, skills, and projects
//               </p>
//               <a href="https://yonasfsaha.com" style="color:#8b5cf6;text-decoration:none;font-weight:600;font-size:16px;padding:12px 32px;background:white;border-radius:20px;display:inline-flex;align-items:center;gap:8px;border:2px solid #8b5cf6;">
//                 yonasfsaha.com
//               </a>
//             </div>
            
//             <!-- Social Links -->
//             <div style="text-align:center;padding-top:24px;border-top:1px solid #e2e8f0;">
//               <p style="color:#1e3c72;font-weight:700;margin:0 0 4px 0;font-size:20px;">Yonas Fsaha</p>
//               <p style="color:#475569;margin:0 0 24px 0;font-size:14px;">Full-Stack Developer & Tech Entrepreneur</p>
              
//               <!-- Social Links Row -->
//               <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
//                 <a href="https://github.com/yonas-fsaha" style="color:#333;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
//                   GitHub
//                 </a>
//                 <a href="https://linkedin.com/in/yonas-fsaha" style="color:#0077b5;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
//                   LinkedIn
//                 </a>
//                 <a href="https://x.com/YonasFsaha" style="color:#1da1f2;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
//                   X
//                 </a>
//                 <a href="https://t.me/c404der" style="color:#0088cc;text-decoration:none;font-weight:600;font-size:14px;padding:10px 20px;background:#f1f5f9;border-radius:20px;display:inline-flex;align-items:center;gap:6px;border:1px solid #e2e8f0;">
//                   Telegram
//                 </a>
//               </div>
              
//               <!-- Footer -->
//               <p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.4;">
//                 This is an automated confirmation. Please do not reply to this email directly.<br>
//                 If you need to send additional information, please reply to the thread.
//               </p>
//             </div>
//           </div>
//         </div>
//       `
//     }

//     // Send emails
//     await transporter.sendMail(adminMailOptions)
//     await transporter.sendMail(userMailOptions)

//     return NextResponse.json({
//       success: true,
//       message: 'Message sent successfully! Check your email for confirmation.'
//     })

//   } catch (error) {
//     console.error('Email error:', error)
    
//     let userMessage = 'Failed to send message. Please try again later.'
    
//     if (error.code === 'EAUTH') {
//       userMessage = 'Email configuration error. Please try again or contact me directly.'
//     } else if (error.code === 'ENOTFOUND') {
//       userMessage = 'Network error. Please check your internet connection.'
//     }

//     return NextResponse.json(
//       { 
//         success: false, 
//         message: userMessage 
//       },
//       { status: 500 }
//     )
//   }
// }




























// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(request) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, phoneCode, service, message } = body

//     // Validation
//     if (!name?.trim() || !email?.trim() || !message?.trim()) {
//       return NextResponse.json(
//         { success: false, message: 'Name, email, and message are required' },
//         { status: 400 }
//       )
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { success: false, message: 'Please enter a valid email address' },
//         { status: 400 }
//       )
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//         ciphers: 'SSLv3'
//       }
//     })

//     await transporter.verify()

//     // Admin email
//     const adminMailOptions = {
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       replyTo: email,
//       subject: `📧 New Contact: ${name} - ${service || 'General Inquiry'}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="margin: 0; font-size: 24px;">🚀 New Portfolio Contact</h1>
//             <p style="margin: 10px 0 0; opacity: 0.9;">From: ${name}</p>
//           </div>
          
//           <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
//             <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">👤 Name:</strong> ${name}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📧 Email:</strong> ${email}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📱 Phone:</strong> ${phoneCode || ''} ${phone || 'Not provided'}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">🎯 Service:</strong> ${service || 'Not specified'}</p>
//               <p style="margin: 15px 0 5px 0;"><strong style="color: #1e3c72;">📝 Message:</strong></p>
//               <p style="margin: 10px 0; background: #f1f5f9; padding: 15px; border-radius: 5px; white-space: pre-line;">${message}</p>
//             </div>
            
//             <div style="text-align: center; color: #64748b; font-size: 14px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
//               <p>✅ Sent from your portfolio contact form</p>
//               <p>🕒 ${new Date().toLocaleString('en-US', { 
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 timeZoneName: 'short'
//               })}</p>
//             </div>
//           </div>
//         </div>
//       `
//     }

//     // User confirmation email - PRODUCTION READY VERSION
//     const userMailOptions = {
//       from: `"Yonas Fsaha" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `✅ Thank you for contacting Yonas Fsaha!`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Thank You for Contacting Yonas Fsaha</title>
//         </head>
//         <body style="margin: 0; padding: 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background-color: #f8fafc; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
//           <!-- Main Container -->
//           <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);">
            
//             <!-- Header -->
//             <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 48px 32px; text-align: center;">
//               <h1 style="margin: 0 0 16px 0; font-size: 32px; font-weight: 700; line-height: 1.2;">👋 Thank You, ${name}!</h1>
//               <p style="margin: 0; opacity: 0.95; font-size: 17px; line-height: 1.5;">Your message has been received successfully</p>
//             </div>
            
//             <!-- Content Area -->
//             <div style="padding: 48px 32px;">
              
//               <!-- Greeting Section - FIXED PRONOUN -->
//               <div style="margin-bottom: 40px;">
//                 <p style="font-size: 17px; line-height: 1.6; color: #475569; margin: 0 0 20px 0;">
//                   Dear <strong style="color: #1e3c72;">${name}</strong>,
//                 </p>
//                 <p style="font-size: 17px; line-height: 1.6; color: #475569; margin: 0 0 20px 0;">
//                   Thank you for reaching out regarding <strong style="color: #1e3c72;">${service || 'your project'}</strong>. 
//                   I have received your message and will review it carefully.
//                 </p>
//                 <p style="font-size: 17px; line-height: 1.6; color: #475569; margin: 0;">
//                   I typically respond within <strong style="color: #1e3c72;">24 hours</strong> during business days. 
//                   You can also learn more about my work at <a href="https://yonasfsaha.com" style="color: #3b82f6; text-decoration: none; font-weight: 600; border-bottom: 2px solid rgba(59, 130, 246, 0.3);">yonasfsaha.com</a>.
//                 </p>
//               </div>
              
//               <!-- User's Message Section -->
//               <div style="background: #f8fafc; border-radius: 12px; padding: 32px; margin: 48px 0; border: 2px solid #e2e8f0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 24px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; gap: 12px;">
//                   <span style="font-size: 26px;">📨</span> Your Message
//                 </h3>
//                 <div style="background: white; border-left: 5px solid #3b82f6; padding: 24px; border-radius: 0 10px 10px 0; margin-top: 20px;">
//                   <p style="color: #475569; margin: 0; line-height: 1.7; white-space: pre-line; font-size: 16px;">${message}</p>
//                 </div>
//                 <p style="color: #64748b; font-size: 15px; margin: 20px 0 0 0; line-height: 1.5; font-style: italic;">
//                   This is the message you submitted. I'll respond to this content.
//                 </p>
//               </div>
              
//               <!-- CTA Buttons Section (GitHub & Vibeica ONLY) -->
//               <div style="background: white; border: 2px solid #3b82f6; border-radius: 12px; padding: 40px 32px; text-align: center; margin: 48px 0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 28px 0; font-size: 24px; font-weight: 600;">📋 Explore More</h3>
//                 <p style="color: #475569; margin: 0 0 32px 0; font-size: 17px; line-height: 1.5;">You might want to check out:</p>
                
//                 <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
//                   <!-- GitHub Button -->
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); 
//                             color: white; padding: 18px 48px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 300px;
//                             display: block; text-align: center; font-size: 17px;
//                             box-shadow: 0 6px 20px rgba(30, 41, 59, 0.15);
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
//                     View My GitHub Projects
//                   </a>
                  
//                   <!-- Vibeica Button -->
//                   <a href="https://vibeica.com" 
//                      style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); 
//                             color: white; padding: 18px 48px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 300px;
//                             display: block; text-align: center; font-size: 17px;
//                             box-shadow: 0 6px 20px rgba(14, 165, 233, 0.15);
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
//                     Visit Vibeica Technology
//                   </a>
//                 </div>
//               </div>
              
              
//               <!-- Contact Information Section -->
//               <div style="background: white; border-radius: 12px; padding: 40px 32px; margin: 48px 0; border: 1px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);">
//                 <h3 style="color: #1e3c72; margin: 0 0 32px 0; font-size: 24px; font-weight: 600; display: flex; align-items: center; gap: 12px;">
//                   <span style="font-size: 26px;">📞</span> Contact Information
//                 </h3>
                
//                 <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
//                   <!-- Location -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">📍</span>
//                     <div>
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0; font-size: 16px;">Location</p>
//                       <p style="color: #475569; margin: 0; font-size: 16px; line-height: 1.6;">Addis Ababa, Ethiopia</p>
//                     </div>
//                   </div>
                  
//                   <!-- Emails -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">📧</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Email Address</p>
//                       <div style="display: flex; flex-direction: column; gap: 12px;">
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📨</span>
//                           <span style="color: #475569; font-size: 16px;">yonasfsaha404@gmail.com</span>
//                         </div>
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📨</span>
//                           <span style="color: #475569; font-size: 16px;">umyonas7@gmail.com</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- Phone Numbers -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">📱</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Phone Numbers</p>
//                       <div style="display: flex; flex-direction: column; gap: 12px;">
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📞</span>
//                           <span style="color: #475569; font-size: 16px;">+251 966 356 211</span>
//                         </div>
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📞</span>
//                           <span style="color: #475569; font-size: 16px;">+251 913 198 516</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- WhatsApp -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">💬</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">WhatsApp</p>
//                       <a href="https://wa.me/251966356211" 
//                          style="background: #25D366; color: white; padding: 16px 32px; 
//                                 text-decoration: none; border-radius: 30px; font-weight: 600;
//                                 display: inline-flex; align-items: center; gap: 12px;
//                                 font-size: 16px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                                 box-shadow: 0 6px 20px rgba(37, 211, 102, 0.2);">
//                         <span style="font-size: 22px;">💬</span>
//                         Chat on WhatsApp
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <!-- SEPARATE Website Link Section (ABOVE Social Links) -->
//               <div style="text-align: center; margin: 48px 0; padding: 40px 32px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%); border-radius: 12px; border: 2px dashed #e2e8f0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 12px;">
//                   <span style="font-size: 24px;">🌐</span> Official Website
//                 </h3>
//                 <p style="color: #475569; margin: 0 0 28px 0; font-size: 16px; line-height: 1.6;">
//                   For the complete overview of my work, skills, and projects
//                 </p>
                
//                 <!-- Website Link (ALONE) -->
//                 <a href="https://yonasfsaha.com" 
//                    style="color: #8b5cf6; text-decoration: none; font-weight: 700; font-size: 18px;
//                           padding: 16px 40px; background: white; border-radius: 30px;
//                           display: inline-flex; align-items: center; gap: 12px;
//                           border: 2px solid #8b5cf6; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                           box-shadow: 0 6px 20px rgba(139, 92, 246, 0.15);">
//                   <span style="font-size: 22px;"></span>
//                   yonasfsaha.com
//                 </a>
//               </div>
              
//               <!-- Social Links Section (BELOW Website Link) -->
//               <div style="text-align: center; padding-top: 48px; border-top: 1px solid #e2e8f0;">
//                 <!-- Name & Title -->
//                 <p style="color: #1e3c72; font-weight: 700; margin: 0 0 8px 0; font-size: 24px;">Yonas Fsaha</p>
//                 <p style="color: #475569; margin: 0 0 40px 0; font-size: 16px; line-height: 1.6;">
//                   Full-Stack Developer & Tech Entrepreneur
//                 </p>
                
//                 <!-- Social Links Row -->
//                 <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-bottom: 48px;">
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="color: #333; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     GitHub
//                   </a>
                  
//                   <a href="https://linkedin.com/in/yonas-fsaha" 
//                      style="color: #0077b5; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     LinkedIn
//                   </a>
                  
//                   <a href="https://x.com/YonasFsaha" 
//                      style="color: #1da1f2; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     X
//                   </a>
                  
//                   <a href="https://t.me/c404der" 
//                      style="color: #0088cc; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     Telegram
//                   </a>
//                 </div>
                
//                 <!-- Footer Note -->
//                 <p style="color: #94a3b8; font-size: 14px; margin: 0; line-height: 1.6;">
//                   This is an automated confirmation. Please do not reply to this email directly.<br>
//                   If you need to send additional information, please reply to the thread.
//                 </p>
//               </div>
              
//             </div>
//           </div>
          
//           <!-- Mobile Responsive Styles -->
//           <style>
//             @media only screen and (max-width: 640px) {
//               body {
//                 padding: 16px !important;
//               }
//               div[style*="max-width: 600px"] {
//                 margin: 0 !important;
//                 border-radius: 10px !important;
//               }
//               div[style*="padding: 48px 32px"] {
//                 padding: 32px 24px !important;
//               }
//               h1 {
//                 font-size: 28px !important;
//               }
//               h3 {
//                 font-size: 22px !important;
//               }
//               p {
//                 font-size: 16px !important;
//               }
//               /* Contact Info Stacking */
//               div[style*="display: grid"] {
//                 gap: 20px !important;
//               }
//               div[style*="display: flex; align-items: flex-start; gap: 20px"] {
//                 flex-direction: column !important;
//                 gap: 16px !important;
//                 padding: 20px 16px !important;
//               }
//               span[style*="min-width: 36px"] {
//                 min-width: 32px !important;
//               }
//               /* Social Links Stacking */
//               div[style*="justify-content: center"] {
//                 gap: 16px !important;
//               }
//               a[style*="padding: 14px 28px"] {
//                 padding: 12px 20px !important;
//                 font-size: 15px !important;
//                 flex: 1;
//                 min-width: 140px;
//                 max-width: 200px;
//                 justify-content: center;
//               }
//               /* Button Adjustments */
//               a[style*="max-width: 300px"] {
//                 max-width: 100% !important;
//                 padding: 16px 32px !important;
//               }
//               a[style*="padding: 20px 56px"] {
//                 padding: 18px 40px !important;
//                 width: 100%;
//                 max-width: 300px;
//               }
//               a[style*="padding: 16px 40px"] {
//                 padding: 14px 32px !important;
//                 width: 100%;
//                 max-width: 300px;
//               }
//             }
            
//             @media only screen and (max-width: 480px) {
//               div[style*="padding: 48px 32px"] {
//                 padding: 24px 16px !important;
//               }
//               h1 {
//                 font-size: 26px !important;
//               }
//               h3 {
//                 font-size: 20px !important;
//               }
//               a[style*="padding: 14px 28px"] {
//                 min-width: 120px !important;
//                 font-size: 14px !important;
//                 padding: 10px 16px !important;
//               }
//             }
            
//             /* Hover Effects */
//             a:hover {
//               transform: translateY(-4px) !important;
//               box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15) !important;
//             }
            
//             a[style*="border: 2px solid #8b5cf6"]:hover {
//               background: #8b5cf6 !important;
//               color: white !important;
//               border-color: #8b5cf6 !important;
//             }
            
//             /* Email Client Safe Animation */
//             @media screen {
//               a {
//                 transition: all 0.3s ease !important;
//               }
//             }
//           </style>
//         </body>
//         </html>
//       `
//     }

//     // Send emails
//     await transporter.sendMail(adminMailOptions)
//     await transporter.sendMail(userMailOptions)

//     return NextResponse.json({
//       success: true,
//       message: 'Message sent successfully! Check your email for confirmation.'
//     })

//   } catch (error) {
//     console.error('Email error:', error)
    
//     let userMessage = 'Failed to send message. Please try again later.'
    
//     if (error.code === 'EAUTH') {
//       userMessage = 'Email configuration error. Please try again or contact me directly.'
//     } else if (error.code === 'ENOTFOUND') {
//       userMessage = 'Network error. Please check your internet connection.'
//     } else if (error.code === 'ECONNECTION') {
//       userMessage = 'Connection error. Please check your internet and try again.'
//     }

//     return NextResponse.json(
//       { 
//         success: false, 
//         message: userMessage,
//         error: process.env.NODE_ENV === 'development' ? error.message : undefined
//       },
//       { status: 500 }
//     )
//   }
// }



























// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(request) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, phoneCode, service, message } = body

//     // Validation
//     if (!name?.trim() || !email?.trim() || !message?.trim()) {
//       return NextResponse.json(
//         { success: false, message: 'Name, email, and message are required' },
//         { status: 400 }
//       )
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { success: false, message: 'Please enter a valid email address' },
//         { status: 400 }
//       )
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//         ciphers: 'SSLv3'
//       }
//     })

//     await transporter.verify()

//     // Admin email
//     const adminMailOptions = {
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       replyTo: email,
//       subject: `📧 New Contact: ${name} - ${service || 'General Inquiry'}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="margin: 0; font-size: 24px;">🚀 New Portfolio Contact</h1>
//             <p style="margin: 10px 0 0; opacity: 0.9;">From: ${name}</p>
//           </div>
          
//           <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
//             <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">👤 Name:</strong> ${name}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📧 Email:</strong> ${email}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📱 Phone:</strong> ${phoneCode || ''} ${phone || 'Not provided'}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">🎯 Service:</strong> ${service || 'Not specified'}</p>
//               <p style="margin: 15px 0 5px 0;"><strong style="color: #1e3c72;">📝 Message:</strong></p>
//               <p style="margin: 10px 0; background: #f1f5f9; padding: 15px; border-radius: 5px; white-space: pre-line;">${message}</p>
//             </div>
            
//             <div style="text-align: center; color: #64748b; font-size: 14px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
//               <p>✅ Sent from your portfolio contact form</p>
//               <p>🕒 ${new Date().toLocaleString('en-US', { 
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 timeZoneName: 'short'
//               })}</p>
//             </div>
//           </div>
//         </div>
//       `
//     }

//     // User confirmation email - PRODUCTION READY VERSION
//     const userMailOptions = {
//       from: `"Yonas Fsaha" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `✅ Thank you for contacting Yonas Fsaha!`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Thank You for Contacting Yonas Fsaha</title>
//         </head>
//         <body style="margin: 0; padding: 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background-color: #f8fafc; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
//           <!-- Main Container -->
//           <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);">
            
//             <!-- Header -->
//             <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 48px 32px; text-align: center;">
//               <h1 style="margin: 0 0 16px 0; font-size: 32px; font-weight: 700; line-height: 1.2;">👋 Thank You, ${name}!</h1>
//               <p style="margin: 0; opacity: 0.95; font-size: 17px; line-height: 1.5;">Your message has been received successfully</p>
//             </div>
            
//             <!-- Content Area -->
//             <div style="padding: 48px 32px;">
              
//               <!-- Greeting Section - FIXED PRONOUN -->
//               <div style="margin-bottom: 40px;">
//                 <p style="font-size: 17px; line-height: 1.6; color: #475569; margin: 0 0 20px 0;">
//                   Dear <strong style="color: #1e3c72;">${name}</strong>,
//                 </p>
//                 <p style="font-size: 17px; line-height: 1.6; color: #475569; margin: 0 0 20px 0;">
//                   Thank you for reaching out regarding <strong style="color: #1e3c72;">${service || 'your project'}</strong>. 
//                   I have received your message and will review it carefully.
//                 </p>
//                 <p style="font-size: 17px; line-height: 1.6; color: #475569; margin: 0;">
//                   I typically respond within <strong style="color: #1e3c72;">24 hours</strong> during business days. 
//                   You can also learn more about my work at <a href="https://yonasfsaha.com" style="color: #3b82f6; text-decoration: none; font-weight: 600; border-bottom: 2px solid rgba(59, 130, 246, 0.3);">yonasfsaha.com</a>.
//                 </p>
//               </div>
              
//               <!-- User's Message Section -->
//               <div style="background: #f8fafc; border-radius: 12px; padding: 32px; margin: 48px 0; border: 2px solid #e2e8f0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 24px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; gap: 12px;">
//                   <span style="font-size: 26px;">📨</span> Your Message
//                 </h3>
//                 <div style="background: white; border-left: 5px solid #3b82f6; padding: 24px; border-radius: 0 10px 10px 0; margin-top: 20px;">
//                   <p style="color: #475569; margin: 0; line-height: 1.7; white-space: pre-line; font-size: 16px;">${message}</p>
//                 </div>
//                 <p style="color: #64748b; font-size: 15px; margin: 20px 0 0 0; line-height: 1.5; font-style: italic;">
//                   This is the message you submitted. I'll respond to this content.
//                 </p>
//               </div>
              
//               <!-- CTA Buttons Section (GitHub & Vibeica ONLY) -->
//               <div style="background: white; border: 2px solid #3b82f6; border-radius: 12px; padding: 40px 32px; text-align: center; margin: 48px 0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 28px 0; font-size: 24px; font-weight: 600;">📋 Explore More</h3>
//                 <p style="color: #475569; margin: 0 0 32px 0; font-size: 17px; line-height: 1.5;">You might want to check out:</p>
                
//                 <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
//                   <!-- GitHub Button -->
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); 
//                             color: white; padding: 18px 48px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 300px;
//                             display: block; text-align: center; font-size: 17px;
//                             box-shadow: 0 6px 20px rgba(30, 41, 59, 0.15);
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
//                     View My GitHub Projects
//                   </a>
                  
//                   <!-- Vibeica Button -->
//                   <a href="https://vibeica.com" 
//                      style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); 
//                             color: white; padding: 18px 48px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 300px;
//                             display: block; text-align: center; font-size: 17px;
//                             box-shadow: 0 6px 20px rgba(14, 165, 233, 0.15);
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);">
//                     Visit Vibeica Technology
//                   </a>
//                 </div>
//               </div>
              
              
//               <!-- Contact Information Section -->
//               <div style="background: white; border-radius: 12px; padding: 40px 32px; margin: 48px 0; border: 1px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);">
//                 <h3 style="color: #1e3c72; margin: 0 0 32px 0; font-size: 24px; font-weight: 600; display: flex; align-items: center; gap: 12px;">
//                   <span style="font-size: 26px;">📞</span> Contact Information
//                 </h3>
                
//                 <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
//                   <!-- Location -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">📍</span>
//                     <div>
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0; font-size: 16px;">Location</p>
//                       <p style="color: #475569; margin: 0; font-size: 16px; line-height: 1.6;">Addis Ababa, Ethiopia</p>
//                     </div>
//                   </div>
                  
//                   <!-- Emails -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">📧</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Email Address</p>
//                       <div style="display: flex; flex-direction: column; gap: 12px;">
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📨</span>
//                           <span style="color: #475569; font-size: 16px;">yonasfsaha404@gmail.com</span>
//                         </div>
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📨</span>
//                           <span style="color: #475569; font-size: 16px;">umyonas7@gmail.com</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- Phone Numbers -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">📱</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">Phone Numbers</p>
//                       <div style="display: flex; flex-direction: column; gap: 12px;">
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📞</span>
//                           <span style="color: #475569; font-size: 16px;">+251 966 356 211</span>
//                         </div>
//                         <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
//                           <span style="color: #3b82f6; font-size: 20px;">📞</span>
//                           <span style="color: #475569; font-size: 16px;">+251 913 198 516</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- WhatsApp -->
//                   <div style="display: flex; align-items: flex-start; gap: 20px; padding: 20px; background: #f8fafc; border-radius: 10px;">
//                     <span style="color: #3b82f6; font-size: 24px; min-width: 36px;">💬</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 12px 0; font-size: 16px;">WhatsApp</p>
//                       <a href="https://wa.me/251966356211" 
//                          style="background: #25D366; color: white; padding: 16px 32px; 
//                                 text-decoration: none; border-radius: 30px; font-weight: 600;
//                                 display: inline-flex; align-items: center; gap: 12px;
//                                 font-size: 16px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                                 box-shadow: 0 6px 20px rgba(37, 211, 102, 0.2);">
//                         <span style="font-size: 22px;">💬</span>
//                         Chat on WhatsApp
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <!-- SEPARATE Website Link Section (ABOVE Social Links) -->
//               <div style="text-align: center; margin: 48px 0; padding: 40px 32px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%); border-radius: 12px; border: 2px dashed #e2e8f0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 12px;">
//                   <span style="font-size: 24px;">🌐</span> Official Website
//                 </h3>
//                 <p style="color: #475569; margin: 0 0 28px 0; font-size: 16px; line-height: 1.6;">
//                   For the complete overview of my work, skills, and projects
//                 </p>
                
//                 <!-- Website Link (ALONE) -->
//                 <a href="https://yonasfsaha.com" 
//                    style="color: #8b5cf6; text-decoration: none; font-weight: 700; font-size: 18px;
//                           padding: 16px 40px; background: white; border-radius: 30px;
//                           display: inline-flex; align-items: center; gap: 12px;
//                           border: 2px solid #8b5cf6; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                           box-shadow: 0 6px 20px rgba(139, 92, 246, 0.15);">
//                   <span style="font-size: 22px;">🌐</span>
//                   yonasfsaha.com
//                 </a>
//               </div>
              
//               <!-- Social Links Section (BELOW Website Link) -->
//               <div style="text-align: center; padding-top: 48px; border-top: 1px solid #e2e8f0;">
//                 <!-- Name & Title -->
//                 <p style="color: #1e3c72; font-weight: 700; margin: 0 0 8px 0; font-size: 24px;">Yonas Fsaha</p>
//                 <p style="color: #475569; margin: 0 0 40px 0; font-size: 16px; line-height: 1.6;">
//                   Full-Stack Developer & Tech Entrepreneur
//                 </p>
                
//                 <!-- Social Links Row -->
//                 <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-bottom: 48px;">
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="color: #333; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     GitHub
//                   </a>
                  
//                   <a href="https://linkedin.com/in/yonas-fsaha" 
//                      style="color: #0077b5; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     LinkedIn
//                   </a>
                  
//                   <a href="https://x.com/YonasFsaha" 
//                      style="color: #1da1f2; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     X
//                   </a>
                  
//                   <a href="https://t.me/c404der" 
//                      style="color: #0088cc; text-decoration: none; font-weight: 600; font-size: 16px;
//                             padding: 14px 28px; background: #f1f5f9; border-radius: 30px;
//                             display: inline-flex; align-items: center; gap: 10px;
//                             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//                             border: 1px solid #e2e8f0;">
//                     Telegram
//                   </a>
//                 </div>
                
//                 <!-- Footer Note -->
//                 <p style="color: #94a3b8; font-size: 14px; margin: 0; line-height: 1.6;">
//                   This is an automated confirmation. Please do not reply to this email directly.<br>
//                   If you need to send additional information, please reply to the thread.
//                 </p>
//               </div>
              
//             </div>
//           </div>
          
//           <!-- Mobile Responsive Styles -->
//           <style>
//             @media only screen and (max-width: 640px) {
//               body {
//                 padding: 16px !important;
//               }
//               div[style*="max-width: 600px"] {
//                 margin: 0 !important;
//                 border-radius: 10px !important;
//               }
//               div[style*="padding: 48px 32px"] {
//                 padding: 32px 24px !important;
//               }
//               h1 {
//                 font-size: 28px !important;
//               }
//               h3 {
//                 font-size: 22px !important;
//               }
//               p {
//                 font-size: 16px !important;
//               }
//               /* Contact Info Stacking */
//               div[style*="display: grid"] {
//                 gap: 20px !important;
//               }
//               div[style*="display: flex; align-items: flex-start; gap: 20px"] {
//                 flex-direction: column !important;
//                 gap: 16px !important;
//                 padding: 20px 16px !important;
//               }
//               span[style*="min-width: 36px"] {
//                 min-width: 32px !important;
//               }
//               /* Social Links Stacking */
//               div[style*="justify-content: center"] {
//                 gap: 16px !important;
//               }
//               a[style*="padding: 14px 28px"] {
//                 padding: 12px 20px !important;
//                 font-size: 15px !important;
//                 flex: 1;
//                 min-width: 140px;
//                 max-width: 200px;
//                 justify-content: center;
//               }
//               /* Button Adjustments */
//               a[style*="max-width: 300px"] {
//                 max-width: 100% !important;
//                 padding: 16px 32px !important;
//               }
//               a[style*="padding: 20px 56px"] {
//                 padding: 18px 40px !important;
//                 width: 100%;
//                 max-width: 300px;
//               }
//               a[style*="padding: 16px 40px"] {
//                 padding: 14px 32px !important;
//                 width: 100%;
//                 max-width: 300px;
//               }
//             }
            
//             @media only screen and (max-width: 480px) {
//               div[style*="padding: 48px 32px"] {
//                 padding: 24px 16px !important;
//               }
//               h1 {
//                 font-size: 26px !important;
//               }
//               h3 {
//                 font-size: 20px !important;
//               }
//               a[style*="padding: 14px 28px"] {
//                 min-width: 120px !important;
//                 font-size: 14px !important;
//                 padding: 10px 16px !important;
//               }
//             }
            
//             /* Hover Effects */
//             a:hover {
//               transform: translateY(-4px) !important;
//               box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15) !important;
//             }
            
//             a[style*="border: 2px solid #8b5cf6"]:hover {
//               background: #8b5cf6 !important;
//               color: white !important;
//               border-color: #8b5cf6 !important;
//             }
            
//             /* Email Client Safe Animation */
//             @media screen {
//               a {
//                 transition: all 0.3s ease !important;
//               }
//             }
//           </style>
//         </body>
//         </html>
//       `
//     }

//     // Send emails
//     await transporter.sendMail(adminMailOptions)
//     await transporter.sendMail(userMailOptions)

//     return NextResponse.json({
//       success: true,
//       message: 'Message sent successfully! Check your email for confirmation.'
//     })

//   } catch (error) {
//     console.error('Email error:', error)
    
//     let userMessage = 'Failed to send message. Please try again later.'
    
//     if (error.code === 'EAUTH') {
//       userMessage = 'Email configuration error. Please try again or contact me directly.'
//     } else if (error.code === 'ENOTFOUND') {
//       userMessage = 'Network error. Please check your internet connection.'
//     } else if (error.code === 'ECONNECTION') {
//       userMessage = 'Connection error. Please check your internet and try again.'
//     }

//     return NextResponse.json(
//       { 
//         success: false, 
//         message: userMessage,
//         error: process.env.NODE_ENV === 'development' ? error.message : undefined
//       },
//       { status: 500 }
//     )
//   }
// }















// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(request) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, phoneCode, service, message } = body

//     // Validation
//     if (!name?.trim() || !email?.trim() || !message?.trim()) {
//       return NextResponse.json(
//         { success: false, message: 'Name, email, and message are required' },
//         { status: 400 }
//       )
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { success: false, message: 'Please enter a valid email address' },
//         { status: 400 }
//       )
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//         ciphers: 'SSLv3'
//       }
//     })

//     await transporter.verify()

//     // Admin email (unchanged)
//     const adminMailOptions = {
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       replyTo: email,
//       subject: `📧 New Contact: ${name} - ${service || 'General Inquiry'}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="margin: 0; font-size: 24px;">🚀 New Portfolio Contact</h1>
//             <p style="margin: 10px 0 0; opacity: 0.9;">From: ${name}</p>
//           </div>
          
//           <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
//             <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">👤 Name:</strong> ${name}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📧 Email:</strong> ${email}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📱 Phone:</strong> ${phoneCode || ''} ${phone || 'Not provided'}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">🎯 Service:</strong> ${service || 'Not specified'}</p>
//               <p style="margin: 15px 0 5px 0;"><strong style="color: #1e3c72;">📝 Message:</strong></p>
//               <p style="margin: 10px 0; background: #f1f5f9; padding: 15px; border-radius: 5px; white-space: pre-line;">${message}</p>
//             </div>
            
//             <div style="text-align: center; color: #64748b; font-size: 14px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
//               <p>✅ Sent from your portfolio contact form</p>
//               <p>🕒 ${new Date().toLocaleString('en-US', { 
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 timeZoneName: 'short'
//               })}</p>
//             </div>
//           </div>
//         </div>
//       `
//     }

//     // User confirmation email - WITH WEBSITE LINK ADDED
//     const userMailOptions = {
//       from: `"Yonas Fsaha" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `✅ Thank you for contacting Yonas Fsaha!`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         </head>
//         <body style="margin: 0; padding: 20px 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
//           <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
            
//             <!-- Header -->
//             <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 40px 30px; text-align: center;">
//               <h1 style="margin: 0 0 15px 0; font-size: 28px; font-weight: 600;">👋 Thank You, ${name}!</h1>
//               <p style="margin: 0; opacity: 0.9; font-size: 16px;">Your message has been received successfully</p>
//             </div>
            
//             <!-- Content -->
//             <div style="padding: 40px 30px;">
              
//               <!-- Greeting - UPDATED WITH WEBSITE MENTION -->
//               <div style="margin-bottom: 35px;">
//                 <p style="font-size: 16px; line-height: 1.6; color: #475569; margin: 0 0 15px 0;">
//                   Dear <strong style="color: #1e3c72;">${name}</strong>,
//                 </p>
//                 <p style="font-size: 16px; line-height: 1.6; color: #475569; margin: 0 0 15px 0;">
//                   Thank you for reaching out regarding <strong style="color: #1e3c72;">${service || 'your project'}</strong>. 
//                   Yonas has received your message and will review it carefully.
//                 </p>
//                 <p style="font-size: 16px; line-height: 1.6; color: #475569; margin: 0;">
//                   He typically responds within <strong style="color: #1e3c72;">24 hours</strong> during business days.
//                   You can also learn more about his work at <a href="https://yonasfsaha.com" style="color: #3b82f6; text-decoration: none; font-weight: 600;">yonasfsaha.com</a>.
//                 </p>
//               </div>
              
//               <!-- User's Message -->
//               <div style="background: #f8fafc; border-radius: 10px; padding: 25px; margin: 35px 0; border: 2px solid #e2e8f0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center; gap: 10px;">
//                   <span style="font-size: 24px;">📨</span> Your Message
//                 </h3>
//                 <div style="background: white; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 0 8px 8px 0;">
//                   <p style="color: #475569; margin: 0; line-height: 1.6; white-space: pre-line; font-size: 15px;">${message}</p>
//                 </div>
//                 <p style="color: #64748b; font-size: 14px; margin: 15px 0 0 0; line-height: 1.5;">
//                   <em>This is the message you submitted. He'll respond to this content.</em>
//                 </p>
//               </div>
              
//               <!-- CTA Buttons with proper spacing -->
//               <div style="background: white; border: 2px solid #3b82f6; border-radius: 10px; padding: 30px; text-align: center; margin: 40px 0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 25px 0; font-size: 20px;">📋 In the meantime...</h3>
//                 <p style="color: #475569; margin: 0 0 25px 0; font-size: 16px;">You might want to check out:</p>
                
//                 <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
//                   <!-- GitHub Button -->
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); 
//                             color: white; padding: 16px 40px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 280px;
//                             display: block; text-align: center; font-size: 16px;
//                             box-shadow: 0 4px 15px rgba(30, 60, 114, 0.2);
//                             transition: all 0.3s ease;">
//                     View My GitHub Projects
//                   </a>
                  
//                   <!-- Vibeica Button -->
//                   <a href="https://vibeica.com" 
//                      style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); 
//                             color: white; padding: 16px 40px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 280px;
//                             display: block; text-align: center; font-size: 16px;
//                             box-shadow: 0 4px 15px rgba(14, 165, 233, 0.2);
//                             transition: all 0.3s ease;">
//                     Visit Vibeica Technology
//                   </a>
                  
//                   <!-- Personal Website Button - ADDED -->
//                   <a href="https://yonasfsaha.com" 
//                      style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); 
//                             color: white; padding: 16px 40px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 280px;
//                             display: block; text-align: center; font-size: 16px;
//                             box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
//                             transition: all 0.3s ease;">
//                     Visit My Portfolio Website
//                   </a>
//                 </div>
//               </div>
              
//               <!-- Contact Information -->
//               <div style="background: white; border-radius: 10px; padding: 30px; margin: 40px 0; border: 1px solid #e2e8f0; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
//                 <h3 style="color: #1e3c72; margin: 0 0 25px 0; font-size: 20px; display: flex; align-items: center; gap: 10px;">
//                   <span style="font-size: 24px;">📞</span> Contact Information
//                 </h3>
                
//                 <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
//                   <!-- Location -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">📍</span>
//                     <div>
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 5px 0;">Location</p>
//                       <p style="color: #475569; margin: 0; font-size: 15px;">Addis Ababa, Ethiopia</p>
//                     </div>
//                   </div>
                  
//                   <!-- Emails -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">📧</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0;">Email Address</p>
//                       <div style="display: flex; flex-direction: column; gap: 10px;">
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📨 yonasfsaha404@gmail.com
//                         </p>
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📨 umyonas7@gmail.com
//                         </p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- Phone Numbers -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">📱</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0;">Phone Numbers</p>
//                       <div style="display: flex; flex-direction: column; gap: 10px;">
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📞 +251 966 356 211
//                         </p>
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📞 +251 913 198 516
//                         </p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- WhatsApp -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">💬</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0;">WhatsApp</p>
//                       <a href="https://wa.me/251966356211" 
//                          style="background: #25D366; color: white; padding: 12px 25px; 
//                                 text-decoration: none; border-radius: 25px; font-weight: 600;
//                                 display: inline-flex; align-items: center; gap: 10px;
//                                 font-size: 15px; transition: all 0.3s ease;">
//                         <span style="font-size: 18px;">💬</span>
//                         Chat on WhatsApp
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <!-- Social Links - UPDATED WITH WEBSITE -->
//               <div style="text-align: center; padding-top: 40px; border-top: 1px solid #e2e8f0;">
//                 <p style="color: #1e3c72; font-weight: 700; margin: 0 0 8px 0; font-size: 20px;">Yonas Fsaha</p>
//                 <p style="color: #475569; margin: 0 0 35px 0; font-size: 15px;">
//                   Full-Stack Developer & Tech Entrepreneur
//                 </p>
                
//                 <!-- Social Links with Text - ADDED WEBSITE -->
//                 <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-bottom: 35px;">
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="color: #333; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     GitHub
//                   </a>
                  
//                   <a href="https://linkedin.com/in/yonas-fsaha" 
//                      style="color: #0077b5; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     LinkedIn
//                   </a>
                  
//                   <a href="https://x.com/YonasFsaha" 
//                      style="color: #1da1f2; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     X
//                   </a>
                  
//                   <a href="https://t.me/c404der" 
//                      style="color: #0088cc; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     Telegram
//                   </a>
                  
//                   <!-- Website Link - ADDED -->
//                   <a href="https://yonasfsaha.com" 
//                      style="color: #8b5cf6; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     Website
//                   </a>
//                 </div>
                
//                 <p style="color: #94a3b8; font-size: 13px; margin: 0; line-height: 1.6;">
//                   This is an automated confirmation. Please do not reply to this email directly.<br>
//                   If you need to send additional information, please reply to the thread.
//                 </p>
//               </div>
              
//             </div>
//           </div>
          
//           <!-- Mobile Responsive Styles -->
//           <style>
//             @media only screen and (max-width: 600px) {
//               body {
//                 padding: 10px !important;
//               }
//               div[style*="max-width: 600px"] {
//                 margin: 0 !important;
//                 border-radius: 8px !important;
//               }
//               .content-padding {
//                 padding: 25px 20px !important;
//               }
//               h1 {
//                 font-size: 24px !important;
//               }
//               h3 {
//                 font-size: 18px !important;
//               }
//               div[style*="display: grid"] {
//                 gap: 15px !important;
//               }
//               div[style*="justify-content: center"] {
//                 gap: 15px !important;
//                 justify-content: flex-start !important;
//                 padding: 0 10px !important;
//               }
//               div[style*="justify-content: center"] a {
//                 flex: 1;
//                 min-width: 140px;
//                 justify-content: center;
//               }
//               a[style*="max-width: 280px"] {
//                 max-width: 100% !important;
//                 padding: 14px 20px !important;
//               }
//             }
            
//             a:hover {
//               opacity: 0.9;
//               transform: translateY(-2px);
//               box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15) !important;
//             }
//           </style>
//         </body>
//         </html>
//       `
//     }

//     // Send emails
//     await transporter.sendMail(adminMailOptions)
//     await transporter.sendMail(userMailOptions)

//     return NextResponse.json({
//       success: true,
//       message: 'Message sent successfully! Check your email for confirmation.'
//     })

//   } catch (error) {
//     console.error('Email error:', error)
    
//     let userMessage = 'Failed to send message. Please try again later.'
    
//     if (error.code === 'EAUTH') {
//       userMessage = 'Email configuration error. Please try again or contact me directly.'
//     } else if (error.code === 'ENOTFOUND') {
//       userMessage = 'Network error. Please check your internet connection.'
//     }

//     return NextResponse.json(
//       { 
//         success: false, 
//         message: userMessage 
//       },
//       { status: 500 }
//     )
//   }
// }


























// import { NextResponse } from 'next/server'
// import nodemailer from 'nodemailer'

// export async function POST(request) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, phoneCode, service, message } = body

//     // Validation
//     if (!name?.trim() || !email?.trim() || !message?.trim()) {
//       return NextResponse.json(
//         { success: false, message: 'Name, email, and message are required' },
//         { status: 400 }
//       )
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { success: false, message: 'Please enter a valid email address' },
//         { status: 400 }
//       )
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//         ciphers: 'SSLv3'
//       }
//     })

//     await transporter.verify()

//     // Admin email (unchanged)
//     const adminMailOptions = {
//       from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_TO,
//       replyTo: email,
//       subject: `📧 New Contact: ${name} - ${service || 'General Inquiry'}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
//             <h1 style="margin: 0; font-size: 24px;">🚀 New Portfolio Contact</h1>
//             <p style="margin: 10px 0 0; opacity: 0.9;">From: ${name}</p>
//           </div>
          
//           <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
//             <div style="background: white; padding: 25px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">👤 Name:</strong> ${name}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📧 Email:</strong> ${email}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">📱 Phone:</strong> ${phoneCode || ''} ${phone || 'Not provided'}</p>
//               <p style="margin: 10px 0;"><strong style="color: #1e3c72;">🎯 Service:</strong> ${service || 'Not specified'}</p>
//               <p style="margin: 15px 0 5px 0;"><strong style="color: #1e3c72;">📝 Message:</strong></p>
//               <p style="margin: 10px 0; background: #f1f5f9; padding: 15px; border-radius: 5px; white-space: pre-line;">${message}</p>
//             </div>
            
//             <div style="text-align: center; color: #64748b; font-size: 14px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
//               <p>✅ Sent from your portfolio contact form</p>
//               <p>🕒 ${new Date().toLocaleString('en-US', { 
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 timeZoneName: 'short'
//               })}</p>
//             </div>
//           </div>
//         </div>
//       `
//     }

//     // User confirmation email - IMPROVED VERSION
//     const userMailOptions = {
//       from: `"Yonas Fsaha" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: `✅ Thank you for contacting Yonas Fsaha!`,
//       html: `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta charset="utf-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         </head>
//         <body style="margin: 0; padding: 20px 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa;">
//           <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
            
//             <!-- Header -->
//             <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 40px 30px; text-align: center;">
//               <h1 style="margin: 0 0 15px 0; font-size: 28px; font-weight: 600;">👋 Thank You, ${name}!</h1>
//               <p style="margin: 0; opacity: 0.9; font-size: 16px;">Your message has been received successfully</p>
//             </div>
            
//             <!-- Content -->
//             <div style="padding: 40px 30px;">
              
//               <!-- Greeting -->
//               <div style="margin-bottom: 35px;">
//                 <p style="font-size: 16px; line-height: 1.6; color: #475569; margin: 0 0 15px 0;">
//                   Dear <strong style="color: #1e3c72;">${name}</strong>,
//                 </p>
//                 <p style="font-size: 16px; line-height: 1.6; color: #475569; margin: 0 0 15px 0;">
//                   Thank you for reaching out regarding <strong style="color: #1e3c72;">${service || 'your project'}</strong>. 
//                   I have received your message and will review it carefully.
//                 </p>
//                 <p style="font-size: 16px; line-height: 1.6; color: #475569; margin: 0;">
//                   I typically respond within <strong style="color: #1e3c72;">24 hours</strong> during business days.
//                 </p>
//               </div>
              
//               <!-- User's Message -->
//               <div style="background: #f8fafc; border-radius: 10px; padding: 25px; margin: 35px 0; border: 2px solid #e2e8f0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center; gap: 10px;">
//                   <span style="font-size: 24px;">📨</span> Your Message
//                 </h3>
//                 <div style="background: white; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 0 8px 8px 0;">
//                   <p style="color: #475569; margin: 0; line-height: 1.6; white-space: pre-line; font-size: 15px;">${message}</p>
//                 </div>
//                 <p style="color: #64748b; font-size: 14px; margin: 15px 0 0 0; line-height: 1.5;">
//                   <em>This is the message you submitted. I'll respond to this content.</em>
//                 </p>
//               </div>
              
//               <!-- CTA Buttons with proper spacing -->
//               <div style="background: white; border: 2px solid #3b82f6; border-radius: 10px; padding: 30px; text-align: center; margin: 40px 0;">
//                 <h3 style="color: #1e3c72; margin: 0 0 25px 0; font-size: 20px;">📋 In the meantime...</h3>
//                 <p style="color: #475569; margin: 0 0 25px 0; font-size: 16px;">You might want to check out:</p>
                
//                 <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
//                   <!-- GitHub Button -->
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); 
//                             color: white; padding: 16px 40px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 280px;
//                             display: block; text-align: center; font-size: 16px;
//                             box-shadow: 0 4px 15px rgba(30, 60, 114, 0.2);
//                             transition: all 0.3s ease;">
//                     View My GitHub Projects
//                   </a>
                  
//                   <!-- Vibeica Button -->
//                   <a href="https://vibeica.com" 
//                      style="background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); 
//                             color: white; padding: 16px 40px; text-decoration: none; 
//                             border-radius: 30px; font-weight: 600; width: 100%; max-width: 280px;
//                             display: block; text-align: center; font-size: 16px;
//                             box-shadow: 0 4px 15px rgba(14, 165, 233, 0.2);
//                             transition: all 0.3s ease;">
//                     Visit Vibeica Technology
//                   </a>
//                 </div>
//               </div>
              
//               <!-- Contact Information - IMPROVED VERSION -->
//               <div style="background: white; border-radius: 10px; padding: 30px; margin: 40px 0; border: 1px solid #e2e8f0; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
//                 <h3 style="color: #1e3c72; margin: 0 0 25px 0; font-size: 20px; display: flex; align-items: center; gap: 10px;">
//                   <span style="font-size: 24px;">📞</span> Contact Information
//                 </h3>
                
//                 <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
//                   <!-- Location -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">📍</span>
//                     <div>
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 5px 0;">Location</p>
//                       <p style="color: #475569; margin: 0; font-size: 15px;">Addis Ababa, Ethiopia</p>
//                     </div>
//                   </div>
                  
//                   <!-- Emails -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">📧</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0;">Email Address</p>
//                       <div style="display: flex; flex-direction: column; gap: 10px;">
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📨 yonasfsaha404@gmail.com
//                         </p>
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📨 umyonas7@gmail.com
//                         </p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- Phone Numbers -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">📱</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0;">Phone Numbers</p>
//                       <div style="display: flex; flex-direction: column; gap: 10px;">
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📞 +251 966 356 211
//                         </p>
//                         <p style="color: #475569; margin: 0; font-size: 15px; padding: 8px 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
//                           📞 +251 913 198 516
//                         </p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <!-- WhatsApp -->
//                   <div style="display: flex; align-items: flex-start; gap: 15px; padding: 15px; background: #f8fafc; border-radius: 8px;">
//                     <span style="color: #3b82f6; font-size: 22px; min-width: 30px;">💬</span>
//                     <div style="flex: 1;">
//                       <p style="color: #1e3c72; font-weight: 600; margin: 0 0 8px 0;">WhatsApp</p>
//                       <a href="https://wa.me/251966356211" 
//                          style="background: #25D366; color: white; padding: 12px 25px; 
//                                 text-decoration: none; border-radius: 25px; font-weight: 600;
//                                 display: inline-flex; align-items: center; gap: 10px;
//                                 font-size: 15px; transition: all 0.3s ease;">
//                         <span style="font-size: 18px;">💬</span>
//                         Chat on WhatsApp
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <!-- Social Links with Text and Proper Spacing -->
//               <div style="text-align: center; padding-top: 40px; border-top: 1px solid #e2e8f0;">
//                 <!-- Name & Title -->
//                 <p style="color: #1e3c72; font-weight: 700; margin: 0 0 8px 0; font-size: 20px;">Yonas Fsaha</p>
//                 <p style="color: #475569; margin: 0 0 35px 0; font-size: 15px;">
//                   Full-Stack Developer & Tech Entrepreneur
//                 </p>
                
//                 <!-- Social Links with Text and Good Spacing -->
//                 <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 25px; margin-bottom: 35px;">
//                   <!-- GitHub -->
//                   <a href="https://github.com/yonas-fsaha" 
//                      style="color: #333; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     GitHub
//                   </a>
                  
//                   <!-- LinkedIn -->
//                   <a href="https://linkedin.com/in/yourprofile" 
//                      style="color: #0077b5; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     LinkedIn
//                   </a>
                  
//                   <!-- Twitter/X -->
//                   <a href="https://twitter.com/yourhandle" 
//                      style="color: #1da1f2; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     Twitter/X
//                   </a>
                  
//                   <!-- Telegram -->
//                   <a href="https://t.me/yourtelegram" 
//                      style="color: #0088cc; text-decoration: none; font-weight: 600; font-size: 15px;
//                             padding: 10px 20px; background: #f1f5f9; border-radius: 25px;
//                             display: inline-flex; align-items: center; gap: 8px;
//                             transition: all 0.3s ease;">
//                     Telegram
//                   </a>
//                 </div>
                
//                 <!-- Footer Note -->
//                 <p style="color: #94a3b8; font-size: 13px; margin: 0; line-height: 1.6;">
//                   This is an automated confirmation. Please do not reply to this email directly.<br>
//                   If you need to send additional information, please reply to the thread.
//                 </p>
//               </div>
              
//             </div>
//           </div>
          
//           <!-- Mobile Responsive Styles -->
//           <style>
//             @media only screen and (max-width: 600px) {
//               body {
//                 padding: 10px !important;
//               }
//               div[style*="max-width: 600px"] {
//                 margin: 0 !important;
//                 border-radius: 8px !important;
//               }
//               .content-padding {
//                 padding: 25px 20px !important;
//               }
//               h1 {
//                 font-size: 24px !important;
//               }
//               h3 {
//                 font-size: 18px !important;
//               }
//               /* Contact Info Stacking */
//               div[style*="display: grid"] {
//                 gap: 15px !important;
//               }
//               /* Social Links Stacking */
//               div[style*="justify-content: center"] {
//                 gap: 15px !important;
//                 justify-content: flex-start !important;
//                 padding: 0 10px !important;
//               }
//               div[style*="justify-content: center"] a {
//                 flex: 1;
//                 min-width: 140px;
//                 justify-content: center;
//               }
//               /* CTA Buttons */
//               a[style*="max-width: 280px"] {
//                 max-width: 100% !important;
//                 padding: 14px 20px !important;
//               }
//             }
            
//             /* Hover Effects */
//             a:hover {
//               opacity: 0.9;
//               transform: translateY(-2px);
//               box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15) !important;
//             }
//           </style>
//         </body>
//         </html>
//       `
//     }

//     // Send emails
//     await transporter.sendMail(adminMailOptions)
//     await transporter.sendMail(userMailOptions)

//     return NextResponse.json({
//       success: true,
//       message: 'Message sent successfully! Check your email for confirmation.'
//     })

//   } catch (error) {
//     console.error('Email error:', error)
    
//     let userMessage = 'Failed to send message. Please try again later.'
    
//     if (error.code === 'EAUTH') {
//       userMessage = 'Email configuration error. Please try again or contact me directly.'
//     } else if (error.code === 'ENOTFOUND') {
//       userMessage = 'Network error. Please check your internet connection.'
//     }

//     return NextResponse.json(
//       { 
//         success: false, 
//         message: userMessage 
//       },
//       { status: 500 }
//     )
//   }
// }



















