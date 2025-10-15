import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.company || !data.email || !data.skills || !data.roleDescription) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Add timestamp & unique ID
    const submissionData = {
      ...data,
      submittedAt: new Date().toISOString(),
      // simple unique id → YYYYMMDDHHMMSS-xxxx
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    }

    console.log("New startup form submission:", submissionData)

    // Send email notification to you
    const notificationEmail = await resend.emails.send({
      from: "Forgestack <onboarding@resend.dev>", // Using Resend's default domain for now
      to: ["forgestack076@gmail.com"],
      subject: `🚀 New Hiring Request from ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">🚀 New Hiring Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to hire through Forgestack!</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="margin-top: 0; color: #374151; border-bottom: 2px solid #059669; padding-bottom: 10px;">👤 Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Name:</td><td style="padding: 8px 0;">${data.name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Company:</td><td style="padding: 8px 0;">${data.company}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">${data.email}</a></td></tr>
              </table>
            </div>

            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="margin-top: 0; color: #374151; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">💼 Job Requirements</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Skills Needed:</td><td style="padding: 8px 0;">${data.skills}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Timeline:</td><td style="padding: 8px 0;">${data.timeline || "Not specified"}</td></tr>
              </table>
            </div>

            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="margin-top: 0; color: #374151; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">📝 Role Description</h2>
              <div style="background-color: #fefce8; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${data.roleDescription}</p>
              </div>
            </div>

            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <p style="margin: 0; font-size: 14px; color: #6b7280;">
                <strong>📅 Submitted:</strong> ${new Date(submissionData.submittedAt).toLocaleString()}<br>
                <strong>🆔 ID:</strong> ${submissionData.id}
              </p>
            </div>

            <div style="text-align: center;">
              <h3 style="color: #374151; margin-bottom: 20px;">⚡ Quick Actions</h3>
              <div style="margin-bottom: 15px;">
                <a href="mailto:${data.email}?subject=Re: Your Forgestack Hiring Request&body=Hi ${data.name},%0D%0A%0D%0AThank you for your interest in hiring through Forgestack! I've reviewed your requirements for ${data.company} and would like to discuss potential developer matches.%0D%0A%0D%0AWe have several qualified developers in our community who specialize in ${data.skills}. I'll be sending you their profiles shortly.%0D%0A%0D%0ABest regards,%0D%0AForgestack Team" 
                   style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 5px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  📧 Reply to ${data.name}
                </a>
              </div>
              <div>
                <a href="https://chat.whatsapp.com/Hyy3Ik3IWkDCE7zvL6KGZw" 
                   style="background: linear-gradient(135deg, #25d366 0%, #128c7e 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 5px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  💬 Share in WhatsApp Group
                </a>
              </div>
            </div>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the startup
    const confirmationEmail = await resend.emails.send({
      from: "Forgestack <onboarding@resend.dev>", // Using Resend's default domain for now
      to: [data.email],
      subject: `Thanks for your interest in Forgestack, ${data.name}! 🚀`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thanks for reaching out! 🎉</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We're excited to help ${data.company} find amazing developers</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 25px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <p style="margin-top: 0; font-size: 18px; color: #374151;">Hi ${data.name},</p>
              <p style="color: #6b7280; line-height: 1.6;">We've received your hiring request for <strong>${data.company}</strong> and are excited to help you find the perfect developer for your team!</p>
            </div>

            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
              <h2 style="margin-top: 0; color: #1e40af;">🎯 What happens next?</h2>
              <div style="margin-left: 0;">
                <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                  <div style="background-color: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 15px; flex-shrink: 0;">1</div>
                  <p style="margin: 0; color: #374151;">We'll review your requirements and match you with 3-5 qualified developers from our community</p>
                </div>
                <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                  <div style="background-color: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 15px; flex-shrink: 0;">2</div>
                  <p style="margin: 0; color: #374151;">You'll receive developer profiles with portfolios, skills, and availability within <strong>24 hours</strong></p>
                </div>
                <div style="display: flex; align-items: flex-start;">
                  <div style="background-color: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; margin-right: 15px; flex-shrink: 0;">3</div>
                  <p style="margin: 0; color: #374151;">Schedule interviews directly with candidates you're interested in - no middleman involved!</p>
                </div>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%); padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #f59e0b;">
              <h2 style="margin-top: 0; color: #92400e;">📋 Your Request Summary</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 5px 0; font-weight: bold; color: #6b7280;">Skills needed:</td><td style="padding: 5px 0; color: #374151;">${data.skills}</td></tr>
                <tr><td style="padding: 5px 0; font-weight: bold; color: #6b7280;">Timeline:</td><td style="padding: 5px 0; color: #374151;">${data.timeline || "Flexible"}</td></tr>
                <tr><td style="padding: 5px 0; font-weight: bold; color: #6b7280;">Submitted:</td><td style="padding: 5px 0; color: #374151;">${new Date(submissionData.submittedAt).toLocaleString()}</td></tr>
              </table>
            </div>

            <div style="background-color: white; padding: 25px; border-radius: 8px; margin-bottom: 25px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <h2 style="margin-top: 0; color: #374151;">📞 Need immediate assistance?</h2>
              <p style="color: #6b7280; margin-bottom: 15px;">Feel free to reach out if you have any urgent questions:</p>
              <div style="text-align: center;">
                <a href="mailto:forgestack076@gmail.com" style="background-color: #059669; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 5px; font-weight: bold;">📧 Email Us</a>
                <a href="tel:+2348141970149" style="background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 5px; font-weight: bold;">📱 Call Us</a>
                <a href="https://chat.whatsapp.com/Hyy3Ik3IWkDCE7zvL6KGZw" style="background-color: #25d366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 5px; font-weight: bold;">💬 WhatsApp</a>
              </div>
            </div>

            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #374151; font-size: 18px;">Best regards,</p>
              <p style="margin: 5px 0 0 0; color: #059669; font-weight: bold; font-size: 20px;">The Forgestack Team</p>
            </div>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">This email was sent because you submitted a hiring request on Forgestack. If you didn't make this request, please ignore this email.</p>
          </div>
        </div>
      `,
    })

    console.log("Notification email sent:", notificationEmail.data?.id)
    console.log("Confirmation email sent:", confirmationEmail.data?.id)

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form. Please try again or contact us directly at forgestack076@gmail.com",
      },
      { status: 500 },
    )
  }
}
