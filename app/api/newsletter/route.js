import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { email } = await request.json()

    // Validation
    if (!email?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Create transporter (same as your contact form)
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

    // Email to admin (you) - Newsletter subscription notification
    const adminMailOptions = {
      from: `"Newsletter Subscription" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📬 New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%);color:white;padding:20px;text-align:center;border-radius:8px 8px 0 0;">
            <h1 style="margin:0;font-size:22px;">🎉 New Newsletter Subscriber</h1>
          </div>
          <div style="background:#f8fafc;padding:20px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;">
            <div style="background:white;padding:18px;border-radius:6px;border-left:4px solid #8b5cf6;margin-bottom:15px;">
              <p style="margin:8px 0;"><strong style="color:#1e3c72;">📧 New Subscriber:</strong> ${email}</p>
              <p style="margin:8px 0;"><strong style="color:#1e3c72;">🕒 Subscribed on:</strong> ${new Date().toLocaleString('en-US', { 
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
              <p style="margin:8px 0;"><strong style="color:#1e3c72;">📍 Source:</strong> Website Footer Newsletter</p>
            </div>
            <div style="text-align:center;color:#64748b;font-size:13px;padding-top:15px;border-top:1px solid #e2e8f0;">
              <p>✅ New newsletter subscription from your portfolio website</p>
            </div>
          </div>
        </div>
      `
    }

    // Confirmation email to subscriber
    const subscriberMailOptions = {
      from: `"Yonas Fsaha" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ Welcome to Yonas Fsaha's Newsletter!`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;max-width:580px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
          <!-- Header -->
          <div style="background:linear-gradient(135deg,#8b5cf6 0%,#7c3aed 100%);color:white;padding:28px 20px;text-align:center;">
            <h1 style="margin:0 0 12px 0;font-size:26px;font-weight:700;line-height:1.2;">🎉 Welcome Aboard!</h1>
            <p style="margin:0;opacity:0.95;font-size:15px;">You're now subscribed to my newsletter</p>
          </div>
          
          <!-- Content -->
          <div style="padding:28px 20px;">
            <!-- Greeting -->
            <div style="margin-bottom:24px;">
              <p style="font-size:15px;line-height:1.5;color:#475569;margin:0 0 12px 0;">
                Thank you for subscribing to my newsletter! I'm excited to share my latest projects, tech insights, and industry updates with you.
              </p>
              <p style="font-size:15px;line-height:1.5;color:#475569;margin:0;">
                You can expect to receive updates about:
              </p>
            </div>
            
            <!-- What to Expect -->
            <div style="background:#f8fafc;border-radius:8px;padding:20px;margin:24px 0;border:1px solid #e2e8f0;">
              <h3 style="color:#1e3c72;margin:0 0 16px 0;font-size:18px;font-weight:600;">📋 What's in store:</h3>
              <ul style="color:#475569;margin:0;padding-left:20px;font-size:14px;line-height:1.6;">
                <li style="margin-bottom:8px;">🚀 Latest projects and case studies</li>
                <li style="margin-bottom:8px;">💡 Web development tips and tutorials</li>
                <li style="margin-bottom:8px;">📈 Digital marketing insights</li>
                <li style="margin-bottom:8px;">🛠️ Tech tools and resources</li>
                <li>🎯 Industry trends and opportunities</li>
              </ul>
            </div>
            
            <!-- Frequency -->
            <div style="text-align:center;margin:24px 0;padding:20px;background:linear-gradient(135deg,#f8fafc 0%,#ffffff 100%);border-radius:8px;border:1px dashed #e2e8f0;">
              <h3 style="color:#1e3c72;margin:0 0 12px 0;font-size:18px;font-weight:600;">📅 Newsletter Frequency</h3>
              <p style="color:#475569;margin:0;font-size:14px;line-height:1.4;">
                I send newsletters <strong style="color:#8b5cf6;">once a month</strong> with the most valuable content. No spam, just quality insights.
              </p>
            </div>
            
            <!-- Quick Links -->
            <div style="text-align:center;margin:24px 0;">
              <h3 style="color:#1e3c72;margin:0 0 16px 0;font-size:18px;font-weight:600;">🔗 Quick Links</h3>
              <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
                <a href="https://yonasfsaha.com" style="background:#8b5cf6;color:white;padding:12px 32px;text-decoration:none;border-radius:20px;font-weight:600;font-size:14px;display:inline-block;width:100%;max-width:260px;">
                  Visit My Portfolio
                </a>
                <a href="https://github.com/yonas-fsaha" style="background:#1e293b;color:white;padding:12px 32px;text-decoration:none;border-radius:20px;font-weight:600;font-size:14px;display:inline-block;width:100%;max-width:260px;">
                  View GitHub Projects
                </a>
              </div>
            </div>
            
            <!-- Social Links -->
            <div style="text-align:center;padding-top:24px;border-top:1px solid #e2e8f0;">
              <p style="color:#1e3c72;font-weight:700;margin:0 0 4px 0;font-size:20px;">Yonas Fsaha</p>
              <p style="color:#475569;margin:0 0 20px 0;font-size:14px;">Full-Stack Developer & Tech Entrepreneur</p>
              
              <!-- Social Links -->
              <div style="display:flex;justify-content:center;gap:12px;margin-bottom:20px;">
                <a href="https://github.com/yonas-fsaha" style="color:#333;text-decoration:none;font-weight:600;font-size:14px;padding:8px 16px;background:#f1f5f9;border-radius:16px;display:inline-block;border:1px solid #e2e8f0;">GitHub</a>
                <a href="https://linkedin.com/in/yonas-fsaha" style="color:#0077b5;text-decoration:none;font-weight:600;font-size:14px;padding:8px 16px;background:#f1f5f9;border-radius:16px;display:inline-block;border:1px solid #e2e8f0;">LinkedIn</a>
                <a href="https://x.com/YonasFsaha" style="color:#1da1f2;text-decoration:none;font-weight:600;font-size:14px;padding:8px 16px;background:#f1f5f9;border-radius:16px;display:inline-block;border:1px solid #e2e8f0;">X</a>
              </div>
              
              <!-- Footer -->
              <p style="color:#94a3b8;font-size:12px;margin:0;line-height:1.4;">
                You're receiving this email because you subscribed to my newsletter.<br>
                To unsubscribe, simply reply with "Unsubscribe" in the subject line.
              </p>
            </div>
          </div>
        </div>
      `
    }

    // Send both emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(subscriberMailOptions)

    // In a real app, you might want to save to a database here
    // For example: await saveToDatabase({ email, subscribedAt: new Date() })

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the newsletter! Check your email for confirmation.'
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    let userMessage = 'Failed to subscribe. Please try again later.'
    
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