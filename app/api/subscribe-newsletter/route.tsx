import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)
const isEmailEnabled = Boolean(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const data = await request.json()

  // 1. basic validation
  if (!data.email) return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 })

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email))
    return NextResponse.json({ success: false, message: "Please enter a valid email." }, { status: 400 })

  const meta = {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    subscribedAt: new Date().toISOString(),
    source: data.source ?? "unknown",
  }

  // 2.  send emails only if the key is present
  if (isEmailEnabled) {
    try {
      /* ---- internal notification ---- */
      await resend.emails.send({
        from: "Forgestack <onboarding@resend.dev>",
        to: ["forgestack076@gmail.com"],
        subject: "📧 New Newsletter Subscription",
        html: `<p>${data.email} subscribed from <strong>${meta.source}</strong> at ${meta.subscribedAt}</p>`,
      })

      /* ---- welcome message ---- */
      await resend.emails.send({
        from: "Forgestack <onboarding@resend.dev>",
        to: [data.email],
        subject: "Welcome to Forgestack! 🚀",
        html: `<p>Thanks for subscribing – we’re glad you’re here! 🎉</p>`,
      })
    } catch (err) {
      console.error("Resend error:", err)
      // still return success so users don’t see a 500 locally
    }
  } else {
    console.warn("Email disabled – RESEND_API_KEY not set. Skipping send.")
  }

  return NextResponse.json({
    success: true,
    message: "Thanks for subscribing! If this were production, you’d have an email in your inbox 😉",
  })
}
