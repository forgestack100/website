"use server"

export async function submitStartupForm(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    skills: formData.get("skills") as string,
    roleDescription: formData.get("roleDescription") as string,
    timeline: formData.get("timeline") as string,
    submittedAt: new Date().toISOString(),
  }

  try {
    // Option A: Send email notification
    await sendEmailNotification(data)

    // Option B: Save to database (if you have one)
    // await saveToDatabase(data)

    // Option C: Send to external service (like Airtable, Google Sheets, etc.)
    // await sendToExternalService(data)

    return { success: true, message: "Form submitted successfully!" }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { success: false, message: "Failed to submit form. Please try again." }
  }
}

// Email notification function
async function sendEmailNotification(data: any) {
  // Using a service like Resend, SendGrid, or Nodemailer
  const emailContent = `
    New Startup Hiring Request:
    
    Name: ${data.name}
    Company: ${data.company}
    Email: ${data.email}
    Skills Needed: ${data.skills}
    Role Description: ${data.roleDescription}
    Timeline: ${data.timeline}
    Submitted: ${data.submittedAt}
  `

  // Send email to yourself
  // await sendEmail({
  //   to: 'forgestack076@gmail.com',
  //   subject: `New Hiring Request from ${data.company}`,
  //   text: emailContent
  // })
}
